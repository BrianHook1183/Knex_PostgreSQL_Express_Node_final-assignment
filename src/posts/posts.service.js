const knex = require("../db/connection");
const table = "posts";

function create(post) {
  // my solution
  return knex(table)
    .insert(post)
    .returning("*")
    .then((createdPosts) => createdPosts[0]);
}

function read(postId) {
  return knex("posts").select("*").where({ post_id: postId }).first();
}

function update(updatedPost) {
  //your solution here
}

function destroy(postId) {
  //your solution here
}

module.exports = {
  create,
  read,
  update,
  delete: destroy,
};
