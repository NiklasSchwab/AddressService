import grpc
import addrService_pb2 as pb
import addrService_pb2_grpc as pb_grpc


def run():
    # create a channel and bind the client stub to it
    channel = grpc.insecure_channel('localhost:50000')
    stub = pb_grpc.AddressServiceStub(channel)

    # first define a person with the help of Protocolbuffers
    person = pb.Person()
    person.familyName = "Mustermann"
    person.givenName = "Max"

     # a simple request with a single parameter and a single response 
    print("Making single request with single response...")
    address = stub.LookupAddress(person)
    print(address)
    print("...finished request!")
    
    # a request with a single parameter (our defined empty Message) and a response stream
    print("Making single request with stream response...")
    for adr in stub.GetAllAddresses(pb.Empty()):
        print(adr)
    print("...finished request!")

    # a simple request with a single parameter and a single array response 
    print("Making single request with single array response...")
    addressList = stub.GetAddressList(pb.Empty())
    print(addressList)
    print("...finished request!")


if __name__ == '__main__':
    print("Running client...")
    run()
