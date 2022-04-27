package main

import (
	"adrService/addressService"
	"context"
	"errors"
	"fmt"
	"net"

	"github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
)

type addressServiceServer struct {
	addressService.UnimplementedAddressServiceServer
	savedAddresses []*addressService.Address
}

func newServer() *addressServiceServer {
	s := &addressServiceServer{}

	placeholder01 := newAddress("Mustermann", "Max", "Musterweg", 42, 12345, "Musterhausen")
	placeholder02 := newAddress("Doe", "John", "Sunsetstreet", 1, 54321, "Sunnyvale")

	s.savedAddresses = append(s.savedAddresses, placeholder01)
	s.savedAddresses = append(s.savedAddresses, placeholder02)

	return s
}

func (server *addressServiceServer) LookupAddress(ctx context.Context, person *addressService.Person) (*addressService.Address, error) {
	for _, address := range server.savedAddresses {
		if proto.Equal(address.Resident, person) {
			return address, nil
		}
	}
	return nil, errors.New("Person not found")
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func main() {
	fmt.Println("Starting server...")

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
