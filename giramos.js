


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Muda a imagem a cada 2 segundos
}

// // A função showSlides() agora é chamada sem parâmetros, pois não precisamos mais de um parâmetro de deslocamento para avançar os slides.
// A cada chamada da função showSlides(), incrementamos o slideIndex.
// Se slideIndex for maior que o número total de slides, definimos slideIndex para 1, para que o carrossel recomece do primeiro slide.
// Usamos setTimeout() para chamar recursivamente a função showSlides() a cada 2 segundos (ou o tempo que você preferir). Isso fará com que o carrossel avance automaticamente.