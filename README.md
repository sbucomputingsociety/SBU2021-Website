# Website for Stony Brook Computing Society

## About this project
* This website was converted and adapted from the previous SBCS website built by Reid Horton. 
* This uses the [Jekyll](https://jekyllrb.com/) to generate the single page website. 
  * For more information on Jekyll, please visit the above link. In the current state of the project, blog utiliy is not utilized, and the website is designed as a single-page app. 
  
## Installation
* This website is built off Jekyll. 
* First, clone this repository.
* Move to the location of your cloned repository.
* Install Ruby & Jekyll (via a Ruby gem). See the [Jekyll Docs](https://jekyllrb.com/docs/) for more download information. 
* run `bundle exec jekyll serve`, you could be able to navigate to localhost:4000 to see the site
   * You may need to run `jekyll new . --force` to get jekyll to the server to work
   * Make sure that you do not overwrite _config.yaml
     * You can fix this by unstaging the changes the above command makes to _config.yml by `git reset HEAD _config.yml`
* Go forth and check out the website and make a PR with any changes you think can be made to improve our site!

## Issues to fix up
* Clean up extra CSS styles
* On mobile/web, the glyciphon is missing when window size is too small


