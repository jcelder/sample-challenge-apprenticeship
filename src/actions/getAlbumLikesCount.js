import db from '../db'

export default function getAlbumLikesCount(albumId) {
  const sql = 'SELECT COUNT(user_id) AS "count" FROM album_user_likes WHERE album_id = $1'
  return db.one(sql, [albumId])
}
