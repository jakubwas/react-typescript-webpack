## Step by Step Guide to setup React with Webpack

## Table of contents

- [Setup React](#setup-react)
- [Setup Webpack & Babel](#setup-webpack--babel)
- [Create Scripts](#create-scripts)
- [Webpack Loaders](#webpack-loaders)
  - [Styling](#styling)
  - [File](#file)

# Setup React

- Create _package.json_ file in the root directory:

  `git init .`

- Create src folder and add three files there:

  - index.html
  - index.js
  - App.js

- Install react and react-dom libraries:

  `npm install react react-dom`

- Add the code below to _src/App.js_ file:

  ```
    import React from "react";

    const App = () => {
      return <div>React App with Webpack Config</div>;
    };

    export default App;
  ```

- Add the code below to _src/index.html_ file:

  ```
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React Webpack</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
  ```

- Add the code below to _src/index.js_ file:

  ```
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';

    ReactDOM.render(
        <App />,
      document.getElementById('root')
    );
  ```

# Setup Webpack & Babel

- Install Webpack:

  ` npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev`

- Install Babel:

  ` npm install @babel/core babel-loader --save-dev`

- Create webpack.config.js file:

  ```
    module.exports = {
      entry: path.join(__dirname, "src", "index.js"),
      output: {
        path:path.resolve(__dirname, "dist"),
      },
      module: {
        rules: [
          {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, "src", "index.html"),
        }),
      ],
    }
  ```

# Create Scripts

Add scripts to package.json that will allow you to build and run the app:

- Run locally: `npm run dev`

- Build bundle: `npm run dev`

# Webpack Loaders

## Styling

Highly recommended webpack loaders:

- **style-loader** Add exports of a module as style to DOM

- **css-loader** Loads CSS file with resolved imports and returns CSS code

- **sass-loader** Loads and compiles a SASS/SCSS file

**Instalation:**

`npm install --save-dev style-loader css-loader sass-loader `

**Configuration:**

```
  {
    test: /\.(css|scss)$/,
    exclude: /node_modules/,
    use: ["style-loader", "css-loader", "sass-loader"],
  }
```

## File

- **file-loader**

- **@svgr/webpack**
