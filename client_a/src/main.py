import grpc
import AdrServiceDef_pb2
import AdrServiceDef_pb2_grpc


def run():
    # create a channel and bind the client stub to it
    channel = grpc.insecure_channel('localhost:50000')
    stub = AdrServiceDef_pb2_grpc.AddressServiceStub(channel)

    # first define a person with the help of Protocolbuffers
    person = AdrServiceDef_pb2.Person()
    person.familyName = "Doe"
    person.givenName = "John"

     # a simple request with a single parameter and a single response 
    print("Making single request with single response...")
    address = stub.LookupAddress(person)
    print(address)
    print("...finished request!")
    

    # a request with a single parameter (our defined empty Message) and a response stream
    print("Making single request with stream response...")
    for adr in stub.GetAllAddresses(AdrServiceDef_pb2.Empty()):
        print(adr)
    print("...finished request!")


if __name__ == '__main__':
    print("Running client...")
    run()
