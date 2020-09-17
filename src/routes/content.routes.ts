import { getRepository } from 'typeorm'
import { Router } from 'express'
import { Content } from '../models/Content'

const contentRouter = Router()

contentRouter.get('/', async (request, response) => {
  return response.json(await getRepository(Content).find())
})

contentRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Content)

    const { description, linkContent } = request.body
    const respTrated = { description: description, linkContent: linkContent }

    const resp = await repo.save(respTrated)
    return response.status(201).json(resp)
  } catch (error) {
    console.log('error message:>>', error.message)
  }
})
