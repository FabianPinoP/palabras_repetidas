function countsByLetter(){
  const text = document.getElementById('texto-entrada').innerText.trim().toLowerCase();
  console.log(text);

  acum = {};

  for(let i = 0; i < text.length; i++){
    const letra_actual = text[i]
    if (acum[letra_actual]) {
        acum[letra_actual] += 1
    }
    else{
      acum[letra_actual]= 1
    }
  }
  return acum;
}

function text(letter,cant){
  var div = document.getElementById('resultados');

  var p = document.createElement("p");
  div.appendChild(p);

  var strong = document.createElement("strong");
  var texto_strong = document.createTextNode("letra: "+ letter);
  strong.appendChild(texto_strong);
  p.appendChild(strong);

  var span = document.createElement("span");
  var texto_span = document.createTextNode("cantidad: " + cant);
  span.appendChild(texto_span);
  p.appendChild(span);
}
Object.entries(countsByLetter()).forEach(array => {
  text(array[0],array[1])
})


  const word = document.getElementById('texto-entrada').innerText;
  array_palabras = word.trim().toLowerCase().split(/\s+/);
  resultado = {};
  array_palabras.forEach(function(palabra){
    if(resultado[palabra]){
      resultado[palabra]++;
    }
    else{
      resultado[palabra]=1;
    }
  });

  function contador(palabras,cant){
    var div = document.getElementById('resultado_palabras');
  
    var p = document.createElement("p");
    div.appendChild(p);
  
    var strong = document.createElement("strong");
    var texto_strong = document.createTextNode("palabra: "+ palabras);
    strong.appendChild(texto_strong);
    p.appendChild(strong);
  
    var span = document.createElement("span");
    var texto_span = document.createTextNode("cantidad: " + cant);
    span.appendChild(texto_span);
    p.appendChild(span);
  }
  Object.entries(resultado).forEach(array => {
    contador(array[0],array[1])
  })
 


 


