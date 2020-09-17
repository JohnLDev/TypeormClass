import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    length: 100,
    unique: true,
  })
  name: string

  @Column()
  duration: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
