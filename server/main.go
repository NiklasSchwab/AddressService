package main

import (
	"adrService/addressService"
	"context"
	"errors"
	"log"
	"net"
	"os"

	"github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
)

var (
	infoLog  *log.Logger
	debugLog *log.Logger
	errorLog *log.Logger
)

type addressServiceServer struct {
	addressService.UnimplementedAddressServiceServer
	savedAddresses []*addressService.Address
}

func newServer() *addressServiceServer {
	s := &addressServiceServer{}

	placeholder01 := newAddress("Mustermann", "Max", "Musterweg", 1, 12345, "Musterhausen")
	placeholder02 := newAddress("Doe", "John", "Mulholland Drive", 42, 91364, "Los Angeles")

	s.savedAddresses = append(s.savedAddresses, placeholder01)
	s.savedAddresses = append(s.savedAddresses, placeholder02)

	return s
}

func (server *addressServiceServer) LookupAddress(ctx context.Context, person *addressService.Person) (*addressService.Address, error) {
	debugLog.Println("RPC: LookupAddress")
	for _, address := range server.savedAddresses {
		if proto.Equal(address.Resident, person) {
			return address, nil
		}
	}
	return nil, errors.New("Person not found")
}

func (server *addressServiceServer) GetAllAddresses(_ *addressService.Empty, stream addressService.AddressService_GetAllAddressesServer) error {
	debugLog.Println("RPC: GetAllAddresses")
	for _, address := range server.savedAddresses {
		debugLog.Println("Stream: Pushing element...")
		err := stream.Send(address)
		debugLog.Println("Stream: ...pushed!")
		if err != nil {
			return err
		}
	}
	return nil
}

func check(e error) {
	if e != nil {
		errorLog.Panicln(e)
	}
}

func init() {
	infoLog = log.New(os.Stdout, "INFO: ", log.Ldate|log.Lmicroseconds)
	debugLog = log.New(os.Stdout, "DEBUG: ", log.Ldate|log.Lmicroseconds)
	errorLog = log.New(os.Stdout, "ERROR: ", log.Ldate|log.Lmicroseconds)
}

func main() {
	infoLog.Println("Starting server...")

	lis, err := net.Listen("tcp", "localhost:50000")
	check(err)

	grpcServer := grpc.NewServer()

	addressService.RegisterAddressServiceServer(grpcServer, newServer())
	grpcServer.Serve(lis)
}

func newAddress(familyName string, givenName string, street string, house int32, zip int32, city string) *addressService.Address {

	resident := &addressService.Person{
		FamilyName: familyName,
		GivenName:  givenName,
	}

	ret := &addressService.Address{
		Resident: resident,
		Street:   street,
		House:    house,
		ZipCode:  zip,
		City:     city,
	}

	return ret
}
