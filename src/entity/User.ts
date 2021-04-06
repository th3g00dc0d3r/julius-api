import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { Entry } from './Entry'

@Entity()
export class User {
  constructor(firstName: string, lastName: string, age: number, email: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.email = email
  }

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  age: number

  @Column()
  email: string

  @OneToMany(() => Entry, (entry) => entry.user)
  entries: Entry[]
}
