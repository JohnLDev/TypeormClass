import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Lesson } from './Lesson'

@Entity()
export class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  description: string

  @Column()
  linkContent: string

  @OneToOne(() => Lesson, lesson => lesson.id, { eager: true })
  @JoinColumn({ referencedColumnName: 'id' })
  lesson: Lesson

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date
}
