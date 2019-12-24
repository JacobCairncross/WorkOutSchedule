class cat {
    constructor(source, name){
      this.source = source;
      this.name = name;
    }
  }
  
  var pictures = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg","empty.jpg","empty.jpg","empty.jpg","empty.jpg"];
  var names = ["Mittens","Sammy","Dippy","Danger","Precious","N/A","N/A","N/A","N/A"]
  var cats = [];
  for(let i = 0; i< pictures.length; i++){
    cats[i] = new cat(pictures[i],names[i])
  }

  //This will go from 1 to 3 because thats how many side pictures there are
  /*for(let i = 0;i<4;i++){ 
    document.getElementById("currentlyDisplayedExercisePicture" + (i+1).toString() ).src = cats[i].source;
    document.getElementById("currentlyDisplayedExerciseText" + (i+1).toString() ).innerHTML = cats[i].name;
  }*/

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
        setTimeout(updateImage, 3000, exercisePictureArr, setsToDoArr, timesLeftToCall-1);
    }
  }