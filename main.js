function setup() {
    var canvas = createCanvas(300, 300);
    canvas.center();
    var video = createCapture(VIDEO);
    video.hide();
    var classifier=ml5.ImageClassifier('mobileNet',modelLoaded);
  }
  
  function draw() {
    Image(video,0,0,300,300);
    classifier.classify(video,gotResult);
  }
  
  function modelLoaded(){
    console.log('Model Loaded')
  }
  
  previousResult='';
  
  gotResult(error,results)
    if (error) {
      console.error(error);
    }
    else{
      if ((results[0].confidence>0.5)&&(previousResult != results[0].label)){
        console.log(results);
        previousResult=results[0].label; 
      }
  
    }
    function setup() {
        var canvas = createCanvas(300, 300);
        canvas.center();
        var video = createCapture(VIDEO);
        video.hide();
        var classifier=ml5.ImageClassifier('google leens',modelLoaded);
      }