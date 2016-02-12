const angular = require('angular')
const d3 = require('d3')

require('normalize.css');
require('./css/style.less');

const app = angular.module('myApp', [])

app.directive('portfolioItem', function() {
  function link(scope, el) {
    d3.select(el[0]).append('svg')
  }
  return {
    link: link
  }
})
