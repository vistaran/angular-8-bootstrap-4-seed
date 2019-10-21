import {Auditable} from './Auditable';
import {ValidationResponse} from './ValidationResponse';

export class User extends Auditable {
  private _email = '';
  private _photoUrl = '';
  private _photoBase64 = '';

  public static Validate(i: User): ValidationResponse {
    if (!Auditable.Validate(i).isValid) {
      return Auditable.Validate(i);
    }

    if (i._email == null || i._email === '') {
      return new ValidationResponse(false, 'email', 'Auditable email is null or empty');
    }


    return new ValidationResponse(true, '', '');
  }

  constructor(i: any = {}) {
    super();
    Object.assign(this, i);
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get photoUrl(): string {
    return this._photoUrl;
  }

  set photoUrl(value: string) {
    this._photoUrl = value;
  }

  get photoBase64(): string {
    return this._photoBase64;
  }

  set photoBase64(value: string) {
    this._photoBase64 = value;
  }
}
