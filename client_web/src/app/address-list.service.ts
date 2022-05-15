import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address, AddressList, Empty } from "src/proto/addr-service.pb";
import { AddressServiceClient } from 'src/proto/addr-service.pbsc';
import { Subscription } from 'rxjs';

interface ResponsePerson {
  familyName: string;
  givenName: string;
}

interface ResponseAddress {
  resident: ResponsePerson;
  street: string;
  house: number;
  zipCode: number;
  city: string;
}

@Injectable({
  providedIn: 'root'
})
export class AddressListService {

  constructor(
    private client: AddressServiceClient,
    private http: HttpClient
    ) { }

  addrList: Address[] = [];

  sub: Subscription = new Subscription();


  addToList(addr: Address) {
    this.addrList.push(addr);
  }

  getList(): Address[] {
    return this.addrList;
  }

  clearList() {
    this.addrList.splice(0)
  }

  fetchRPCStream() {
    console.log("Fetching Addresses via gRPC stream...") 
    this.clearList()   
    this.sub = this.client.getAllAddresses(new Empty()).subscribe(res => {
      this.addToList(res)
    });
  }

  stopStream() {
    this.sub.unsubscribe();
  }

  fetchRPCList() {
    console.log("Fetching Addresses via single gRPC call...") 
    this.clearList()   
    this.client.getAddressList(new Empty()).subscribe(res => {
      if (res.addrList) {
        res.addrList.forEach((addr: Address) => {
          this.addToList(new Address(addr))
        });
      }
    });
  }

  fetchREST() {
    console.log("Fetching Addresses via RESTful API...")
    this.clearList()
    this.http.get<ResponseAddress[]>("http://localhost:9999/addresses").subscribe((res: ResponseAddress[]) => {
      res.forEach((addr: ResponseAddress) => {
        this.addToList(new Address(addr))
      });
    });
  } 

}
