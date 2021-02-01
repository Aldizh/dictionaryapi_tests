# Dictionary API Tester

_A Simple Jest Framework to test Dictionary APIs_

### Required

- Please make sure node is installed on your system (v15.x preferred)
- Also please install npm for managing our packages
- Download Guides: [Node](https://nodejs.org/en/download/) [NPM](https://www.npmjs.com/get-npm)

## Setting up the project
1. Clone the repository on your local machine

```
git clone git@github.com:Aldizh/dictionaryapi_tests.git
```

2. Go to cloned directory

```
cd dictionaryapi_tests
```

4. Create a _.env_ file in your project root directory containing the api authentication key

```
AUTH_KEY=Basic _YOUR_API_KEY_
```

5. Install dependencies listed in package.json

```
npm install
```

## Running the test suite

1. To run the entire suite

```
npm run test
```

2. Run with live monitoring

```
npm run test:monitor
```

## Main third party libraries used

- _express_ (for setting up a basic server)
- _supertest_ (for making HTTP requests to the api routes)
- _axios_ (for making network calls to the public API)

## Learn

- [Jest](https://jestjs.io/)
- [Node](https://nodejs.org/en/docs/)
