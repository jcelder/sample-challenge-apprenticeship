import db from '../db'

export default function checkUserLikes(userId, albumId) {
  const sql = 'SELECT COUNT(id) FROM album_user_likes WHERE user_id = $1 AND album_id = $2'
  return db.one(sql, [userId, albumId])
    .then((count) => {
      if (count.count > 0) {
        return {success: 'true'}
      } 
        return {success: 'false'}
      
    })
    .catch((error) => {
      console.log(error)
    })
}
