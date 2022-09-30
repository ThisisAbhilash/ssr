import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import proxy from 'express-http-proxy'
import pageRoutes from './pages'
import apisRouter from './apis'
const { DEV_ASSETS_HOST, DEV_ASSETS_PORT } = require('../../settings')

const app = express()

app.set('views', path.join(__dirname, '../../src/server/views'))
app.set('view engine', 'ejs')

if (__DEV__) {
  app.use(logger('dev'))
} else {
  app.use(
    logger('common', {
      skip(req, res) {
        return res.statusCode < 400
      },
    })
  )
}

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

if (__DEV__) {
  app.use(
    '/static',
    proxy(`${DEV_ASSETS_HOST}:${DEV_ASSETS_PORT}`, {
      proxyReqPathResolver: (req) => `/static${req.url}`,
    })
  )
} else {
  app.use(express.static(path.join(__dirname, '../client/assets')))
}

app.use('/api', apisRouter)


app.use('/', pageRoutes) // All routes for Preact

app.use((err, req, res, next) => {
  let error

  if (__DEV__) {
    error = {
      name: err.name,
      message: err.message,
      stack: err.stack,
    }
  }
  res.status(500)
  res.render('error', { error })

  next(err)
});

export default app
