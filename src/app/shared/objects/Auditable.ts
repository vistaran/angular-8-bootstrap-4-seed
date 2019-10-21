import {ValidationResponse} from './ValidationResponse';

export class Auditable {
  private _id = '';
  private _name = '';
  private _createdDate = new Date();
  private _createdUser = '';
  private _updatedDate = new Date();
  private _updatedUser = '';

  public static Validate(i: Auditable): ValidationResponse {
    if (i == null) {
      return new ValidationResponse(false, '', 'Auditable is null');
    }

    if (i._id == null || i._id === '') {
      return new ValidationResponse(false, 'id', 'Auditable id is null or empty');
    }

    if (i._name == null || i._name === '') {
      return new ValidationResponse(false, 'name', 'Auditable name is null or empty');
    }

    if (i._createdDate == null) {
      return new ValidationResponse(false, 'createdDate', 'Auditable createdDate is null');
    }

    if (i._createdUser == null || i._createdUser === '') {
      return new ValidationResponse(false, 'createdUser', 'Auditable createdUser is null or empty');
    }

    if (i._updatedDate == null) {
      return new ValidationResponse(false, 'updatedDate', 'Auditable updatedDate is null');
    }

    if (i._updatedUser == null || i._updatedUser === '') {
      return new ValidationResponse(false, 'updatedUser', 'Auditable updatedUser is null or empty');
    }

    return new ValidationResponse(true, '', '');
  }

  constructor() {}

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get createdDate(): Date {
    return this._createdDate;
  }

  set createdDate(value: Date) {
    this._createdDate = value;
  }

  get createdUser(): string {
    return this._createdUser;
  }

  set createdUser(value: string) {
    this._createdUser = value;
  }

  get updatedDate(): Date {
    return this._updatedDate;
  }

  set updatedDate(value: Date) {
    this._updatedDate = value;
  }

  get updatedUser(): string {
    return this._updatedUser;
  }

  set updatedUser(value: string) {
    this._updatedUser = value;
  }
}
