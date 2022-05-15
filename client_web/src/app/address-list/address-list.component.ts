import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressListService } from '../address-list.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.sass']
})
export class AddressListComponent implements OnInit {

  constructor(private addressListService: AddressListService) { }

  ngOnInit(): void {
  }

  addresses = this.addressListService.addrList;

}
