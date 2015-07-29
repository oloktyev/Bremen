angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, DreamWords) {
    $scope.dreamWords = DreamWords.all();
    $scope.search = {
        term: ''
    }
    $scope.find = function () {
        $scope.dreamWords = DreamWords.find($scope.search.term);
    };
})

.controller('DreamwordDetailCtrl', function ($scope, $stateParams, DreamWords) {
    $scope.dreamWord = DreamWords.get($stateParams.dreamWordId);
})

.controller('DreambooksCtrl', function ($scope, DreamBooks) {
    $scope.dreamBooks = DreamBooks.all();
})

.controller('DreambookDetailCtrl', function ($scope, $stateParams, DreamWords, DreamBooks) {
    $scope.dreamBook = DreamBooks.get($stateParams.dreamBookId);
    $scope.dreamWords = DreamWords.getByBook($stateParams.dreamBookId);
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
