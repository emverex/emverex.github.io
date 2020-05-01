// Main Border Radius Change on Scroll 

function changemain() {
      var bodyElement = document.querySelector("body");
      var navElement = document.querySelector(".main");
      this.scrollY > 70 ? navElement.style.borderTopLeftRadius = '0px' : navElement.style.borderTopLeftRadius = '30px';
      this.scrollY > 70 ? navElement.style.borderTopRightRadius = '0px' : navElement.style.borderTopRightRadius = '30px';
}
window.addEventListener("scroll", changemain, false);