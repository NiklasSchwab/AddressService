import grpc
import AdrServiceDef_pb2
import AdrServiceDef_pb2_grpc


def run():
    channel = grpc.insecure_channel('localhost:50000')
    stub = AdrServiceDef_pb2_grpc.AddressServiceStub(channel)

    # simple request
    person = AdrServiceDef_pb2.Person()
    person.familyName = "Doe"
    person.givenName = "John"

    print("Making single request with single response...")
    address = stub.LookupAddress(person)
    print(address)
    print("...finished request!")

    # request with response stream
    print("Making single request with stream response...")
    for adr in stub.GetAllAddresses(AdrServiceDef_pb2.Empty()):
        print(adr)
    print("...finished request!")


if __name__ == '__main__':
    print("Running client...")
    run()
