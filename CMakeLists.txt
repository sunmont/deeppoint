project(deeppoint)
cmake_minimum_required(VERSION 2.8)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11 -Wall -Wextra -fstack-protector-all")

string(REGEX MATCH "([0-9]+\\.[0-9]+\\.[0-9]+)" DEBFULLVERSION "${DEBCHANGELOG}")

include_directories(.)
include(cmake/locate_library.cmake)

#LOCATE_LIBRARY(THESIMPLEWEBSERVER "Simple-Web-Server/server_http.hpp" "thesimplewebserver")
#LOCATE_LIBRARY(THESIMPLEWEBSERVER_SSL "Simple-Web-Server/server_https.hpp" "thesimplewebserver_ssl")

find_package(Threads REQUIRED)
find_package(Boost COMPONENTS system thread filesystem date_time REQUIRED)

include_directories(SYSTEM ${Boost_INCLUDE_DIR})

find_package(OpenSSL)

add_subdirectory(example)
add_subdirectory(src)

file(GLOB headers "${CMAKE_CURRENT_SOURCE_DIR}/Simple-Web-Server/*.hpp")
install(FILES ${headers} DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/include/simple-web-server)
