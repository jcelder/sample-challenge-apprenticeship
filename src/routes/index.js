import express from 'express'

import albums from './albums'
import authentication from './authentication'
import users from './users'
import isLoggedIn from '../middleware/isLoggedIn'

const routes = express.Router()

routes.use('/', authentication)
routes.use('/', isLoggedIn)
routes.get('/', (req, res) => res.redirect('/albums'))
routes.use('/users', users)
routes.use('/albums', albums)

export default routes
