(function () {
	var app = angular.module('store-services', []);


	app.service('localStorageHandler', ['$localStorage', function($localStorage){
		return {
			setProduct: function(product){
				var products = ($localStorage.products) ? $localStorage.products : [];
				products.push(product);
				$localStorage.products = products;
			},
			getProducts: function(){
				return $localStorage.products;
			},
			removeProduct: function(index) {
				$localStorage.products.splice(index, 1);
			},
		}

	}]);


	app.service('ProductsData', ['$http', function($http){
		return {
			getData: function(){
			return $http.get('./data/products.json').success(function(data){
				return data;
			});
			},
		}

	}]);


})();