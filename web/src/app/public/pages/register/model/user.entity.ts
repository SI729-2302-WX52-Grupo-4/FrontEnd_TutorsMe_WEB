export class UserEntity {
  firstName: string;
  lastname: string;
  birthDate: string;
  emailAddress: string;
  password: string;

  constructor() {
    this.firstName = '';
    this.lastname = '';
    this.birthDate = '';
    this.emailAddress = '';
    this.password = '';
  }
}
