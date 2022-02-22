# Catwalk
A user interface for fashion retail

### Built with &nbsp; ⚙️
- React
- Node/Express
- Axios

### Setup &nbsp; 🔧
If not using an external API, you may rewire the fetches to render content from `fakeData/`. <br />
You will need <a href="https://nodejs.org/en/" >Node.js</a> installed to serve the app (reccomended version ≥ 14).
Run the following commands from the root directory:
```shell
$ npm install
```
to install the dependency packages
```shell
$ npm run build
```
to compile the React app and re-compile on save
```shell
$ npm start
```
in a separate terminal window to serve the app at `http://localhost:3000`.

### User Components &nbsp; 👥
#### Product Overview
- Browse available styles for selected item
- View photos associated with products, built-in scroll zoom
- Add in-stock sizes and quantity to cart

#### Related Products
- Browse related products
- Compare related to currently selected
- Add/remove items to a custom-built user outfit

#### Ratings and Reviews
- Sort by newest, helpful or relevant
- Mark as helpful or report
- Add a review
    - Attach photos
    - Rate product
    - Rate fit, comfort and other specs



