/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for Person
 */
export class Person implements GrpcMessage {
  static id = 'Person';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Person();
    Person.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Person) {
    _instance.familyName = _instance.familyName || '';
    _instance.givenName = _instance.givenName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Person, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.familyName = _reader.readString();
          break;
        case 2:
          _instance.givenName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Person.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Person, _writer: BinaryWriter) {
    if (_instance.familyName) {
      _writer.writeString(1, _instance.familyName);
    }
    if (_instance.givenName) {
      _writer.writeString(2, _instance.givenName);
    }
  }

  private _familyName?: string;
  private _givenName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Person to deeply clone from
   */
  constructor(_value?: RecursivePartial<Person.AsObject>) {
    _value = _value || {};
    this.familyName = _value.familyName;
    this.givenName = _value.givenName;
    Person.refineValues(this);
  }
  get familyName(): string | undefined {
    return this._familyName;
  }
  set familyName(value: string | undefined) {
    this._familyName = value;
  }
  get givenName(): string | undefined {
    return this._givenName;
  }
  set givenName(value: string | undefined) {
    this._givenName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Person.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Person.AsObject {
    return {
      familyName: this.familyName,
      givenName: this.givenName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Person.AsProtobufJSON {
    return {
      familyName: this.familyName,
      givenName: this.givenName
    };
  }
}
export module Person {
  /**
   * Standard JavaScript object representation for Person
   */
  export interface AsObject {
    familyName?: string;
    givenName?: string;
  }

  /**
   * Protobuf JSON representation for Person
   */
  export interface AsProtobufJSON {
    familyName?: string;
    givenName?: string;
  }
}

/**
 * Message implementation for Address
 */
export class Address implements GrpcMessage {
  static id = 'Address';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Address();
    Address.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Address) {
    _instance.resident = _instance.resident || undefined;
    _instance.street = _instance.street || '';
    _instance.house = _instance.house || 0;
    _instance.zipCode = _instance.zipCode || 0;
    _instance.city = _instance.city || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Address,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.resident = new Person();
          _reader.readMessage(
            _instance.resident,
            Person.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.street = _reader.readString();
          break;
        case 3:
          _instance.house = _reader.readInt32();
          break;
        case 4:
          _instance.zipCode = _reader.readInt32();
          break;
        case 5:
          _instance.city = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Address.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Address, _writer: BinaryWriter) {
    if (_instance.resident) {
      _writer.writeMessage(
        1,
        _instance.resident as any,
        Person.serializeBinaryToWriter
      );
    }
    if (_instance.street) {
      _writer.writeString(2, _instance.street);
    }
    if (_instance.house) {
      _writer.writeInt32(3, _instance.house);
    }
    if (_instance.zipCode) {
      _writer.writeInt32(4, _instance.zipCode);
    }
    if (_instance.city) {
      _writer.writeString(5, _instance.city);
    }
  }

  private _resident?: Person;
  private _street?: string;
  private _house?: number;
  private _zipCode?: number;
  private _city?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Address to deeply clone from
   */
  constructor(_value?: RecursivePartial<Address.AsObject>) {
    _value = _value || {};
    this.resident = _value.resident ? new Person(_value.resident) : undefined;
    this.street = _value.street;
    this.house = _value.house;
    this.zipCode = _value.zipCode;
    this.city = _value.city;
    Address.refineValues(this);
  }
  get resident(): Person | undefined {
    return this._resident;
  }
  set resident(value: Person | undefined) {
    this._resident = value;
  }
  get street(): string | undefined {
    return this._street;
  }
  set street(value: string | undefined) {
    this._street = value;
  }
  get house(): number | undefined {
    return this._house;
  }
  set house(value: number | undefined) {
    this._house = value;
  }
  get zipCode(): number | undefined {
    return this._zipCode;
  }
  set zipCode(value: number | undefined) {
    this._zipCode = value;
  }
  get city(): string | undefined {
    return this._city;
  }
  set city(value: string | undefined) {
    this._city = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Address.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Address.AsObject {
    return {
      resident: this.resident ? this.resident.toObject() : undefined,
      street: this.street,
      house: this.house,
      zipCode: this.zipCode,
      city: this.city
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Address.AsProtobufJSON {
    return {
      resident: this.resident ? this.resident.toProtobufJSON(options) : null,
      street: this.street,
      house: this.house,
      zipCode: this.zipCode,
      city: this.city
    };
  }
}
export module Address {
  /**
   * Standard JavaScript object representation for Address
   */
  export interface AsObject {
    resident?: Person.AsObject;
    street?: string;
    house?: number;
    zipCode?: number;
    city?: string;
  }

  /**
   * Protobuf JSON representation for Address
   */
  export interface AsProtobufJSON {
    resident?: Person.AsProtobufJSON | null;
    street?: string;
    house?: number;
    zipCode?: number;
    city?: string;
  }
}

/**
 * Message implementation for AddressList
 */
export class AddressList implements GrpcMessage {
  static id = 'AddressList';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddressList();
    AddressList.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddressList) {
    _instance.addrList = _instance.addrList || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddressList,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Address();
          _reader.readMessage(
            messageInitializer1,
            Address.deserializeBinaryFromReader
          );
          (_instance.addrList = _instance.addrList || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    AddressList.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddressList,
    _writer: BinaryWriter
  ) {
    if (_instance.addrList && _instance.addrList.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.addrList as any,
        Address.serializeBinaryToWriter
      );
    }
  }

  private _addrList?: Address[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddressList to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddressList.AsObject>) {
    _value = _value || {};
    this.addrList = (_value.addrList || []).map(m => new Address(m));
    AddressList.refineValues(this);
  }
  get addrList(): Address[] | undefined {
    return this._addrList;
  }
  set addrList(value: Address[] | undefined) {
    this._addrList = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddressList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddressList.AsObject {
    return {
      addrList: (this.addrList || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AddressList.AsProtobufJSON {
    return {
      addrList: (this.addrList || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module AddressList {
  /**
   * Standard JavaScript object representation for AddressList
   */
  export interface AsObject {
    addrList?: Address.AsObject[];
  }

  /**
   * Protobuf JSON representation for AddressList
   */
  export interface AsProtobufJSON {
    addrList?: Address.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for Empty
 */
export class Empty implements GrpcMessage {
  static id = 'Empty';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Empty();
    Empty.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Empty) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Empty, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    Empty.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Empty, _writer: BinaryWriter) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Empty to deeply clone from
   */
  constructor(_value?: RecursivePartial<Empty.AsObject>) {
    _value = _value || {};
    Empty.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Empty.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Empty.AsObject {
    return {};
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Empty.AsProtobufJSON {
    return {};
  }
}
export module Empty {
  /**
   * Standard JavaScript object representation for Empty
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for Empty
   */
  export interface AsProtobufJSON {}
}
