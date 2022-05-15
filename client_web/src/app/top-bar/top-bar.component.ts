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

  rpc() {
    console.log("Pressed RPC button.")
    this.addressListService.fetchRPC()
  }

  stopStream() {
    this.addressListService.stopStream();
  }

}
