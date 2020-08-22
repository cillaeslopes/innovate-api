import { Request, Response } from 'express'

export const check = (_req: Request, res: Response): void => {
  const response = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  }

  res.status(200)
  res.send(response)
}
