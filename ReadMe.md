# Search for a Github Repository

A small project which allows a user to search for a Github repository by name using Github's API. From this a user can click on further details of a specified repository which are then displayed on a seperate page.

## Getting Started:
---

After cloning this repository to your local machine, run `npm install` to install all dependencies.

In order for usage of Github's API it requires authentication with a github account. To do this you will need to generate a personal access token in your github user settings. Instructions found here: [Instructions](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) ensure you select the following scopes: repo & user

Once you have generated this token it will need to be base-64 encoded and used in the authorisation header for all requests to GitHub API. The easiest way to do this is to create the header with postman, following the below instructions:

* Open postman
* Select authorization tab
* Select type Basic Auth
* Now enter your user name and previously generated user token into the password field
* Enter this Github API URL:  `https://api.github.com/search/repositories?q=token+in:name`
* Click update request
* Then send request, and ensure results are returned, to verify personal access token as correct authorisation
* Now copy the value from the Authorization header e.g `Basic randomEncodedString`
* Now copy and paste this value into the const in the following file: src/authorisation.js 

Once this has been completed you can type: `npm run dev` into a terminal to get the webpack server running. Once this has been executed copy and paste the localhost path e.g `http://localhost:9090/` from your terminal into your chosen browser (suggest Chrome).



## Running Tests:
---

Tests were built with mocha and chai. In order to get these running on your local machine, type `npm test` into your terminal and hit enter.

There are currently 2 different spec files running, one to test the actions.js file and the other to rest the reducer.js file.

## Built with:
---

* [Bulma](http://bulma.io/documentation/overview/start/) CSS Framework used to aid responsiveness
* [React Spinkit](http://kyleamathews.github.io/react-spinkit/) Dependency for loading animations



