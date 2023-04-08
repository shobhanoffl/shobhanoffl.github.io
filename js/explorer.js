$(document).ready(function(){
  getDate();
});

function getDate() {
  var date=new Date;
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  document.getElementById("current-time").innerHTML=strTime;
}

var intervalId = window.setInterval(function(){
  getDate();
}, 5000);


const listItems = document.querySelectorAll("#windows .windows-icon-tag");


// Add event listeners to all li elements
listItems.forEach((li) => {
  li.addEventListener("click", () => {
    // Toggle 'selected' class on/off on the clicked li element's .windows-tag
    const windowsTag = li.querySelector(".windows-tag");
    windowsTag.classList.toggle("selected");
    
    // Remove 'selected' class from all .windows-tag elements except the clicked one
    const windowsTags = document.querySelectorAll(".windows-tag");
    windowsTags.forEach((tag) => {
      if (tag !== windowsTag) {
        tag.classList.remove("selected");
      }
    });
  });
});
$(document).ready(function(){
  document.getElementById("proj-kp").addEventListener("dblclick",() => {
    window.open('https://docs.google.com/presentation/d/1XMRr7GvepvQ4gU67gE__VL4rYIQVybssRilnOQlqty8/edit?usp=sharing', '_blank');
  });
  
  document.getElementById("proj-info").addEventListener("dblclick",() => {
    window.open('https://docs.google.com/presentation/d/1pCziROGujBX4RGvdaKn9m-6JsfwwRMnKFbgPb_TIrow/edit?usp=sharing', '_blank');
  });
  
  document.getElementById("proj-mc").addEventListener("dblclick",() => {
    window.open('https://docs.google.com/presentation/d/1sq6j_UZ0aaZ-WEyOR2STZmQ3ycXUCvh3WiyEvv_V2wU/edit?usp=sharing', '_blank');
  });
  
  document.getElementById("proj-blog").addEventListener("dblclick",() => {
    window.open('https://docs.google.com/presentation/d/1I8wSd-oIRBqdHdCx06M9BiAgZqBghbjumrXNhJwtthE/edit?usp=sharing', '_blank');
  });
  
  document.getElementById("proj-fab").addEventListener("dblclick",() => {
    window.open('https://docs.google.com/presentation/d/1-ZWJYVkObPHUU2zTgip4ymvl2xdr1B8xPyf_VNKzBjY/edit?usp=sharing', '_blank');
  });
  
  document.getElementById("proj-balldet").addEventListener("dblclick",() => {
    window.open('https://docs.google.com/presentation/d/1u_Ci9I30A6q9fSj3_bLK9UIt3FZK6vLHtoELVsGOCm0/edit?usp=sharing', '_blank');
  });
  
  document.getElementById("proj-posture").addEventListener("dblclick",() => {
    window.open('https://docs.google.com/presentation/d/1lIyF9lw8raUMGhFOAE-MIvKkQBenP3uW-_AleZWzt1s/edit?usp=sharing', '_blank');
  });
  
  document.getElementById("shutdown").addEventListener("click",() => {
    window.open('home.html', '_self');
  });
});