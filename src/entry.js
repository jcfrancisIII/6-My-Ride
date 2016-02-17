const angular = require('angular')

require('normalize.css')
require('./css/style.less')

const app = angular.module('carApp', [])

console.log('working')

app.run(['$window', 
  function($window) {

  // init facebook
  $window.fbAsyncInit = function() {
    FB.init({ 
      appId: '101663366890281', 
      status: true, 
      cookie: true, 
      xfbml: true 
    });
  };

  (function(d){
    var js, 
    id = 'facebook-jssdk', 
    ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement('script'); 
    js.id = id; 
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
  }(document))

  // draw random canvas
  var carC = document.getElementById("carCanvas")
  var ctx = carC.getContext("2d")
  drawSix(ctx)
}])

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
  $scope.file = null

  $scope.uploadFile = function(event){
    var files = event.target.files[0]
    console.log(files)
    var reader = new FileReader()

    var canvas = document.getElementById('carCanvas')
    var context = canvas.getContext('2d')
    var imageObj = new Image()

    imageObj.addEventListener('load', function() {
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(this, 0, 0)
      drawSix(context)
    })

    reader.addEventListener('load', function() {
      imageObj.src = reader.result
    })

    if (files) {
      reader.readAsDataURL(files)
    }

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

  $scope.shareBtn = 'Share photo to Facebook'
  $scope.message = ''

  $scope.loginStatus = function() {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        console.log('login status response: ' + JSON.stringify(response))
        var accessToken = response.authResponse.accessToken
        return accessToken
      } else {
        return null
      }
    })
  }

  $scope.share = function(e) {
    console.log($scope.canvas())
    console.log($scope.loginStatus())

    var newBlob = $scope.canvas()

    FB.login(function(response){
      if (response.authResponse) {
        var accessToken = FB.getAuthResponse().accessToken
        console.log('got access userid: ' + JSON.stringify(response.authResponse.userID) )
        console.log('got access userid: ' + JSON.stringify(response.authResponse.userID) )

        var thisID = response.authResponse.userID

        PostImageToFacebook(newBlob, accessToken, thisID, $scope.message)

        /* working simple post
        FB.api(
          '/' + thisID + '/feed', 
          'POST', 
          { 
            message: 'im back with a new canvas ' + $scope.shareBtn
          },
          function(response) {
            if (response && !response.error) {
              console.log(response)
            }
          }
        )
        */
      } else {
        console.log('failure to login')
      }
    }, {scope: 'publish_actions'})

    function PostImageToFacebook(blob, authToken, uID, msg)
    {
      /* json format
      var fd = {};
      fd.message = "Photo with blob as source";
      fd.link = blob;
      */
      var fd = new FormData();
      fd.append('message', msg);
      fd.append('source', blob);
      try{
        console.log('toekn: ' + JSON.stringify(authToken))
        console.log(blob)
        console.log('form data: ' + fd)
        $http.post("https://graph.facebook.com/" + uID + "/photos?access_token=" + authToken, fd, 
          {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
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

function drawSix(ctx) {
  ctx.save();
  ctx.translate(0,0);
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(612,0);
  ctx.lineTo(612,792);
  ctx.lineTo(0,792);
  ctx.closePath();
  ctx.clip();
  ctx.translate(0,0);
  ctx.translate(0,0);
  ctx.scale(1,1);
  ctx.translate(0,0);
  ctx.strokeStyle = 'rgba(0,0,0,0)';
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  ctx.miterLimit = 4;
  ctx.save();
  ctx.save();
  ctx.fillStyle = "#100b0c";
  ctx.beginPath();
  ctx.moveTo(409.545,324.598);
  ctx.bezierCurveTo(409.081,324.447,408.619,324.302,408.15500000000003,324.156);
  ctx.lineTo(540.0120000000001,234.335);
  ctx.lineTo(310.86100000000005,233.917);
  ctx.lineTo(114.38,373.607);
  ctx.lineTo(113.765,374.059);
  ctx.bezierCurveTo(83.85300000000001,396.79600000000005,69.875,429.627,76.368,461.89200000000005);
  ctx.bezierCurveTo(83.92599999999999,499.44300000000004,118.029,528.6650000000001,169.934,542.066);
  ctx.bezierCurveTo(203.618,550.765,233.59699999999998,554.993,261.581,554.993);
  ctx.bezierCurveTo(261.587,554.993,261.593,554.993,261.593,554.993);
  ctx.bezierCurveTo(311.449,554.993,348.308,541.134,377.785,527.572);
  ctx.bezierCurveTo(457.487,490.905,493.983,434.47,473.03200000000004,380.28499999999997);
  ctx.bezierCurveTo(462.879,354.034,440.926,334.776,409.545,324.598);
  ctx.closePath();
  ctx.moveTo(314.411,422.552);
  ctx.bezierCurveTo(306.539,429.829,285.068,439.391,272.328,439.391);
  ctx.bezierCurveTo(258.57099999999997,439.336,248.15699999999998,437.002,242.50399999999996,434.82800000000003);
  ctx.bezierCurveTo(248.44399999999996,428.53000000000003,262.787,421.701,274.96299999999997,418.61);
  ctx.bezierCurveTo(276.97999999999996,418.394,281.69699999999995,417.968,287.53,417.968);
  ctx.bezierCurveTo(301.645,417.969,310.238,420.37,314.411,422.552);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(261.595,541);
  ctx.bezierCurveTo(261.595,541,261.588,541,261.58200000000005,541);
  ctx.bezierCurveTo(234.79200000000006,541,205.96000000000004,536.916,173.43400000000005,528.516);
  ctx.bezierCurveTo(126.92300000000006,516.5079999999999,96.54400000000005,491.21799999999996,90.08500000000005,459.12799999999993);
  ctx.bezierCurveTo(84.67600000000004,432.2489999999999,96.69300000000005,404.61299999999994,122.23700000000005,385.2009999999999);
  ctx.lineTo(122.49200000000005,385.0109999999999);
  ctx.lineTo(315.3190000000001,247.91799999999992);
  ctx.lineTo(494.73800000000006,248.24999999999991);
  ctx.lineTo(372.67500000000007,331.3939999999999);
  ctx.bezierCurveTo(381.25900000000007,332.1729999999999,392.9990000000001,333.9439999999999,405.2270000000001,337.9109999999999);
  ctx.bezierCurveTo(432.46600000000007,346.7439999999999,451.3980000000001,363.14499999999987,459.9770000000001,385.33499999999987);
  ctx.bezierCurveTo(481.5290000000001,441.0579999999999,428.62700000000007,488.77999999999986,371.93500000000006,514.8619999999999);
  ctx.bezierCurveTo(343.833,527.786,308.748,541,261.595,541);
  ctx.closePath();
  ctx.moveTo(272.477,404.807);
  ctx.bezierCurveTo(261.31899999999996,407.505,232.69199999999998,417.601,226.86299999999997,433.79);
  ctx.bezierCurveTo(225.42299999999997,437.783,226.22999999999996,439.754,227.20799999999997,441.15000000000003);
  ctx.bezierCurveTo(232.10999999999996,448.15500000000003,251.05999999999997,453.30100000000004,272.27299999999997,453.38500000000005);
  ctx.bezierCurveTo(289.89,453.38500000000005,321.10299999999995,440.10200000000003,329.049,426.51300000000003);
  ctx.bezierCurveTo(331.417,422.463,330.68399999999997,420.021,329.53999999999996,417.98300000000006);
  ctx.bezierCurveTo(324.53,409.08000000000004,309.22099999999995,403.97300000000007,287.52899999999994,403.97300000000007);
  ctx.bezierCurveTo(279.984,403.974,274.078,404.613,272.477,404.807);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ec2127";
  ctx.beginPath();
  ctx.moveTo(359.503,340.796);
  ctx.lineTo(298.514,369.817);
  ctx.lineTo(462.395,258.185);
  ctx.lineTo(318.50199999999995,257.92);
  ctx.lineTo(128.28199999999995,393.16);
  ctx.bezierCurveTo(81.37799999999996,428.812,85.76499999999996,495.56000000000006,175.93099999999995,518.84);
  ctx.bezierCurveTo(266.097,542.12,317.779,528.77,367.756,505.78000000000003);
  ctx.bezierCurveTo(419.739,481.865,470.00399999999996,438.96900000000005,450.65599999999995,388.93800000000005);
  ctx.bezierCurveTo(431.30799999999994,338.90700000000004,359.503,340.796,359.503,340.796);
  ctx.closePath();
  ctx.moveTo(272.232,463.38);
  ctx.bezierCurveTo(246.46800000000002,463.277,208.372,455.64799999999997,217.46000000000004,430.403);
  ctx.bezierCurveTo(226.54600000000005,405.159,270.69100000000003,394.957,270.69100000000003,394.957);
  ctx.bezierCurveTo(270.69100000000003,394.957,323.93600000000004,387.625,338.25200000000007,413.082);
  ctx.bezierCurveTo(352.573,438.537,297.995,463.486,272.232,463.38);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.restore();
  ctx.restore();
}
