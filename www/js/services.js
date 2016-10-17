angular.module('starter.services', ['ngStorage'])

.factory('StarItems', function($localStorage) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // var chats = [{
  //   id: 0,
  //   name: 'Ben Sparrow',
  //   lastText: 'You on your way?',
  //   face: 'img/ben.png'
  // }, {
  //   id: 1,
  //   name: 'Max Lynx',
  //   lastText: 'Hey, it\'s me',
  //   face: 'img/max.png'
  // }, {
  //   id: 2,
  //   name: 'Adam Bradleyson',
  //   lastText: 'I should buy a boat',
  //   face: 'img/adam.jpg'
  // }, {
  //   id: 3,
  //   name: 'Perry Governor',
  //   lastText: 'Look at my mukluks!',
  //   face: 'img/perry.png'
  // }, {
  //   id: 4,
  //   name: 'Mike Harrington',
  //   lastText: 'This is wicked good ice cream.',
  //   face: 'img/mike.png'
  // }];
  var starItems = [];

  return {
    all: function() {
      // return starItems;
      return $localStorage.items;
    },
    get: function(itemId) {
      // for (var i = 0; i < starItems.length; i++) {
      //   // console.log(starItems[i].id);
      //   if (starItems[i].id == itemId) {
      //     // console.log("success");
      //     return starItems[i];
      //   }
      // }
      for (var i = 0; i < $localStorage.items.length; i++) {
        // console.log(starItems[i].id);
        if ($localStorage.items[i].id == itemId) {
          // console.log("success");
          return $localStorage.items[i];
        }
      }
      return null;
    },
    checkStar: function(item) {
      // starItems.push(item);
      //$localStorage.item = item;
      $localStorage.items.push(item);
      console.log($localStorage.items);
      return null;
    },
    removeStar: function(item) {
      // starItems.splice(starItems.indexOf(item), 1);
      $localStorage.items.splice($localStorage.items.indexOf(item), 1);
    }
  };
});
