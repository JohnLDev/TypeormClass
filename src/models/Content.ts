import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Content {
  @PrimaryColumn('uuid')
  id: string

  @Column()
  description: string

  @Column()
  linkContent: string
}
