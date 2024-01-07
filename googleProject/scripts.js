var textarea = document.getElementById("textarea1");
var div = document.querySelector(".search"); 

textarea.addEventListener("input", function () {
  var numeroMinimoCaracteres = 1;
  var conteudo = textarea.value;
  var imagemExistente = div.querySelector("img");

  if (conteudo.length >= numeroMinimoCaracteres && !imagemExistente) {
    var imagem = document.createElement("img");
    imagem.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAuUlEQVR4nNXUbQrCMAwG4Plxp/3Vk+UatoLphs2gl9jBRCMZCJnUmRYFzZ9u8OZZSsua5q/K9dQCwNqal6zrqX2JeYwXh9RZ0AlD6qaeHCoBjzH4QOwDDTCO2yVMZ1NKm+qgGbM0FGNLjdXYo2aArOq55CbM6mmqusm+BoLcs0D4kS2DmkxQea8+FGZeeaSDxnIfMqGsMaRTbmtmlA1YEerCee8w3t5hGfQqvdnQEYdd6e9Leqz536g7zg0srjNzGi4AAAAASUVORK5CYII=";

    div.appendChild(imagem);
  } else if (conteudo.length < numeroMinimoCaracteres && imagemExistente) {
    imagemExistente.remove();
  }
});
