Dashboard app 
=============
In this pet project, several topics in front end technology will be covered including html5, css3, bootstrap, js, angularjs, Git, Npm, Bower, Grunt, Gulp, Unit Testing, Debugging, and so on.

If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:

```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install Grunt & Gulp Globally

Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*


```
npm install -g grunt
npm install -g gulp
```

Alternatively, you can run the version of gulp installed local to the project instead with


```
./node_modules/.bin/gulp
```

### Make sure to clear cache when switching branches or projects

```
npm run app-clean
```

### Remove node and bower folders manually or use the following

```
npm run app-remove
```

### Install all needed packages and modules for both bower and node

```
npm run app-update
```

This will run through and install all dependencies listed in `package.json` as well as `bower.json` and download them
to `node_modules`, `bower_components` folders in your project directory. Make sure everything passed and no error(s) in the output results

### Start the server to have database set up

````
cd dashboardServer > npm install > npm start
````

### Build the app and preview it on the browser

````
grunt serve
````

Be sure to be in the app level when running in order for it to work

### Build the production ready app

````
grunt build
````

If there are error(s) happening with the build process, please proceed by adding '--force' option to the build command

### Testing the app

````
grunt test
````

This will run the unit tests in karma test runner with all the settings provided in the 'karma.conf.js' file
