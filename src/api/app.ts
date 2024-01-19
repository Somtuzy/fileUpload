import express from 'express'
import middleware from '../api/middlewares/main.middleware'

const app = express()
middleware(app)

export default app