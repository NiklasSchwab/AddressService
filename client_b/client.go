package main

import (
	"context"
	"goClient/addressService"
	"io"
	"log"
	"os"

	"google.golang.org/grpc/credentials/insecure"

	"google.golang.org/grpc"
)

var (
	infoLog  *log.Logger
	debugLog *log.Logger
	errorLog *log.Logger
)

func init() {
	infoLog = log.New(os.Stdout, "INFO: ", log.Ldate|log.Lmicroseconds)
	debugLog = log.New(os.Stdout, "DEBUG: ", log.Ldate|log.Lmicroseconds)
	errorLog = log.New(os.Stdout, "ERROR: ", log.Ldate|log.Lmicroseconds)
}

func main() {
	infoLog.Println("Starting client...")

	var opts []grpc.DialOption
	opts = append(opts, grpc.WithTransportCredentials(insecure.NewCredentials()))

	conn, err := grpc.Dial("localhost:50000", opts...)
	check(err)
	defer conn.Close()

	client := addressService.NewAddressServiceClient(conn)

	wantedPerson := &addressService.Person{
		GivenName:  "John",
		FamilyName: "Doe",
	}

	address, err := client.LookupAddress(context.Background(), wantedPerson)
	check(err)
	debugLog.Println(address)

	debugLog.Println("Stream starts...")
	stream, err := client.GetAllAddresses(context.Background(), &addressService.Empty{})
	for {
		address, err := stream.Recv()
		if err == io.EOF {
			debugLog.Println("...stream ended.")
			break
		}
		check(err)
		debugLog.Println(address)
	}
}

func check(e error) {
	if e != nil {
		errorLog.Panicln(e)
	}
}
