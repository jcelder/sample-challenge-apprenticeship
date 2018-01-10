import db from '../db'

export default function signIn(user) {
  const sql = 'SELECT user_id FROM users WHERE email = $1 AND password = $2'
  return db.one(sql, [user.email, user.password])
}
