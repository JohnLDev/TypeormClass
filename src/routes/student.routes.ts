import { Router } from 'express'
import { getRepository } from 'typeorm'
import { Student } from '../models/Student'
import { validate } from 'class-validator'

const studentRouter = Router()

studentRouter.get('/', async (request, response) => {
  return response.json(await getRepository(Student).find())
})

studentRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Student)
    const { name, key, email, classe } = request.body
    const student = repo.create({
      name,
      email,
      key,
      classes: classe,
    })
    const errors = await validate(student)
    if (errors.length === 0) {
      const respTrated = { name: name, key: key, email: email }
      const resp = await repo.save(respTrated)
      return response.status(201).json(resp)
    } else {
      return response.status(400).json(errors)
    }
  } catch (error) {
    console.log('error.message:>>', error.message)
  }
})
export default studentRouter
