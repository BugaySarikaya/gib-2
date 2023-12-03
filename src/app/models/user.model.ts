export class User {
  id: number;
  name: string;
  surname: string;
  age: number;
  email: string;

  constructor(
    id: number,
    name: string,
    surname: string,
    age: number,
    email: string
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;
  }
}
