Here are the steps to set up a basic React project without using create-react-app and using webpack and ES modules:

Create a new directory for your project and navigate into it.

Initialize a new Node.js project by running:

```shell
npm init -y
```

Install React and React DOM by running:

```shell
npm install react react-dom.
```

webpack-dev-server is deprecated.
Install webpack and webpack-cli webpack-dev-server by running:

```shell
npm install --save-dev webpack webpack-cli webpack-dev-server
```

Create a new file in your project directory called webpack.config.js. This file will contain the configuration for webpack.

```js
//webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
```

Create a new directory called src in your project directory. This is where you will put your React code.

Create a new file in the src directory called index.js. This will be the entry point for your application.

Install babel-loader and its dependencies by running:

```shell
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```

Create a new file in your project directory called .babelrc. This file will contain the configuration for Babel

```.babelrc
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

```

```json
// add to package.json
  "scripts": {
    "start": "webpack-dev-server --mode development --config webpack.config.js",
    "build": "webpack --mode production --config webpack.config.js"
  },
```

## index.development.js

```js
//src/index.development.js

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import { Input } from './components/Input';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const InputExample = () => {
  const [value, setValue] = useState('');
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return <Input value={value} onChange={onChangeHandler} />;
};

root.render(<InputExample />);
```

## index.production.js

```js
//src/index.production.js
export * from './components/Input';
```

```shell
npm i html-webpack-plugin
```

Run npm run build to build your application. The bundled file will be in the dist directory.

Create an HTML file where you want to use your react application and include the bundled file.

Finally, you can start writing your react code in the index.js file and the rest of the application in the src directory.

### html

<!-- dist/index.html -->

```html
<!DOCTYPE html>
<html>
  <head>
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="./bundle.js"></script>
  </body>
</html>
```

## publishing to NPM

## npm login

```shell
npm login
```

## create package

-For an organization-scoped package, replace my-org with the name of your organization

```
npm init --scope=@my-org
```

npm organization packages are scoped and private by default
to publish as public

```shell
npm publish --access=public
```
