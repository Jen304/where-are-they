# Where're they?

> This is the project inspired from [The Odin Project curriculum: WHERE'S WALDO (A PHOTO TAGGING APP)](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/where-s-waldo-a-photo-tagging-app)

Demo Link: [https://where-are-they.vercel.app](https://where-are-they.vercel.app)

## Overview
A photo-tagging game that requires player to choose 3 characters in the picture

## Tech-stacks
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Ant design](https://ant.design/)
- [Firebase/Firestore](https://firebase.google.com/docs/firestore/) - to store character information and player record

## Installation
### Create Firestore database
**Note:** Before running project, please make sure to create a firebase project and firestore database with this guideline: [https://firebase.google.com/docs/firestore/quickstart](https://firebase.google.com/docs/firestore/quickstart)
- Save your credentials in `.env.local` file with these variable name according: FIREBASE_PROJECT_ID, FIREBASE_PRIVATE_KEY and FIREBASE_CLIENT_EMAIL
- My firestore database structure is
```
/game/1 
- image: string
- character: array 
    - image: string
    - name: string
/character-positions/1
- character_name: object
    - x: number
    - y: number
/player-records
- player-id: object
- time: number
- timestamp: number
```
The /game and /character-positions are both only-read document, player-records is readable and writable document.


After fork this project, in the project folder, you have to install project dependency by running" 
### `npm install` 

Run project by using
### `npm run dev`


