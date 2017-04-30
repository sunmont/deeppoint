set(HTTPS_SERVER_SOURCES
	server_ssl.cpp
)

file(GLOB SIMPLE_WEB_SERVER_HEADERS "${CMAKE_CURRENT_SOURCE_DIR}/../include/simple-web-server/*.hpp")
include_directories(../include)

if (OPENSSL_FOUND)
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -DHAVE_OPENSSL")
    include_directories(SYSTEM ${OPENSSL_INCLUDE_DIR})

    add_executable(server_ssl ${HTTPS_SERVER_SOURCES} ${SIMPLE_WEB_SERVER_HEADERS})
    target_link_libraries(server_ssl ${Boost_LIBRARIES} ${OPENSSL_LIBRARIES} ${CMAKE_THREAD_LIBS_INIT})
endif()

add_executable(server ${HTTP_SERVER_SOURCES} ${SIMPLE_WEB_SERVER_HEADERS})
target_link_libraries(server ${Boost_LIBRARIES} ${CMAKE_THREAD_LIBS_INIT})

#install(TARGETS server_ssl 
#	RUNTIME DESTINATION bin
#	COMPONENT runtime
#)
