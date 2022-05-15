package main

import pb "addrServiceGrpcServer/addressServiceProto"

func check(e error) {
	if e != nil {
		errorLog.Panicln(e)
	}
}

func newAddress(familyName string, givenName string, street string, house int32, zip int32, city string) *pb.Address {

	resident := &pb.Person{
		FamilyName: familyName,
		GivenName:  givenName,
	}

	ret := &pb.Address{
		Resident: resident,
		Street:   street,
		House:    house,
		ZipCode:  zip,
		City:     city,
	}

	return ret
}

func mockPopulateAddressBook(savedAddresses *[]*pb.Address) {
	mocks := []*pb.Address{}

	for i := 1; i <= 1000; i++ {
		addr := newAddress("Mustermann", "Max", "Musterweg", int32(i), 12345, "Musterhausen")
		mocks = append(mocks, addr)
	}

	for _, addr := range mocks {
		*savedAddresses = append(*savedAddresses, addr)
	}

}
