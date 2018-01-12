import db from '../db'

export default function addUserLike(userId, albumId) {
  const sql = 'INSERT INTO album_user_likes (user_id, album_id) VALUES ($1, $2)'
  return db.none(sql, [userId, albumId])
}
