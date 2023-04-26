import axios, { AxiosResponse } from 'axios'
import { Collection } from './models/Collection'
import { User, UserProps } from './models/User'

const collection = User.BuildUserCollection()

collection.on('change', () => {
  console.log(collection)
})

collection.fetch()
