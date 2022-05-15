/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './addr-service.pb';
import { GRPC_ADDRESS_SERVICE_CLIENT_SETTINGS } from './addr-service.pbconf';
/**
 * Service client implementation for AddressService
 */
@Injectable({ providedIn: 'any' })
export class AddressServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /AddressService/LookupAddress
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Address>>
     */
    lookupAddress: (
      requestData: thisProto.Person,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Address>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/AddressService/LookupAddress',
        requestData,
        requestMetadata,
        requestClass: thisProto.Person,
        responseClass: thisProto.Address
      });
    },
    /**
     * Server streaming: /AddressService/GetAllAddresses
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Address>>
     */
    getAllAddresses: (
      requestData: thisProto.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Address>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/AddressService/GetAllAddresses',
        requestData,
        requestMetadata,
        requestClass: thisProto.Empty,
        responseClass: thisProto.Address
      });
    },
    /**
     * Unary call: /AddressService/GetAddressList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AddressList>>
     */
    getAddressList: (
      requestData: thisProto.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AddressList>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/AddressService/GetAddressList',
        requestData,
        requestMetadata,
        requestClass: thisProto.Empty,
        responseClass: thisProto.AddressList
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_ADDRESS_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('AddressService', settings);
  }

  /**
   * Unary call @/AddressService/LookupAddress
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Address>
   */
  lookupAddress(
    requestData: thisProto.Person,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Address> {
    return this.$raw
      .lookupAddress(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/AddressService/GetAllAddresses
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Address>
   */
  getAllAddresses(
    requestData: thisProto.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Address> {
    return this.$raw
      .getAllAddresses(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/AddressService/GetAddressList
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AddressList>
   */
  getAddressList(
    requestData: thisProto.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AddressList> {
    return this.$raw
      .getAddressList(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
