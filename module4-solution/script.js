(function () {

    var givenNames = ["John", "Harry", "Jenny", "jack", "frank", "Emily", "Jane", "katherine", "Laura", "joseph"];
    
    for (var k = 0; k < givenNames.length; k++) {
      var firstLetterofName = givenNames[k].charAt(0).toLowerCase();
    
      if (firstLetterofName === 'j') {
        goodbyeSpeaker(givenNames[k]);
      }
      else {
        helloSpeaker(givenNames[k]);
      }
    }
    
    })();
    
    
    