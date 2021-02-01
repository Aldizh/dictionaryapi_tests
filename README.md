# Dictionary API Tester

_A Simple Jest Framework to test Dictionary APIs_

### Required

- Please make sure node js in installed in your system
- Also please install either npm or yarn for managing node package
- Download Guides: [Node](https://nodejs.org/en/download/) [NPM](https://www.npmjs.com/get-npm) [YARN](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

## Setting up the project

1. Create a _.env_ file in your root directory containing the client authentication key

```
AUTH_KEY=_YOUR_API_KEY_
```

2. Install dependencies listed in package.json

```
npm install
```

## Running the test suite

1. Run once

```
npm run test
```

2. Run with live monitoring

```
npm run test:monitor
```

## Main third party libraries used

- _express_ (for setting up our web server)
- _supertest_ (for making HTTP requests to the web server)
- _axios_ (for making network calls to the public API)

## Learn

- [Jest](https://jestjs.io/)
- [Node](https://nodejs.org/en/docs/)
