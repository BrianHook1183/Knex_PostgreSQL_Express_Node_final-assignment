# Node, Express, PostgreSQL, and Knex: Assignment

This is the capstone assignment for the Knex module.

## Instructions

You are a backend developer at a blogging platform called "Blogful", and you've been tasked to create an API that returns data about the users, comments, and posts stored in their database. Their backend technology stack is currently Node.js/Express, PostgreSQL, and Knex. You are given the following ERD:

![blogful ERD local image](https://github.com/BrianHook1183/Knex_PostgreSQL_Express_Node_final-assignment/blob/3ff931ac50d02687444107d159eefb2a1570cbb1/blogful_erd.png)

## Tasks

1. In `src/comments/comments.service.js`, complete the `list()` function to create a Knex query that retrieves all comments from the `comments` table, selecting all columns.

   - Then in `src/comments/comments.controller.js`, modify the `list()` function to call the service method and return a json of all comments in the response.

2. In `src/posts/posts.service.js`, complete the `create()` function to create a Knex query that creates a new post in the `posts` table.

   - Then in `src/posts/posts.controller.js`, modify the `create()` route handler to call the service method to return a 201 status code along with the newly created post.

3. In `src/posts/posts.service.js`, complete the `update()` function to create a Knex query that updates a post given a body with the updated post and the postId from the url.

   - Then in `src/posts/posts.controller.js`, modify the `update()` route handler to call the service method and return the updated post upon success.

4. In `src/posts/posts.service.js`, complete the `destroy()` function to create a Knex query that deletes a post given a post ID.

   - Then in `src/posts/posts.controller.js`, modify the `delete()` route handler to call the service method and return a 204 status code on successful post deletion.

5. For the `/comments/commenter-count` path, the API should return a count of comments from each commenter, grouped by `user_email`, aliased to `commenter_email`, ordered by `commenter_email` in your result. In `src/comments/comments.service.js`, complete `listCommenterCount() `to perform a join between `comments` and `users` tables here to get the needed columns.

   - Then in `src/comments/comments.controller.js`, modify the listCommenterCount() function to call the service method accordingly and return the data.

6. In `src/comments/comments.service.js,` complete the `read()` function to retrieve a comment by ID, including the following columns in your result: comment_id, comment, user_email aliased as commenter_email, and post_body aliased as commented_post. You will need to perform a join between comments, users, and posts tables here. The `read()` method in the controller is already completed for you.
