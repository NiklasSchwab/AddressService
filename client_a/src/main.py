import grpc
import AdrServiceDef_pb2
import AdrServiceDef_pb2_grpc


def run():
    channel = grpc.insecure_channel('localhost:50000')
    stub = AdrServiceDef_pb2_grpc.AddressServiceStub(channel)

    person = AdrServiceDef_pb2.Person()
    person.familyName = "Doe"
    person.givenName = "John"

    address = stub.LookupAddress(person)
    print(address)


if __name__ == '__main__':
    print("Running client...")
    run()
