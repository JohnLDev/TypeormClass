import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { Class } from './Class'
import { Content } from './Content'

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  description: string

  @OneToOne(() => Content, content => content.id)
  content: Content

  @ManyToOne(() => Class, () => Lesson, { eager: true })
  @JoinColumn({ referencedColumnName: 'id' })
  class: Class

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date
}
