(function(){
	var app = angular.module('store', ['ngStorage','store-products', 'store-services']);

	app.controller('StoreController', ['localStorageHandler', 'ProductsData' , function( localStorageHandler, ProductsData){
		var store = this;
		store.totalProducts = localStorageHandler.getProducts();
		
		ProductsData.getData().then(function(response){
			console.log(response);
			store.products = response.data;
		});

	}]);

	app.controller("ReviewController", function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});


})();