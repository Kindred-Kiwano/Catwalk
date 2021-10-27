1. From the root folder - creates a new package.json and package-lock.json file

```
npm init
```

2. Install necessary dependencies - will automatically be added to package.json. Can install multiple packages in the same line.
Developer dependencies can be added with --save-dev flag and won't be deployed with production version.

```
npm install axios express react react-dom ...etc
npm install webpack webpack-cli babel-loader @babel/preset-react @babel/preset-env @babel/core --save-dev
```

3. Create a webpack.config.js file - include @babel/preset-env, @babel/preset-react, @babel/core and babel-loader in installed npm packages. Reference: https://webpack.js.org/guides/getting-started/#creating-a-bundle *
https://webpack.js.org/api/cli/

```
touch webpack.config.js
```

4. Example webpack.config.js file included - with boilerplate code from Webpack API Docs

5. run:

```
npx webpack --config ./webpack.config.js
```

6. add "build" script to package.json: -w flag will "watch" for file changes and auto-build:

```
"build": "webpack -w"
```

7. TODO - add "start" script to start server