import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Student {
  @PrimaryColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  key: number

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date
}
