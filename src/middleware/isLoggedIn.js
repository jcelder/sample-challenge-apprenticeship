export default function isLoggedIn(req, res, next) {
  if (req.session.userId) { next() }
  else { res.redirect('/sign-in') }
}
