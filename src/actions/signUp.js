import db from '../db'

export default function signIn(user) {
  const sql = 'INSERT INTO users (email, name, password) VALUES ($1, $2, $3) RETURNING user_id'
  return db.one(sql, [user.email, user.name, user.password])
}