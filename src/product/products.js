(function(){
	var app = angular.module('store-products', []);
	app.directive('productTitle', function(){
			return {
			restrict: 'A',
			templateUrl: './src/product/product-title.html'
		};
	});

	app.directive('productGallery', function(){});
	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: './src/product/product-panels.html',
			controller:function(){
					this.tab=1;

				this.selectTab = function(setTab){
					this.tab = setTab;
				};
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};

			},
			controllerAs: 'panel'
		};
	});
	app.directive('panelBody', function(localStorageHandler){
		return{
			restrict: 'E',
			templateUrl:'panel-body.html',
			controller:function(){

				this.addToCart = function(product){
					localStorageHandler.setProduct(product);
				};
			},
			controllerAs: "title"
		};
	});
})();