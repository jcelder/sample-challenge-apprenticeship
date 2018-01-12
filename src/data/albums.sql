INSERT INTO
  albums (title, artist)
VALUES
  ('Malibu', 'Anderson .Paak'),
  ('A Seat at the Table', 'Solange Knowles'),
  ('Melodrama', 'Lorde'),
  ('In Rainbows', 'Radiohead')
;

INSERT INTO
  users (email, name, password)
VALUES
  ('test@test.com', 'test', 'test'),
  ('test2@test.com', 'test', 'test'),
  ('test3@test.com', 'test', 'test')
;

INSERT INTO
  album_user_likes (album_id, user_id)
VALUES
  (1, 3),
  (2, 2),
  (3, 2),
  (3, 3),
  (4, 2),
  (4, 3)
;