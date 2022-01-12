# Add Feature #6 Half Baked Registration

- Due Tuesday Jan. 11 by 10am
- Netlify link ->
- Use [this template](https://github.com/alchemycodelab/react-half-baked-registration) and your own supabase database for this app.

### Learning Objectives

- Connect Supabase's auth methods to a React form to provide Sign In/Up support
- Use React state & Supabase's auth methods to create protected routes in React router which are only available to authenticated users

### Description

- This app is solely focused on creating registration. You should have a single route (the "/" root or home page). When the user is not authenticated, the user should see sign in and sign up forms. When the user is authenticated, they should something else...anything else. A meme, a joke, a You Tube video. Your choice. What's important is that you implement the registration & authentication process.

* Use your own Supabase database for this.

* The Supabase client code in `services` has been provided for you. You need to connect this to a React form and state.

### Acceptance Criteria

- [ ] Users can sign up for an account
- [ ] Users can sign in to an existing account
- [ ] Users can logout of an account
- [ ] Unauthenticated users see the option to sign in or sign up
- [ ] Authenticated users see something else

### Rubric

| Task                                         | Points |
| -------------------------------------------- | ------ |
| Sign up / sign in page                       | 3      |
| Routes properly check for authenticated user | 3      |
| Authenticated users can log out              | 2      |
| Authenticated users see something else       | 2      |

# NEEDS TO BE COMPLETED

- [x] npm i > npm start
- [x] create dev branch
- [x] App.js

  - [x] import BrowserRouter, Switch, Route, & NavLink from react
  - [x] import useState from react
  - [x] import getUser from ./services/users
  - [x] import SignIn from /views/Authorization/SignIn.js
  - [x] import SignUp from /views/Authorization/SignUp.js
  - [x] initialize switch & route
  - [x] add NavLinks for sign in & sign up

- [x] create files & folders
  - [x] /src/views
    - [x] /Authorization
      - [x] auth.css
      - [x] auth.js
        - [x] import useState from 'react'
        - [x] import AuthForm from components
        - [ ] import { signInUser, signUpUser } from ../../services/users
        - [x] export function Auth()
        - [ ] write out full function
      - [x] SignIn.js
      - [x] SignUp.js
  - [x] /src/components
    - [x] /Authorization
      - [x] AuthForm.js
        - [x] import React
        - [x] export DEFAULT function AuthForm({ errorMessage, email, setEmail, password, setPassword, handleSubmit, })
