import dotenv from 'dotenv'

dotenv.config();

export const ENVIRONMENTS = {
  NODE_ENV: process.env.NODE_ENV,
}