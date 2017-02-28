angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

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
  $scope.$on('$ionicView.enter', function() {  //To populate the shopping cart count before window is open
      $("h1[id='m1']").text(milk1count);
      $("h1[id='m2']").text(milk2count);
      $("h1[id='wb']").text(wbreadcount);
      $("h1[id='brb']").text(brbreadcount);
      $("h1[id='bu']").text(buttercount);
      $("h1[id='ch']").text(chickencount);
      $("h1[id='min']").text(mincecount);
      $("h1[id='e']").text(eggscount);
      $("h1[id='t']").text(teaBagscount);
      $(".total").text("Total = €"+total.toFixed(2));
  });
})