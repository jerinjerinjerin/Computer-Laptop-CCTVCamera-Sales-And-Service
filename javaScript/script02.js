document.addEventListener("DOMContentLoaded", function(){

  const cursorElement = document.createElement('div');
  cursorElement.classList.add('custom-cursor');
  document.body.appendChild(cursorElement);
  document.body.classList.add('custom-cursor-active');
  
  document.addEventListener('mousemove', e => {
      cursorElement.setAttribute("style", "top: " + e.pageY + "px; left:" + e.pageX +"px;");
  });
 
  const customEventElements = document.querySelectorAll('[data-cursor-event="hover"]');

  customEventElements.forEach(
    function(customElement) {
      let currentCustomElement = customElement;
      customElement.addEventListener("mouseenter", e => {
        cursorElement.classList.add(currentCustomElement.getAttribute('data-event-class'));
      });
      customElement.addEventListener("mouseout", e => {
        cursorElement.classList.remove(currentCustomElement.getAttribute('data-event-class'));
      });
    }
  );
  
  document.addEventListener('click', () => {
    cursorElement.classList.add("custom-cursor-click");

    setTimeout(() => {
      cursorElement.classList.remove("custom-cursor-click");
    }, 500);
  });
});