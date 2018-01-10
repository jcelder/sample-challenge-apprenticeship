import express from 'express'
import {signUp, signIn} from '../actions'

const router = express.Router()

router.route('/sign-up')
  .get((req, res) => {
    res.render('authentication/sign-up')
  })
  .post((req, res) => {
    const user = req.body
    signUp(user)
      .then((userId) => {
        req.session.userId = userId.user_id
        req.session.save(() => {
          res.redirect('/')
        })

      })
      .catch((error) => {
        res.render('authentication/sign-up', {error})
      })
  })

router.route('/sign-in')
  .get((req, res) => {
    res.render('authentication/sign-in')
  })
  .post((req, res) => {
    const user = req.body
    signIn(user)
      .then((userId) => {
        req.session.userId = userId.user_id
        req.session.save(() => {
          res.redirect('/')
        })
      })
      .catch((error) => {
        const message = 'Username or Password is Invalid'
        res.render('authentication/sign-in', {error: message})
      })
  })

router.route('/logout')
  .get((req, res) => {
    req.session.destroy(() => {
      res.redirect('/')
    })
  })
export default router
