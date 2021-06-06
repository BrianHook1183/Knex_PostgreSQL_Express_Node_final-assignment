const service = require("./posts.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function postExists(req, res, next) {
  const { postId } = req.params;

  const post = await service.read(postId);
  if (post) {
    res.locals.post = post;
    return next();
  }
  return next({ status: 404, message: `Post cannot be found.` });
}

async function create(req, res) {
  // my solution
  res.json({ data: await service.create(req.body.data) });
}

async function update(req, res) {
  // my solution
  const updatedPost = {
    ...req.body.data,
    post_id: req.params.postId,
  };
  service.update(updatedPost).then((data) => res.json({ data }));
}

async function destroy(req, res) {
  // your solution here
  res.json({ data: "" });
}

module.exports = {
  create: asyncErrorBoundary(create),
  update: [asyncErrorBoundary(postExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(postExists), asyncErrorBoundary(destroy)],
};
