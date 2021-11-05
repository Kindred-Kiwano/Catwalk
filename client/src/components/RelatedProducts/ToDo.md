# Cumulative list of ToDos for Related Products and User Outfit 'widget'

# State Methods

1.  Initialize outfit state to null
  a. if outfit is null, check local storage for user session/id
    i. if there is a userid, get user outfit list and update state to be a list of product ids
    ii. retrieve product data for each product ID in outfit list
  b. if no user id, create userid, repeat 'a'

2. Determine default current product to render on component

3. Based on current product, fetch list of related product ids
  a. step 1.a.ii

4. Render lists of products

# Higher Order Components

1. Carousel
  a. type: related/outfit
  b. click handler: remove from outfit, show comparisons modal
  c. button: value
  d. list: data from API for each type

2. Cards
  a. type: same, with different props, except for "Add To Outfit" card

# Global ToDos

1. Click handler/tracker for each element
  a. write API post method

2.