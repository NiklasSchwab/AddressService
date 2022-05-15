import { TestBed } from '@angular/core/testing';

import { AddressListService } from './address-list.service';

describe('AddressListService', () => {
  let service: AddressListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
