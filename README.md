# Address Service - A gRPC demo project
This "Address Service" is a simple application with a server written in Go and clients written in Python, Go and an Angular web app. Server and clients communicate with gRPC calls, the web client also makes use of a RESTful API.

The RESTful API for the web client was defined with OpenAPI and a server (written in Go) was generated with Swagger.

To connect the web client with the gRPC server, an Envoy proxy server is required. Config and Dockerfiles (MacOS) are provided.

To (re-)generate all necessary proto files at once, a bash script is provided.

This is a personal project to get familiar with different features of gRPC and how to use it in different languages and with various technologies.
This code will also be used for demonstrating gRPC during the summer semester 2022 seminar at the Karlsruhe University of Applied Sciences.

The project was tested on MacOS BigSur 11.6.5 with the Apple Silicon architecture.
