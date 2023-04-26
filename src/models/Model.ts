import { AxiosPromise } from 'axios'

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K]
  set(update: T): void
  getAll(): T
}

interface Sync<T> {
  fetch(id: number): AxiosPromise<T>
  save(data: T): AxiosPromise<T>
}

interface Events {
  on(eventName: string, callback: () => void): void
  trigger(eventName: string): void
}

export class Model<T> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  get = this.attributes.get
  on = this.events.on
  trigger = this.events.trigger
  set = this.attributes.set
  fetch = this.sync.fetch
  save = this.sync.save
}
