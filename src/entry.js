const angular = require('angular')

require('normalize.css')
require('./css/style.less')

const app = angular.module('carApp', [])

console.log('test app 101663753556909')

// make the six image
app.service('sixImage', function() {
  this.img = function(ctx) {
    ctx.save();
    ctx.translate(0,0);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(600,0);
    ctx.lineTo(600,600);
    ctx.lineTo(0,600);
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
    ctx.fillStyle = "#0a1971";
    ctx.beginPath();
    ctx.moveTo(375.025,244.103);
    ctx.bezierCurveTo(374.69599999999997,243.983,374.368,243.868,374.037,243.75300000000001);
    ctx.lineTo(467.78599999999994,172.582);
    ctx.lineTo(304.86299999999994,172.25);
    ctx.lineTo(165.168,282.936);
    ctx.lineTo(164.731,283.29499999999996);
    ctx.bezierCurveTo(143.464,301.311,133.526,327.32599999999996,138.143,352.89099999999996);
    ctx.bezierCurveTo(143.516,382.645,167.763,405.799,204.666,416.41599999999994);
    ctx.bezierCurveTo(228.614,423.3089999999999,249.929,426.65899999999993,269.825,426.65899999999993);
    ctx.bezierCurveTo(269.83,426.65899999999993,269.834,426.65899999999993,269.834,426.65899999999993);
    ctx.bezierCurveTo(305.281,426.65899999999993,331.486,415.67799999999994,352.444,404.92999999999995);
    ctx.bezierCurveTo(409.111,375.87799999999993,435.059,331.16099999999994,420.163,288.227);
    ctx.bezierCurveTo(412.945,267.427,397.337,252.168,375.025,244.103);
    ctx.closePath();
    ctx.moveTo(307.388,321.719);
    ctx.bezierCurveTo(301.791,327.484,286.525,335.061,277.467,335.061);
    ctx.bezierCurveTo(267.686,335.017,260.282,333.167,256.263,331.445);
    ctx.bezierCurveTo(260.486,326.455,270.683,321.045,279.34,318.59499999999997);
    ctx.bezierCurveTo(280.775,318.42299999999994,284.12899999999996,318.08599999999996,288.275,318.08599999999996);
    ctx.bezierCurveTo(298.311,318.086,304.421,319.989,307.388,321.719);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.moveTo(269.836,415.571);
    ctx.bezierCurveTo(269.836,415.571,269.831,415.571,269.827,415.571);
    ctx.bezierCurveTo(250.779,415.571,230.281,412.336,207.155,405.67900000000003);
    ctx.bezierCurveTo(174.087,396.163,152.488,376.12500000000006,147.89600000000002,350.69800000000004);
    ctx.bezierCurveTo(144.05100000000002,329.401,152.59500000000003,307.504,170.75600000000003,292.122);
    ctx.lineTo(170.93800000000002,291.97200000000004);
    ctx.lineTo(308.033,183.34500000000003);
    ctx.lineTo(435.597,183.60900000000004);
    ctx.lineTo(348.812,249.48800000000006);
    ctx.bezierCurveTo(354.916,250.10500000000005,363.26300000000003,251.50900000000004,371.957,254.65200000000004);
    ctx.bezierCurveTo(391.325,261.65100000000007,404.783,274.64700000000005,410.883,292.22900000000004);
    ctx.bezierCurveTo(426.20599999999996,336.38100000000003,388.59499999999997,374.1940000000001,348.287,394.862);
    ctx.bezierCurveTo(328.307,405.102,303.362,415.571,269.836,415.571);
    ctx.closePath();
    ctx.moveTo(277.572,307.657);
    ctx.bezierCurveTo(269.639,309.79499999999996,249.287,317.79499999999996,245.142,330.62199999999996);
    ctx.bezierCurveTo(244.118,333.78599999999994,244.691,335.34899999999993,245.388,336.45399999999995);
    ctx.bezierCurveTo(248.87300000000002,342.00399999999996,262.346,346.08299999999997,277.429,346.14899999999994);
    ctx.bezierCurveTo(289.95399999999995,346.14899999999994,312.14599999999996,335.62499999999994,317.796,324.85599999999994);
    ctx.bezierCurveTo(319.479,321.6479999999999,318.95799999999997,319.71099999999996,318.145,318.0969999999999);
    ctx.bezierCurveTo(314.582,311.04099999999994,303.698,306.9969999999999,288.27599999999995,306.9969999999999);
    ctx.bezierCurveTo(282.91,306.998,278.71,307.504,277.572,307.657);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();
    ctx.fillStyle = "#ec2127";
    ctx.beginPath();
    ctx.moveTo(339.446,256.938);
    ctx.lineTo(296.08500000000004,279.933);
    ctx.lineTo(412.60200000000003,191.48);
    ctx.lineTo(310.29600000000005,191.271);
    ctx.lineTo(175.054,298.429);
    ctx.bezierCurveTo(141.705,326.678,144.825,379.56499999999994,208.931,398.01199999999994);
    ctx.bezierCurveTo(273.03700000000003,416.45899999999995,309.78200000000004,405.881,345.31600000000003,387.66399999999993);
    ctx.bezierCurveTo(382.274,368.7149999999999,418.011,334.72599999999994,404.25500000000005,295.08399999999995);
    ctx.bezierCurveTo(390.501,255.44,339.446,256.938,339.446,256.938);
    ctx.closePath();
    ctx.moveTo(277.399,354.067);
    ctx.bezierCurveTo(259.081,353.986,231.995,347.94100000000003,238.457,327.94);
    ctx.bezierCurveTo(244.917,307.936,276.304,299.853,276.304,299.853);
    ctx.bezierCurveTo(276.304,299.853,314.15999999999997,294.043,324.34,314.214);
    ctx.bezierCurveTo(334.519,334.383,295.716,354.152,277.399,354.067);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
  }
})

// make window measurement
app.service('sixCanvas', function() {
  this.Width = document.getElementById('carCanvas').clientWidth
})

app.run(['$window', 'sixImage', 
  function($window, sixImage) {

  // init facebook
  $window.fbAsyncInit = function() {
    FB.init({ 
      appId: '101663753556909',
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
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, carC.width, carC.height)
  sixImage.img(ctx)

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
app.controller('FormController', ['$scope', '$http', '$window', '$log', 'sixImage', function($scope, $http, $window, $log, sixImage){
  
  $scope.text = {
    choose: 'Upload or Take a Photo',
    placeholder: 'Send your support for Trevor and add all the hashtags you can think of!',
    shareBtn: 'Share on ',
    message: ''
  }

  $scope.hasFile = false



  $scope.uploadFile = function(event){
    //set has file for share button to be sure an image was added
    $scope.hasFile = true
    //set the button to retake reupload
    $scope.choose = 'Retake / Reupload Pic'
    $scope.$apply()

    var files = event.target.files[0]
    console.log(files)

    //read the uploaded file
    var reader = new FileReader()

    var canvas = document.getElementById('carCanvas')
    var context = canvas.getContext('2d')
    //draw uploaded file
    var imageObj = new Image()

    imageObj.addEventListener('load', function() {
      var imgW = this.width
      var imgH = this.height
      var ratio = imgW / imgH
      var canW = canvas.width

      var moreImgW = 0 
      var moreImgH = 0

      context.clearRect(0, 0, canW, canW)

      if (imgW === imgH) {
        context.drawImage(this, 0, 0, canW, canW)
      } else if (imgW > imgH) {
        moreImgW = canW * ratio
        context.drawImage(this, canW/2 - moreImgW/2, 0, moreImgW, canW)
      } else if (imgW < imgH) {
        moreImgH = canW / ratio
        context.drawImage(this, 0, canW/2 - moreImgH/2, canW, moreImgH)
      }

      sixImage.img(context)
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

  /* FB.login should work even if they already are
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
  */

  $scope.share = function(e) {
    console.log($scope.canvas())

    if (!$scope.hasFile) {
      return false
    }

    var newBlob = $scope.canvas()

    FB.login(function(response){
      if (response.authResponse) {
        var accessToken = FB.getAuthResponse().accessToken
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
        $http.post("https://graph.facebook.com/testspaceasdf/photos?access_token=" + authToken, fd,
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
