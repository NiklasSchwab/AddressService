package main

import "adrService/addressService"

func check(e error) {
	if e != nil {
		errorLog.Panicln(e)
	}
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

func mockPopulateAddressBook(savedAddresses *[]*addressService.Address) {
	mocks := []*addressService.Address{
		newAddress("Mustermann", "Max", "Musterweg", 1, 12345, "Musterhausen"),
		newAddress("Doe", "John", "Mulholland Drive", 42, 91364, "Los Angeles"),
		newAddress("McCartney", "Paul", "Penny Lane", 44, 1967, "Liverpool"),
		newAddress("Lennon", "John", "Strawberry Fields", 44, 1967, "Liverpool"),
		newAddress("Harrison", "George", "Abbey Road", 44, 1968, "London"),
		newAddress("Starr", "Ringo", "A Yellow Submarine", 44, 1967, "Beneath The Waves"),
	}

	for _, addr := range mocks {
		*savedAddresses = append(*savedAddresses, addr)
	}

}
