# Blogger's World

Blogger's world is a MERN app, where I'm learning 
- how to add backend to a react/frontend app using express js and a mongo atlas database(online instance).
- this is the client side of the app, which is a react app, and contains only the frontend of the app.
  
Authorization - Only an authorized user can access a specific page of the app 
- Setting up the mongo DB atlas.
- Getting the data from the signup form of frontend application through a post fetch request using a body parser.
- destructure the data and put it into the mongo database.
- MongoDB will follow few steps before the connection with the backend.
- For every collection, we'll create models of schema (eg: usermodel of userSchema)
- connect the mongoose with backend using the connection string and password.
- create user in database.
- encrypt the password.
- send only the JWT token as the response when user logs in with the exact password.
