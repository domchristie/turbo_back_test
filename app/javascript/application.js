// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

addEventListener('turbo:visit', function () {
  console.log('turbo:visit')
})

addEventListener('popstate', function () {
  console.log('popstate')
})
