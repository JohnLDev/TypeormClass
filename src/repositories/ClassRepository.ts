import { EntityRepository, Repository } from 'typeorm'
import { Class } from '../models/Class'

@EntityRepository(Class)
export class ClassRepository extends Repository<Class> {
  public async findByName(name: string): Promise<Class[]> {
    const repo = await this.find()
    const result = name ? repo.filter(res => res.name.includes(name)) : repo
    return result
  }
}
