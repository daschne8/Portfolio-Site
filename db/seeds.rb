reddit = Project.find_or_create_by(
  nav_title: "Reddit Analyzer",
  title: "Reddit Text Sentiment Analyzer",
  github_url: "https://github.com/daschne8/reddit-analyser",
  youtube_id:  "MVXQhcmWvVI",
  blog_url: "https://daschne8.github.io/reddit_text_analyzer_react_final_project",
  description: "React front-end Rails back-end application that accepts queries for either a User or Subreddit and examine a snapshot of comments for keywords and their associated emotions."
)

grocery = Project.find_or_create_by(
  nav_title: "Going JS",
  title: "JS Linked Grocery List SPA",
  github_url: "https://github.com/daschne8/going-refactor",
  youtube_id:  "udtweQW0e38",
  blog_url: "https://daschne8.github.io/rails_project_js_refactor",
  description: "Rails based linked grocery list app that uses Javascript to function as a single page application."
)

 linked = Project.find_or_create_by(
  nav_title: "Linked Grocery",
  title: "If you're going.",
  github_url: "https://github.com/daschne8/if-your-going",
  youtube_id:  "WV1f33ST_W8",
  blog_url: "https://daschne8.github.io/rails_app_-_linked_grocery_list",
  description: "Rails based website for a linked grocery list."
)

cms = Project.find_or_create_by(
 nav_title: "Games CMS",
 title: "Sinatra CMS Games Library",
 github_url: "https://github.com/daschne8/sinatra-portfolio-project",
 youtube_id:  "TDRi0JZrWO4",
 blog_url: "https://daschne8.github.io/sinatra_cms_project",
 description: "Sinatra based CMS for a video game library, uses steam api and nokogiri to seed data."
)

cli = Project.find_or_create_by(
  nav_title: "Travel CLI",
  title: "CLI Nearby Flights Web Scraper",
  github_url: "https://github.com/daschne8/RubyCliProject",
  youtube_id:  "99Pj37P8Zp4",
  blog_url: "https://daschne8.github.io/writing_the_ruby_cli",
  description: "Ruby based CLI, uses combination of nokogiri and watir to scrape kayak website for flight information"
)

thisReact = Project.find_or_create_by(
 nav_title: "This React",
 title: "This Website Front-End",
 github_url: "https://github.com/daschne8/ReactPortfolio",
 youtube_id:  "",
 blog_url: "",
 description: "The React code for the website you're browsing. Still under construction, expect more functionality soon!"
)

thisRails = Project.find_or_create_by(
 nav_title: "This Rails",
 title: "This Website Back-End",
 github_url: "https://github.com/daschne8/RailsPortfolio",
 youtube_id:  "",
 blog_url: "",
 description: "The Rails code acting as the api for the website you are currently browsing"
)

# aaa = Project.find_or_create_by(
#  nav_title: "",
#  title: "",
#  github_url: "",
#  youtube_id:  "",
#  blog_url: "",
#  description: ""
# )
