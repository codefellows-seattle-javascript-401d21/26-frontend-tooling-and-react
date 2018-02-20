## Lab 26-frontend-tooling-and-react

This app creates a React component with a state property called content,  a pre tag that displays the App state (content), a heading of "Generate Cowsay Lorem", a "Click Me" button that onClick generates new content on the app state using cowsay and faker.

**Installation & Set-Up**
Fork this repository and install on your machine using git clone. Switch to the lab-karen folder.

This project requires Node JS and npm( Node package manager).

The following excerpt from the existing package.json file shows the required package dependencies. Install devDependencies with *npm i -D (package name)* and regular dependencies with *npm i (package name)*
.
"devDependencies": {
  "babel-core": "^6.26.0",
  "babel-loader": "^7.1.2",
  "babel-preset-env": "^1.6.1",
  "babel-preset-react": "^6.24.1",
  "css-loader": "^0.28.9",
  "extract-text-webpack-plugin": "^3.0.2",
  "html-webpack-plugin": "^2.30.1",
  "node-sass": "^4.7.2",
  "react": "^16.2.0",
  "react-dom": "^16.2.0",
  "sass-loader": "^6.0.6",
  "webpack": "^3.11.0",
  "webpack-dev-server": "^2.11.1"
},
"dependencies": {
  "cowsay": "^1.2.1",
  "faker": "^4.1.0"
}

Additionally, add the following scripts to your package.json file to run from the command line.
```
"scripts": {
  "build": "webpack",
  "watch": "webpack-dev-server --inline --hot"
},
```
**Running the app**
From the command line, type *npm run watch* to start the Webpack server.  Open a tab in the browser at localhost:8080 to see the app running.
