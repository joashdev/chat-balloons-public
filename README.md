# Chat Balloons

> View Live Here: [chatballoons.web.app](https://chatballoons.web.app)

---

## Table of Contents

- [Description](#description)
- [User Stories](#user-stories)
- [Technologies](#technologies)
- [Contributors](#contributors)
- [Development](#development)
- [Todo](#todo)
- [Credits](#credits)

---

## Description

A public real-time chat application created for `Dev Jam`.

---

## User Stories

- User can login using GMail
- User can see previously sent messages
- User can type message in the `input field`
- Pressing `enter` or clicking the `send` button will send the typed message
- Sent messages are saved in the database
- Messages can be seen by everyone logged in
- Messages are displayed realtime

## Technologies

- Vue 3
- TailwindCSS
- Firebase (Firestore, Auth, Hosting)
- Vitejs

---

## Todo

Future direction of the project:

- multiple chat rooms (public and private)
- sending of images and videos
- `email and password` signin

---

## Contributors

joashdev <[github/joashdev](https://github.com/joashdev)>

---

## Development

> Clone or Download Repository

```sh
# git clone
git clone https://github.com/joashdev/chat-balloons-public.git

# goto directory
cd chat-balloons-public

# install dependencies
npm i
```

<br>

> Create `.env.local` in the root directory

```sh
# example .env.local file
VITE_FIREBASE_API_KEY=YOUR_FIREBASE_CONFIG
VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_CONFIG
VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_CONFIG
VITE_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_CONFIG
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_CONFIG
VITE_FIREBASE_APP_ID=YOUR_FIREBASE_CONFIG
VITE_FIREBASE_MEASUREMENT_ID=YOUR_FIREBASE_CONFIG
```

<br/>

> Serve Locally, Build, Deploy to Firebase

```sh
# serve locally
npm run dev

# build for production
npm run build

# deploy to Firebase
npm run deploy-live # builds the project before deployment
```

## Credits

- web2033 <[github/web2033](https://github.com/web2033)> - starter Vue template
