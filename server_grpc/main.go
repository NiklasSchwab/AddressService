package main

import (
	pb "addrServiceGrpcServer/addressServiceProto"
	"context"
	"errors"
	"log"
	"net"
	"os"
	"time"

	"github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
)

var (
	infoLog  *log.Logger
	debugLog *log.Logger
	errorLog *log.Logger
)

type addressServiceServer struct {
	pb.UnimplementedAddressServiceServer
	savedAddresses []*pb.Address
}

func (server *addressServiceServer) LookupAddress(ctx context.Context, person *pb.Person) (*pb.Address, error) {
	debugLog.Println("RPC: LookupAddress")
	for _, address := range server.savedAddresses {
		if proto.Equal(address.Resident, person) {
			return address, nil
		}
	}
	return nil, errors.New("Person not found")
}

func (server *addressServiceServer) GetAllAddresses(_ *pb.Empty, stream pb.AddressService_GetAllAddressesServer) error {
	debugLog.Println("RPC: GetAllAddresses")
	for _, address := range server.savedAddresses {
		time.Sleep(5 * time.Millisecond)
		debugLog.Println("Stream: Pushing element...")
		err := stream.Send(address)
		debugLog.Println("Stream: ...pushed!")
		if err != nil {
			debugLog.Println("An error occured while streaming!")
			return err
		}
	}
	debugLog.Println("Streaming ended!")
	return nil
}

func (server *addressServiceServer) GetAddressList(ctx context.Context, _ *pb.Empty) (*pb.AddressList, error) {
	debugLog.Println("RPC: GetAddressList")
	ret := &pb.AddressList{
		AddrList: server.savedAddresses[:],
	}
	return ret, nil
}

func newServer() *addressServiceServer {
	s := &addressServiceServer{}
	mockPopulateAddressBook(&s.savedAddresses)
	return s
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
	pb.RegisterAddressServiceServer(grpcServer, newServer())

	grpcServer.Serve(lis)
}
