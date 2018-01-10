import express from 'express'
import {getUser, updateUser} from '../actions'

const router = express.Router()

router.get('/:userId', (req, res) => {
  const { userId } = req.params
  getUser(userId)
    .then((user) => {
      res.render('users/profile', { user })
    })
})

router.route('/:userId/edit')
  .get((req, res) => {
    const { userId } = req.params
    getUser(userId)
      .then((user) => {
        res.render('users/editProfile', { user })
      })
  })
  .put((req, res) => {
    updateUser(req.body)
      .then((response) => {
        res.send('User information updated')
      })
      .catch((error) => {
        res.send('Error: User information not updated')
      })
  })

export default router