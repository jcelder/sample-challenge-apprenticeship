import db from '../db'

export default function updateUser(user) {
  const sql = 'UPDATE users SET email = $1, name = $2 WHERE user_id = $3'
  return db.none(sql, [user.email, user.name, user.userId])
}