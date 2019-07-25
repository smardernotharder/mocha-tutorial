# My Awesome Mocha Tests that break :)

My attempt at completing mocha tests for puppeteer headless browser scripts. Amazon works, but the others break on the last step. 

I totally meant to make them not work though so you could see what the tests do when a script fails. Completely intentional you're welcome. 


## Environment

I recommend using a clean environment for this that has node.js already installed at a global level. Make a new directory to house all of your files, then ensure that node.js is installed via the following:

```bash
$ npm --version
$ node --version
```
If you get a version, you're good to go and we're ready to setup your environment. 

## Installation

First off let's initialize node.js in our environment to create a package.json file. When you run this command, the terminal will ask for a number of inputs, the specifics of which are below:

```bash
$ npm init
```
```bash
name: mocha-tests

entry point: app.js

test command: ./node_modules/.bin/mocha -> THIS IS IMPORTANT We shall use this framework to test the application
```
You can confirm the rest of the values with enter. 

Next up we install our packages:

```bash
$ npm install express --save
$ npm install mocha chai --save 
$ npm install puppeteer --save
$ npm install assert --save
```
--save will add these to packages.json where all dependencies are stored. 


If you haven't already, load up the files form this git repository:
```bash
git clone https://github.com/smardernotharder/mocha-tutorial.git
```
## Almost done! Let's test

Now that we're installed and our environment is setup, it's time to test. First, let's make our test folder within the mocha-tutorial directory within your shiny new environment:

```bash
mkdir test
```
Move or copy any of the filers (ex. amazonapp.js) into the test folder, then run npm test and you're good to go! It should look something like this:

```bash
npm test

> mocha-tests@1.0.0 test C:\Users\Sean\readmeTest
> mocha


  Amazon Homepage
    √ has search input (4609ms)
    √ shows search results after search input (1091ms)
```

The great thing about this framework is if you can maintain this environment and test any puppeteer script you want by just wrapping with mocha, then dropping it into the test folder. 

## Happy testing!
