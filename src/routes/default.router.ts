import Router from 'express'
import * as healthCheckController from '../health/health-check.controller'
// import * as swaggerUi from 'swagger-ui-express'

// import { swaggerDocument } from '../swagger/swagger'

const defaultRouter = Router()
defaultRouter.get('/health', healthCheckController.check)

// defaultRouter.use('/api-docs', swaggerUi.serve)
// defaultRouter.get('/api-docs', swaggerUi.setup(swaggerDocument))

export default defaultRouter
