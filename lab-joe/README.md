
This lab took me about one hour and a half

It was fun creating the different animals and getting familiar with react!

I used the faker and cowsay node packages to generate some randomized content on the client side. I was surprised by how similarly node packages are handled on the front and back end.

Requirements
Configuration
Your lab directory must include

README.md -- with documention about your lab
.gitignore -- with a robust gitignore
.eslintrc.json -- with the class .eslintrc.json file
.eslintignore -- with the class .eslintignore
.babelrc -- with all dependencies and dev-dependencies
package.json -- with all dependencies and dev-dependencies
yarn.lock -- with the yarn lockfile
webpack.config.js -- with webpack config
src/ -- containing the frontend code
src/main.js -- containing the entire app
src/style -- containing your sass
src/style/main.scss -- containing the frontend code
Feature Tasks
Create the following component

App
Should contain the entire application's view and state
Should have a property on the state called content
Should create a view with the following display
A heading with the title "Generate Cowsay Lorem"
A Button that displays "click me"
onClick the button should generate new content on the app state using cowsay and faker
A pre tag that displays the App state (content)
Documentation
Write a description of the project in your README.md

Stretch Goal
add a select menu that enables you to change the type of cowfile currently being used