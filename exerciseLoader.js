class exercise {
    constructor(source, name){
      this.source = source;
      this.name = name;
    }
  }
  
  var pictures = ["crunches.jpg","lunges.jpg","plank.jpg","pushUps.jpg","squats.jpg","tricepDips.jpg","empty.jpg","empty.jpg","empty.jpg","empty.jpg"];
  var names = ["15","12","60 sec","12","12","12","N/A","N/A","N/A","N/A"]
  var exercises = [];
  for(let i = 0; i< pictures.length; i++){
    exercises[i] = new exercise(pictures[i],names[i])
  }


  updateImage(pictures, names, 5);
  
  function updateImage(exercisePictureArr, setsToDoArr, timesLeftToCall){
    let startingIndex = exercisePictureArr.length - timesLeftToCall - 4;//4 is the number of empty images 
    let exerciseDisplayBox = 1;
    for(i = startingIndex; i<startingIndex+4;i++ ){
        document.getElementById("currentlyDisplayedExercisePicture" + exerciseDisplayBox.toString() ).src = exercisePictureArr[i];
        document.getElementById("currentlyDisplayedExerciseText" + exerciseDisplayBox.toString()).innerHTML = setsToDoArr[i];
        exerciseDisplayBox++;
    }
    if(timesLeftToCall > 0){
        setTimeout(updateImage, 120000, exercisePictureArr, setsToDoArr, timesLeftToCall-1);
    }
    else{
        workoutFinished();
    }
  }
  //To do for when workout is finished.
  function workoutFinished(){

  }