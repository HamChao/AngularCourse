(function() {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', function($scope, $http){
    $http.get('./store-products.json').then(function(response) {
      $scope.products = response.data;
    });
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

})();

