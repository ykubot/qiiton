angular.module('starter.controllers', ['ngCordova'])

.controller('ItemsCtrl', function($scope, $http, StarItems, $cordovaInAppBrowser) {

  $http.get('https://qiita.com/api/v2/items?per_page=10')
  .success(function(items) {
    // console.log(items);
    $scope.items = items;
  });

  $scope.checkStar = function(item) {
    StarItems.checkStar(item);
  };

  $scope.removeStar = function(item) {
    StarItems.removeStar(item);
  };

  $scope.get = function(itemId) {
    // console.log(itemId);
    // console.log(StarItems.get(itemId));
    return StarItems.get(itemId);
  };

})

.controller('StarsCtrl', function($scope, StarItems) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  $scope.$on('$ionicView.enter', function(e) {
  });

  $scope.starItems = StarItems.all();
  $scope.removeStar = function(item) {
    StarItems.removeStar(item);
  };
})

// .controller('ItemDetailCtrl', function($scope, $stateParams, $http) {
//   // $scope.item = Item;
//   console.log($stateParams.itemId);
//   $http.get('https://qiita.com/api/v2/item?id=f4949a8759b5f59e6003')
//   .success(function(item) {
//     console.log(item);
//     $scope.contents = item;
//   });
// })

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
