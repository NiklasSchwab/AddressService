package addressServiceProto

func newAddress(familyName string, givenName string, street string, house int32, zip int32, city string) *Address {

	resident := &Person{
		FamilyName: familyName,
		GivenName:  givenName,
	}

	ret := &Address{
		Resident: resident,
		Street:   street,
		House:    house,
		ZipCode:  zip,
		City:     city,
	}

	return ret
}

func MockPopulateAddressBook(savedAddresses *[]*Address) {
	mocks := []*Address{}

	for i := 1; i <= 1000; i++ {
		addr := newAddress("Mustermann", "Max", "Musterweg", int32(i), 12345, "Musterhausen")
		mocks = append(mocks, addr)
	}

	for _, addr := range mocks {
		*savedAddresses = append(*savedAddresses, addr)
	}

}
