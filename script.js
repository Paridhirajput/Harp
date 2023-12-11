var numberOfButtons=document.querySelectorAll(".pari").length;

for(var i=0;i< numberOfButtons; i++) {

  document.querySelectorAll(".pari")[i].addEventListener("click",function() {

    var buttonInnerHTML=this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress",function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch(key) {
    case "a":
      var harp1 = new Audio('sound/harp1.mp3');
      harp1.play();
      break;

    case "b":
      var harp2 = new Audio('sound/harp2.mp3');
      harp2.play();
      break;

    case "c":
      var harp3 = new Audio('sound/harp3.mp3');
      harp3.play();
      break;

    case "d":
      var harp4 = new Audio('sound/harp4.mp3');
      harp4.play();
      break;

    case "e":
      var harp5 = new Audio('sound/harp5.mp3');
      harp5.play();
      break;

    case "f":
      var harp6 = new Audio('sound/harp6.mp3');
      harp6.play();
      break;

      case "g":
      var harp7 = new Audio('sound/harp7.mp3');
      harp7.play();
      break;

      case "h":
      var harp8 = new Audio('sound/harp8.mp3');
      harp8.play();
      break;

      case "i":
      var hapr9 = new Audio('sound/harp9.mp3');
      hapr9.play();
      break;

      case "j":
      var harp10 = new Audio('sound/harp10.mp3');
      harp10.play();
      break;

    


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey); 

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}