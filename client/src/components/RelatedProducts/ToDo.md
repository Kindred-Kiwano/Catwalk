Cumulative list of ToDos for Related Products and User Outfit 'widget'

1.  Initialize outfit state to null
  a. if outfit is null, check local storage for user session/id
    i. if there is a userid, get user outfit list and update state to be a list of product ids
    ii. retrieve product data for each product ID in outfit list
  b. if no user id, create userid, repeat 'a'

2. Determine default current product to render on component

3. Based on current product, fetch list of related product ids
  a. step 1.a.ii

4. Render lists of products



Global ToDos

1. Click handler/tracker for each element
  a. write API post method

2. 