import { Model } from './Model'
import { Eventing } from './Eventing'
import { Attributes } from './Attributes'
import { ApiSync } from './ApiSync'
import { Collection } from './Collection'

export interface UserProps {
  id?: number
  name?: string
  age?: number
}

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>('http://localhost:3000/users')
    )
  }

  static BuildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      'http://localhost:3000/users',
      (json: UserProps) => User.buildUser(json)
    )
  }
}
