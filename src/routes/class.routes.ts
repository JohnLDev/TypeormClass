import { Router } from 'express'
import { getCustomRepository, getRepository } from 'typeorm'
import { Class } from '../models/Class'
import { ClassRepository } from '../repositories/ClassRepository'

const classRouter = Router()

classRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Class)
    const resp = await repo.save(request.body)
    return response.status(201).json(resp)
  } catch (error) {
    console.log('error.message:>>', error.message)
  }
})
classRouter.get('/', async (request, response) => {
  return response.json(await getRepository(Class).find())
})

classRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(ClassRepository)
  const { name } = request.params
  const res = await repository.findByName(name)
  response.json(res)
})

export default classRouter
