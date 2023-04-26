import axios, { AxiosResponse } from 'axios'
import { Collection } from './models/Collection'
import { User, UserProps } from './models/User'
import { UserForm } from './views/UserForm'

const userForm = new UserForm(document.getElementById('root'))

userForm.render()
