import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public Sync: Sync<UserProps> = new Sync<UserProps>(
    'http://localhost:3000/users'
  );
  constructor(private data: UserProps) {}
}
