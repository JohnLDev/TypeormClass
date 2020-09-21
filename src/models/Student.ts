import { IsEmail, Max, MaxLength, MinLength } from 'class-validator'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Class } from './Class'

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  @MaxLength(50, { message: 'oi mama aqui' })
  @MinLength(2)
  name: string

  @Column()
  @Max(99999)
  key: number

  @Column()
  @IsEmail()
  email: string

  @ManyToMany(() => Class, { eager: true })
  @JoinTable()
  classes: Class

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date
}
