const knex = require("../db/connection");
const table = "comments";

function list() {
  // my solution
  return knex(table).select("*");
}

function listCommenterCount() {
  // your solution here
}

function read(commentId) {
  // your solution here
}

module.exports = {
  list,
  listCommenterCount,
  read,
};
