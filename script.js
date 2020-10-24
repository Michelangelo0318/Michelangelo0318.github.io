const demo = document.getElementById("demo");

const title = demo.innerHTML;

// 可把字串拆開 alert(title.split(''))

const charArray = title.split("")

let animationHTML = "";

charArray.forEach((char, index) => {
  animationHTML = animationHTML + `<div class="char" style="animation-delay: ${index*0.5}s">${char}</div>`
})

//alert(animationHTML);
demo.innerHTML = animationHTML;