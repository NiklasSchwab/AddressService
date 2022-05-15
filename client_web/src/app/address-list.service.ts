import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address, Empty, Person } from "src/proto/adr-service-def.pb";
import { AddressServiceClient } from 'src/proto/adr-service-def.pbsc';
import { Any } from '@ngx-grpc/well-known-types';
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

  fetchRPC() {
    console.log("Fetching Addresses via gRPC...") 
    this.clearList()   
    this.sub = this.client.getAllAddresses(new Empty()).subscribe(res => {
      this.addToList(res)
    });
  }

  stopStream() {
    this.sub.unsubscribe();
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
