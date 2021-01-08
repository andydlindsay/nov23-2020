# W05D05 - Mid-term Project Kickoff

### Pick a Project

### User Stories
* describes how a user will interact with the app
* As a _____, I can ______, because _______

* As a user, I can save a post to favourites, because I want to review it later

* As a non-logged in user, I cannot edit blog posts, because they don't belong to me

### Turn our nouns into entities
* all the nouns from the user stories, become entities in our db
* build out the ERD

### Routes
* define the way we access our resources
GET /users
GET /users/:id

RESTful 
Naming convention for routes
REpresentational State Transfer
* routes represent the underlying data structure

* GET /posts/new
* GET /posts/:id/edit

* B GET /posts
* R GET /posts/:id
* E POST /posts/:id
* A POST /posts
* D POST /posts/:id/delete

* PUT PATCH DELETE

* B GET /posts
* R GET /posts/:id
* E PATCH /posts/:id
* A POST /posts
* D DELETE /posts/:id

* GET /users/:user_id/posts/:post_id/comments
* GET /posts/:post_id/comments

### MVP
* most valuable primate
* minimally viable product
* minimum viable demo MVD
* if you aren't going to demo it, don't build it

### Wireframes/Mockups
* mock out in low fidelity our front end

### User Login
* DON'T DO IT

```js
app.get('/login/:user_id', (req, res) => {
  req.session.user_id = req.params.user_id;
  res.redirect('/');
});
```

### Tech Choices
* BE - Node/Express/Postgres
* FE - HTML/CSS/JS/jQuery/Bootstrap/SCSS

### SPA vs Multi-page
* these are not mutually exclusive

### Git
* I WILL NOT CODE ON MASTER
* git branch
* merge conflicts

### Splitting up the work
* Vertically - some part of the group works on FE and some part works on BE
* Horizontally - everyone works on the same part
* Pair Programming

### Communication
* is key
* Slack, iMessage, Hangouts, Discord, anything

### Deployment
* up to you















# 
