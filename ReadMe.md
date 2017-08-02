# Search for a Github Repository

A small project which allows a user to search for a Github repository by name using Github's API. From this a user can click on further details of a specified repository which are then displayed on a seperate page.

## Getting Started:
---

After cloning this repository to your local machine, run `npm install` to install all dependencies.

In order for usage of Github's API it requires authentication with a github account. To do this you will need to generate a personal access token in your github user settings. Instructions found here: [Instructions](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) ensure you select the following scopes: repo & user

Once you have generated this token place it in src/authorisation.js, replacing the string that is already in there and save the file.

Once this has been completed you can type: `npm run dev` into a terminal to get the webpack server running. Once this has been executed copy and paste the localhost path e.g `http://localhost:9090/` from your terminal into your chosen browser (suggest Chrome).


## Running Tests:
---

Tests were built with mocha and chai. In order to get these running on your local machine, type `npm test` into your terminal and hit enter.

There are currently 2 different spec files running, one to test the actions.js file and the other to rest the reducer.js file.

## Built with:
---

* [Bulma](http://bulma.io/documentation/overview/start/) CSS Framework used to aid responsiveness
* [Font-Awesome](http://fontawesome.io/icons/) SVG Icons
* [React Spinkit](http://kyleamathews.github.io/react-spinkit/) Dependency for loading animations



