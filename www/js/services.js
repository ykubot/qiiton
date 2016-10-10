angular.module('starter.services', [])

.factory('StarItems', function() {
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
      return starItems;
    },
    get: function(itemId) {
      for (var i = 0; i < starItems.length; i++) {
        if (starItems[i].id === parseInt(itemId)) {
          return starItems[i];
        }
      }
      return null;
    },
    checkStar: function(item) {
      starItems.push(item);
      console.log(starItems);
      return null;
    }
  };
});
