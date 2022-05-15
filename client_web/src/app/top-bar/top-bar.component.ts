import { Component, OnInit } from '@angular/core';
import { AddressListService } from '../address-list.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent implements OnInit {

  constructor(private addressListService: AddressListService) { }

  ngOnInit(): void {
  }

  rest() {
    console.log("Pressed REST button.")
    this.addressListService.fetchREST()
  }

  rpcStream() {
    console.log("Pressed RPC stream button.")
    this.addressListService.fetchRPCStream()
  }

  rpcList() {
    console.log("Pressed RPC list button.")
    this.addressListService.fetchRPCList()
  }

  stopStream() {
    this.addressListService.stopStream();
  }

}
