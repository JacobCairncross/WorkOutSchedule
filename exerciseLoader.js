class cat {
    constructor(source, name){
      this.source = source;
      this.name = name;
    }
  };
  
  var pictures = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];
  var names = ["Mittens","Sammy","Dippy","Danger","Precious"]
  var cats = [];
  for(let i = 0; i< pictures.length; i++){
    cats[i] = new cat(pictures[i],names[i])
  }

  //This will go from 1 to 3 because thats how many side pictures there are
  for(let i = 0;i<3;i++){ 
    document.getElementById("comingUp" + (i+1).toString() ).src = cats[i].source;
    alert("comingUp" + (i+1).toString() +cats[i].source);
  };
  
  function updateImage(){
    
  };