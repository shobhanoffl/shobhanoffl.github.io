$(document).ready(function(){
  
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      $('.parallax').css('background-position', 'center calc(50% + ' + (scroll * 0.2) + 'px)');
    })
  });
  

  $(window).scroll(function() {
    if($(this).scrollTop() > 0) {
      $('.scroll-hint').fadeOut();
    } else {
      $('.scroll-hint').fadeIn();
    }
  });


  const instance = new TypeIt(".gen", { 
    speed: 80
  })
	.type("G")
	.pause(100)
	.type("E")
	.pause(100)
	.type("N")
	.pause(100)
	.type("E")
	.pause(100)
	.type("R")
	.pause(100)
	.type("A")
	.pause(100)
	.type("L")
	.pause(100)
	.type("I")
	.pause(100)
	.type("S")
	.pause(100)
	.type("T")
	.go();


  // setTimeout(function() {
  //   instance.freeze();
  //   // window.removeEventListener('scroll', disableScroll);
  // }, 5000);
  
  window.addEventListener('scroll', function() {
    var targetElement = document.getElementById('target');
    var targetPosition = targetElement.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    
    if (targetPosition < screenPosition) {
      this.document.getElementById("cdriven").innerHTML="";
      this.document.getElementById("generalist").innerHTML="";
      this.document.getElementById("ageneralist").innerHTML="";
      this.document.getElementById("ima").innerHTML="AND I'M";
      this.document.getElementById("myname").innerHTML="<br>SHOBHAN KUMAR";
      
      
      // this.document.getElementById("maincontent").innerHTML = "";
      // do something when the target element is in view
      // this.alert('Target element is in view!');
    }else{
      this.document.getElementById("ima").innerHTML="I'M&nbsp; A";
      this.document.getElementById("myname").innerHTML="";
      // this.document.getElementById("myname").innerHTML="";
      this.document.getElementById("ageneralist").innerHTML="A";
      this.document.getElementById("cdriven").innerHTML="CURIOSITY DRIVEN";
      this.document.getElementById("generalist").innerHTML="GENERALIST";
      
    }
  });

  window.addEventListener('scroll', disableScroll);

// Disable scrolling for the first 5 seconds
window.addEventListener('scroll', function(event) {
  event.preventDefault();
}, { passive: false });

// Re-enable scrolling after 5 seconds
setTimeout(function() {
  window.removeEventListener('scroll', disableScroll);
}, 2500);

function disableScroll() {
  window.scrollTo(0, 0);
}