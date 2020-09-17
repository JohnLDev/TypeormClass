import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Lesson {
  @PrimaryColumn()
  idAula: string

  @Column()
  description: string
}
