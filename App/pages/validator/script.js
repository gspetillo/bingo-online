function validateCard(){
  cardNumbers = document.getElementById('card-numbers').value
  hashInput = document.getElementById('hash-input').value
  hashOutput = document.getElementById('hash-output')

  console.log("Card Numbers: "+ cardNumbers)

  if(String(hashInput)==stringToHash(cardNumbers)){
    hashOutput.innerHTML = "HASH Válido "
    hashOutput.style.color = '#1dcf17';
  }else{
    hashOutput.innerHTML = "HASH Inválido"
    hashOutput.style.color = '#ff7800'
  }
}

function stringToHash(string) {
  var hash = 0;

  if (string.length == 0) return hash;

  for (i = 0; i < string.length; i++) {
    char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  if (hash < 0) {
    return hash * -1;
  } else {
    return hash;
  }
}
