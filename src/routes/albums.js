import express from 'express'

import {
  getAlbums,
  getAlbumById,
  getAlbumLikesCount,
  checkUserLikes,
  addUserLike,
} from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
  getAlbums()
    .then(albums => res.render('albums/index', {albums}))
    .catch(next)
})

router.get('/:albumID', async (req, res, next) => {
  try {
    const album = await getAlbumById(req.params.albumID)
    const likes = await getAlbumLikesCount(req.params.albumID)
    const check = await checkUserLikes(req.session.userId, req.params.albumID)
    res.render('albums/album', {album, likes, check})
  }
  catch (error) {
    next(error)
  }
})

router.post('/:albumID/like', (req, res) => {
  const {albumID} = req.params
  const {userId} = req.session
  console.log('Album ID::',albumID,'User ID::', userId)
  addUserLike(userId, albumID)
    .then(() => {
      res.send('Success')
    })
})

export default router
