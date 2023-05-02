import { UserEdit } from './views/UserEdit'
import { User } from './models/User'
import { UserList } from './views/UserList'

const user = User.buildUser({ name: 'NAME', age: 20 })
const user2 = User.buildUser({ name: 'John', age: 23 })
const user3 = User.buildUser({ name: 'Jane', age: 24 })
const user4 = User.buildUser({ name: 'Jack', age: 25 })

const collection = User.buildUserCollection()

collection.on('change', () => {
  const root = document.getElementById('root')

  if (root) {
    new UserList(root, collection).render()
  } else {
    throw new Error('Root element not found')
  }
})

collection.fetch()
