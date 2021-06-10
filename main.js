Webcam.set({
    width: 310,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90,
    constraints: {
        facingMode: "environment"
    }
});
Webcam.attach('#camera');

function takesnapshot() {
    Webcam.snap(function (data_uri) {
        // display results in page
        document.getElementById('result').innerHTML =
            '<img id="image" src="' + data_uri + '"/>';
    });
}

console.log(ml5.version);
   
classifier=ml5.imageClassifier("MobileNet",modelLoaded);

 function modelLoaded()
 {
     console.log("Modal Loaded !!")
 }

  function check()
  {
      img=document.getElementById("image");
      classifier.classify(img,gotResult);
  }

 function gotResult(error,results)
 {
   if (error) {
       console.log(error);
   } else {
       console.log(results);
       document.getElementById("answer").innerHTML=results[0].label;

   }
 }