import { h, hydrate } from "preact";
import express from 'express'
import render from "preact-render-to-string";
import App from 'src/client/components/app/app'
import assets from '@dist/server/assets.json'

const pagesRouter = express.Router()

pagesRouter.get('/*', async (req, res) => {
  const appString =  render(h(App));
  res.render('index', {
    appString,
    titleTag: 'tttt',
    injectedPreloadState: {},
    assets,
    isProd: __PROD__,
  })
})

export default pagesRouter
