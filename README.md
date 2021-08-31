## Step by Step Guide to setup React with Webpack

## Table of contents

- [Setup React](#setup-react)
- [Setup Webpack & Babel](#setup-webpack--babel)
- [Create Scripts](#create-scripts)
- [Webpack Loaders](#webpack-loaders)
  - [Styling](#styling)
  - [File](#file)
- [Environment variables](#environment-variables)

# Setup React

- Create *package.json* file in the root directory:

  `npm init`

- Create **src** folder and add this files there:

  - *index.jsx*
  - *App.jsx*

- Create **public** folder and add this files there:
  
  - *index.html*

- Install react and react-dom libraries:

  `npm install react react-dom`

- Add the code below to **src**/*App.jsx* file:

  ```
    import React from "react";

    const App = () => {
      return <div>React App with Webpack Config</div>;
    };

    export default App;
  ```

- Add the code below to **public**/*index.html* file:

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

- Add the code below to **src**/*index.jsx* file:

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

- Create webpack configurations files for different environments:
    - development: *webpack.config.dev.js*
    - production: *webpack.config.prod.js*
  
  And add the code below to each of this files:

  ```
    module.exports = {
      entry: path.join(__dirname, "src", "index.js"),
      output: {
        path:path.resolve(__dirname, "dist"),
      },
      // mode: 'production' or 'development'
       mode: '',
      // Only for development
      //  devServer: {
      //    port: 3000,
      //    open: true,
      //  },
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
          template: path.join(__dirname, "public", "index.html"),
        }),
      ],
    }
  ```

# Create Scripts

Add scripts to package.json that will allow you to build and run the app:

```
"scripts": {
  "dev": "webpack serve",
  "build": "webpack",
  ...
}
```

- Run locally: `npm run dev`

- Build bundle: `npm run dev`

# Webpack Loaders

## Styling

Highly recommended webpack styling loaders:

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

Highly recommended webpack file loaders:

- **file-loader**

**Installation:**

`npm install --save-dev file-loader`

**Configuration:**

```
 {
    test: /\.(png|jp(e*)g|svg|gif)$/,
    use: ["file-loader"],
  }
```

# Environment variables

Create files for different environments:

- development: **.env.development**
- production: **.env.production**

Instal dotenv in order to handle this files: 

`npm install dotenv --save-dev`

And add the code below to the webpack configuration (insert correct env file name in envPath variable):

```
 module.exports = () => {
  const currentPath = path.join(__dirname);
  const envPath = `${currentPath}/.env.development`;
  const fileEnv = dotenv.config({ path: envPath }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  ...

  return {
    //
    // webpack configuration
    //
    plugins: [
      new webpack.DefinePlugin(envKeys),
    ],
  }
 }
```

