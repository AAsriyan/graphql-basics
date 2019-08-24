// Demo user data
const users = [
  { id: '1', name: 'Alex', email: 'alex@gmail.com' },
  { id: '2', name: 'Adam', email: 'adam@gmail.com' },
  { id: '3', name: 'Sarah', email: 'sarah@gmail.com' },
]

// Demo post data
const posts = [
  { id: '1', title: 'Windy Night', body: 'This is a windy night.', published: true, author: '1' },
  { id: '2', title: 'Stormy Night', body: 'This is a stormy night.', published: true, author: '1' },
  { id: '3', title: 'Cold Night', body: 'This is a cold night.', published: false, author: '3' },
]

// Demo comment data
const comments = [
  { id: '1', text: 'This is a windy night comment.', author: '1', post: "1" },
  { id: '2', text: 'This is a windy night comment.', author: '1', post: "1" },
  { id: '3', text: 'This is a stormy night comment.', author: '2', post: "2" },
  { id: '4', text: 'This is a cold night comment.', author: '3', post: "3" }
]

const db = {
  users,
  posts,
  comments
}

module.exports = db