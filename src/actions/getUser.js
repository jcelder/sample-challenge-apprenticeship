import db from '../db'

export default function getUser(userId) {
  const sql = 'SELECT * FROM users WHERE user_id = $1'
  return db.one(sql, [userId])
}