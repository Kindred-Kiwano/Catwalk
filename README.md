# Catwalk
A user interface for fashion retail

### Dependencies ⚙️
axios
react
react-dom
jquery
webpack
webpack-cli
@babel/presets-env
@babel/presets-react
@babel/core
babel-loader
nodemon
jest

### Authentication 🔐
To use our API, you must create a GitHub API Token and attach it in every request as an "Authorization" header.

### user components ###

### Product Overview 🖼️
1. Header:
- Description
- Amount in stock*
- Number of reviews
- Price/discounts*
- Share buttons
- Review listing

2. Style selection:
- Available styles for selected product
- Price/discounts*
- Qunatity and size selection*
- Add to cart button

3. Product images*
- Central display image - expands for zoomed-in scolling
- Carousel of thumbnails
- Navigation buttons

* - determined by selected style


### Related products and user outfit 👗
1. Carousel to view all products related to currently selected
  Each tile includes:
  - Product category and name
  - Product rating (out of 5 stars)
  - Product image
  - Add to outfit
  
2. Carousel to create custom outfits
  - Hosted in localstorage to retain selections between browsing sessions
  - Formats tiles similar to related products
  - Remove item button

3. Comparison modal
  - Lists comparisons between characteristics of current product vs. the clicked related product


### Reviews ⭐
Displays first two by default, load more on request
Sort options:
  - Newest
  - Relevant
  - Helpful

Reviews tiles can be:
- Marked as helpful/unhelpful
- Reported

Adding a review prompts the customer to enter:
  - Username/email
  - Rating (out of 5 stars)
  - Review title
  - Reivew body
  - Reccomend (yes/no)
  - Up to 5 product images
  - Ratings for product characteristics (eg. fit, length, comfort)


