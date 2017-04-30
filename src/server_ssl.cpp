#include "simple-web-server/server_https.hpp"
#include "simple-web-server/client_https.hpp"
#include "simple-web-server/crypto.hpp"

#define BOOST_SPIRIT_THREADSAFE
#include <boost/property_tree/ptree.hpp>
#include <boost/property_tree/json_parser.hpp>
#include <fstream>
#include <boost/filesystem.hpp>
#include <vector>
#include <algorithm>
#include <map>

using namespace std;
using namespace boost::property_tree;

typedef SimpleWeb::Server<SimpleWeb::HTTPS> HttpsServer;

void default_resource_send(const HttpsServer &server, const shared_ptr<HttpsServer::Response> &response,
                           const shared_ptr<ifstream> &ifs);

std::shared_ptr<HttpsServer> _server; 
auto default_post = [_server](shared_ptr<HttpsServer::Response> response, shared_ptr<HttpsServer::Request> request) {
    auto content=request->content.string();
    
    *response << "HTTP/1.1 200 OK\r\nContent-Length: " << content.length() << "\r\n\r\n" << content;
};
    
 auto default_get = [_server](shared_ptr<HttpsServer::Response> response, shared_ptr<HttpsServer::Request> request) {
    try {
        auto web_root_path = boost::filesystem::canonical("web");
        auto path = boost::filesystem::canonical(web_root_path/request->path);

        //Check if path is within web_root_path
        if(distance(web_root_path.begin(), web_root_path.end())>distance(path.begin(), path.end()) ||
           !equal(web_root_path.begin(), web_root_path.end(), path.begin()))
            throw invalid_argument("path must be within root path");
        if(boost::filesystem::is_directory(path))
            path /= "index.html";
        if(!(boost::filesystem::exists(path) && boost::filesystem::is_regular_file(path)))
            throw invalid_argument("file does not exist");

        // debug
        cout << "Get path: " << path.string() << endl;

        std::string cache_control, etag;

        auto ifs = make_shared<ifstream>();
        ifs->open(path.string(), ifstream::in | ios::binary | ios::ate);
        
        if(*ifs) {
            auto length = ifs->tellg();
            ifs->seekg(0, ios::beg);
            
            *response << "HTTP/1.1 200 OK\r\n" << cache_control << etag << "Content-Length: " << length << "\r\n\r\n";
            default_resource_send(*_server, response, ifs);
        }
        else
            throw invalid_argument("could not read file");
    }
    catch(const exception &e) {
        string content="Could not open path " + request->path + ": " + e.what();
        *response << "HTTP/1.1 400 Bad Request\r\nContent-Length: " << content.length() << "\r\n\r\n" << content;
    }
};
    
typedef std::function<void(shared_ptr<HttpsServer::Response> response, shared_ptr<HttpsServer::Request> request)> Callback;
std::map<string, Callback> _handlers  {
        {"default_get", default_get},
        {"default_post", default_post}    
};
 
class config 
{
    public: 
        string ssl_cert_file;
        string ssl_key_file;
        unsigned short port;

        config(const string &config_file) {
            initialize(config_file);
        }
        void add_handlers(HttpsServer& server)
        {
            // handler name : path pattern
            for (ptree :: value_type &handler : root.get_child("handlers"))
            {
                string _handler = handler.first;
                string _path_pattern = handler.second.get_value<string>("path");
                string _verb = handler.second.get_value<string>("verb");     

                // add resource
                if (_path_pattern.empty())
                {
                    server.default_resource[_verb] = _handlers[_handler];
                } else {
                    server.resource[_path_pattern][_verb] = _handlers[_handler]; 
                }
            }
        }
        bool initialize(const ptree &config)
        {
            // certs
            ssl_cert_file = config.get<string>("ssl_cert");
            ssl_key_file = config.get<string>("ssl_key");
            port = config.get<int>("port");
        }
        bool initialize(const string &config_file)
        {
            read_json(config_file, root);
            initialize(root);
        }
    private:
        ptree root;
};

int main(int argc, char **argv) {
    config _conf(argv[1]);

    _server = std::make_shared<HttpsServer>(_conf.ssl_cert_file, _conf.ssl_key_file);
    _server->config.port = _conf.port; //8080;

    _conf.add_handlers(*_server);

    thread server_thread([_server](){
        //Start server
        _server->start();
    });
    
    //this_thread::sleep_for(chrono::seconds(1));
    server_thread.join();
    
    return 0;
}

void default_resource_send(const HttpsServer &server, const shared_ptr<HttpsServer::Response> &response,
                           const shared_ptr<ifstream> &ifs) {
    //read and send 128 KB at a time
    static vector<char> buffer(131072); // Safe when server is running on one thread
    streamsize read_length;

    if((read_length = ifs->read(&buffer[0], buffer.size()).gcount())>0) {
        response->write(&buffer[0], read_length);
        if(read_length == static_cast<streamsize>(buffer.size())) {
            server.send(response, [&server, response, ifs](const boost::system::error_code &ec) {
                if(!ec)
                    default_resource_send(server, response, ifs);
                else
                    cerr << "Connection interrupted" << endl;
            });
        }
    }
}
