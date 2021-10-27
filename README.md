# KindredKiwano
Develop a front-end user interface for a clothing vendor


# Proposed dependencies via npm:
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


# Server/API info:
Connect to https://app-hrsei-api.herokuapp.com/api/fec2/:CAMPUS_CODE/
:CAMPUS_CODE must be replaced with your particular campus code as seen in the GitHub team you are a part of. For example, if you are part of "hrnyc30", your campus code is "hrnyc"; or if you are in "hr-rfp34", your code is "hr-rfp". Capitalization and hyphenation must match exactly.


# Authentication
To use this API, you must create a GitHub API Token and attach it in every request as an "Authorization" header.


# Obtaining an API Key
Our API server authenticates users with GitHub Personal Access Tokens. To obtain a token:

Go to: https://github.com/settings/tokens
Click "Generate new token"
Given the Token a Description ("Hack Reactor Capstone API", or whatever is most descriptive to you)
Under Select Scopes, select the following: (You may select more for more features this API will offer in the future)
read:org
user
read:user
user:email
user:follow
Generate Token
Note that this token is only viewable once, at generation time. Make sure to copy it to a secure place and never check it into your git history.
If you token is compromised(e.g. it is accidentally checked into git or unwittingly becomes part of a Webpack build) make sure to revoke the token immediately. You may generate a replacement token if necessary.


# Use of Parameters
In an HTTP GET request, parameters are sent as a query string:

http://example.com/page?parameter=value&also=another

In an HTTP POST or PUT request, the parameters are not sent along with the URI, but in the request body. Parameters noted for each route below follow this standard.


### Specific data ###

# Products
https://learn-2.galvanize.com/cohorts/2962/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/products.md

# Reviews
https://learn-2.galvanize.com/cohorts/2962/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/reviews.md

# Questions and answers
https://learn-2.galvanize.com/cohorts/2962/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/qa.md

# Cart
https://learn-2.galvanize.com/cohorts/2962/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/cart.md

# Interactions
https://learn-2.galvanize.com/cohorts/2962/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/interactions.md
