const angular = require('angular')

require('normalize.css')
require('./css/style.less')

window.fbAsyncInit = function() {
  FB.init({
    appId      : '101663753556909',
    xfbml      : true,
    version    : 'v2.5'
  });
};

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

const app = angular.module('carApp', [])

app.run(function(){
  var carC = document.getElementById("carCanvas")
  var ctx = carC.getContext("2d")
  ctx.fillStyle = "#FF0000"
  ctx.fillRect(0,0,150,75)
})

// Check for changes to the upload
app.directive('customOnChange', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var onChangeHandler = scope.$eval(attrs.customOnChange);
      element.bind('change', onChangeHandler);
    }
  };
});

// Form controller
app.controller('FormController', ['$scope', '$http', function($scope, $http){
  
  $scope.choose = 'Take Pic/Choose Pic'

  $scope.uploadFile = function(event){
      var files = event.target.files;
      console.log(files)
  }

  $scope.canvas = function() {

      // Grab the canvas data to blob
      var carC = document.getElementById("carCanvas")
      var dataURI = carC.toDataURL()
      var imgdata = dataURI.match(/data:(image\/.+);base64,(.+)/);

      function dataURItoBlob(dataU) {
        var byteString = atob(dataURI.split(',')[1]);
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: 'image/png' });
      }
      var blob = dataURItoBlob(imgdata[2]);
      return blob
  }

  $scope.submit = 'Share'

  $scope.share = function(e) {
    console.log($scope.canvas())

    var newBlob = $scope.canvas()

    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        console.log('login status response: ' + JSON.stringify(response))
        var accessToken = FB.getAuthResponse().accessToken
      }
    });
    
    FB.login(function(response){
      if (response.authResponse) {
        FB.api('/testspaceasdf', function(response) {
          var accessToken = FB.getAuthResponse().accessToken
          console.log('got access userid: ' + JSON.stringify(authResponse) )
          var thisID = response.authResponse.userID
          PostImageToFacebook(newBlob, accessToken, thisID)
        })

      } else {
        console.log('failure to login')
      }
    }, {scope: 'publish_actions'});


    function PostImageToFacebook(blob, authToken, uID)
    {
      var fd = new FormData();
      fd.append("access_token",authToken);
      fd.append("message","Photo Text");
      try{
        console.log('toekn: ' + JSON.stringify(authToken))
        console.log(blob)
        console.log('form data: ' + fd)
        $http({
            method: 'POST',
            url: "https://graph.facebook.com/" + uID + "/photos?access_token=" + authToken,
            data: fd,
            headers: {}
          }).then(
            function(data) {
              console.log('success data: ' + JSON.stringify(data))
            }, 
            function(data) {
              console.log('failure data: ' + JSON.stringify(data))
            }
          )

      } catch(e) {
        console.log(e)
      }
    }

  } // end share function

}])
