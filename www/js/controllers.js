angular.module('starter.controllers', [])

.controller('listUp', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('listUpCtrl', ['$scope', '$state','$ionicPopup', '$timeout', function($scope, $state, $ionicPopup, $timeout) {
    $scope.showPopup = function() {
      $scope.lista = {


      } ;

      var myPopup = $ionicPopup.show({
        title: 'Nova Lista', // String. The title of the popup.
        cssClass: 'form', // String, The custom CSS class name
        template: '<input type="text" placeholder="Supermercado" ng-model="lista.market"> <input type="date" placeholder="Dia da compra" ng-model="lista.date"> <input type="textarea" placeholder="Comentários" ng-model="lista.commnet">',
        subTitle: '', // String (optional). The sub-title of the popup.
        scope: $scope, // Scope (optional). A scope to link to the popup content.
        buttons: [
          { text: 'Cancelar' },
          {
            text: '<b>Salvar</b>',
            type: 'button-positive',
            onTap: function(e) {
              if (!$scope.lista.market || !$scope.lista.data) {
            //don't allow the user to close unless he enters with list´s data
                  e.preventDefault();
              } else {
                  return $scope.lista;
                }
            }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 150000);
 };
  
}])

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
