<img width="1728" alt="Screenshot 2023-08-04 at 11 23 38 PM" src="https://github.com/aggarwalsejal/ENotes-React/assets/56756275/19a6ae58-94d9-410b-8912-cc5b3d4ef28e">

<h3 align=center > :smile: <strong>E-Notes</strong> is a <em><strong>React website</strong></em> o keep your daily notes and easy access provide to them :smile: </h3>
<p align=center>Visit the website and try it once https://enotes-ui.aggarwalsejal.com/  :heart:</p>

# :bookmark_tabs: What’s In This Document

* Pre-requisite to run React

* How I create Backend for this project and connect it
  
* How to create your React App
  
* Script require to run the project
  
* Where to see the running project React Packages Used

* [React Packages Used](:boom:-react-packages-used)

# :point_right: Pre-requisite to run React

Install Node.js and npm in the local machine. Use [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) docuementation for info and set up steps.<br>

MongoDB set up, if have not done work still on MongoDB read [this](https://www.mongodb.com/) documentation to make yourself familiar with MongoDB<br>

Have info about API calls, I have used thunderclient pretty similar to Podtman to create the API calls for this project. Thunderclient is inbuilt in VS code so seems easy to use, read [this](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) doc for more info

# :scroll: How I create Backend for this project and connect it

I don’t used localhost for MongoDB, I just Altas MongoDB for storing the data in this project, use [this](https://studio3t.com/knowledge-base/articles/connect-to-mongodb-atlas) to set up the DB and use in the project.<br>

Have created API call using the Thunderclient to store and fetch the data

# :rocket: How to create your React App

:one: Create a folder for React Project<br>

:two: Open IDE for that folder<br>

:three: Run the :arrow_down: command in terminal

```property
npx create-react-app my-app
```

```property
cd my-app
```

```property
npm start
```

Read [this](https://create-react-app.dev/) documentation for more details
# :bookmark: Script require to run the project

For Bootstrap, add Script for Javascript and CSS<br>

In the project directory, you have the following scripts to run:

    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "both": "concurrently \"react-scripts start\" \"npx nodemon backend/index.js\""

<strong>Both</strong> is required to run backend and frontend simultaneously

### `npm start `

   Runs the app in the development mode.
   The page will reload when you make changes. You may also see any lint errors in the console.
   
### `npm test`
   Launches the test runner in the interactive watch mode.
   See the section about [running tests](https://create-react-app.dev/docs/running-tests/) for more information.
   
### `npm run build `

   Builds the app for production to build folder. It correctly bundles React in production mode and optimizes build for best performance.
   The build is minified and the filenames include the hashes.
   Your app is ready to be deployed!
   See the section about [deployment](https://create-react-app.dev/docs/deployment/) for more information.
   
### ` npm run both `
    BOTH is required to run backend and frontend simultaneously
      * Backend : npx nodemon backend/index.js
      * Frontend : react-scripts start
      
# :eyes: Where to see the running project

Open http://localhost:3000 to view it in your browser. For more details, use [this](https://react.dev/) link

# :boom: React Packages Used

Backend packages to install:

    "cors": "^2.8.5",
    "express": "^4.18.2",
    "express-validator": "^7.0.1",
    "mongoose": "^6.10.0"

To read more about,

express package, follow [this](https://www.npmjs.com/package/express) link<br>
express-validator package, follow [this](https://www.npmjs.com/package/express-validator) link<br>
mongoose package, follow [this](https://www.npmjs.com/package/mongoose) link<br>

Frontend packages to install:

    "@babel/plugin-proposal-private-property-in-object": "^7.21.11",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "bcrypt": "^5.1.0",
    "bcryptjs": "^2.4.3",
    "concurrently": "^8.2.0",
    "cors": "^2.8.5",
    "jsonwebtoken": "^9.0.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.2",
    "react-scripts": "5.0.1",
    "react-toastify": "^9.1.3",
    "web-vitals": "^2.1.4"

    
To read more about,
react-router-dom package, follow [this](https://www.npmjs.com/package/react-router-dom) link<br>
bcryptjs package, follow [this](https://www.npmjs.com/package/bcryptjs) link<br>
concurrently package, follow [this](https://www.npmjs.com/package/concurrently) link<br>
cors package, follow [this](https://www.npmjs.com/package/cors) link<br>
jsonwebtoken package, follow [this](https://www.npmjs.com/package/jsonwebtoken) link<br>
react-toastify package, follow [this](https://www.npmjs.com/package/react-toastify) link<br>
