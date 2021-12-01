# AI Playground

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Note: node_modules folder is not included. To run the app in development mode, you need to first run
 `npm install`
in the project directory. You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine.

## Available Scripts

In the project directory (playground) you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
** Tests are not build yet.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project structure

Under the `public` folder lies the main `index.html` file and `images` used.

Under the React project folder `src` components are organized into `Components` folder.
`Navigation.js` controls the naviagtion bar, `Welcome.js` controls the main welcome message in the center of the page, and `App.js` combines everything and controls the rest of the page.
`index.js` renders `App.js` with `style.css` controls the style of the page.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
