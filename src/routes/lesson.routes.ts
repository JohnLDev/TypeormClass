import { Router } from 'express'
import { getRepository } from 'typeorm'
import { Lesson } from '../models/Lesson'

const lessonRouter = Router()

lessonRouter.get('/', async (request, response) => {
  return response.json(await getRepository(Lesson).find())
})

lessonRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Lesson)
    const resp = await repo.save(request.body) // sem tratamento de body
    return response.status(201).json(resp)
  } catch (error) {
    console.log('error.message:>>', error.message)
  }
})

export default lessonRouter
