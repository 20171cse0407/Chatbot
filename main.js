const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
chatBtn.addEventListener('click', ()=>{
    ShowSpans('msg1', 2);
    ShowSpans('msg2', 4);
    ShowSpans('msg3', 6);
    ShowSpans('msg4', 8);
  
  function ShowSpans(classname, time) {
    setTimeout(function() {
  
      document.getElementsByClassName(classname)[0].style.display = "block";
    }, time * 1000);
  
  }
    popup.classList.toggle('show');
    
})

   
 