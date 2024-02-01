 var keys = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    }

function code() {
    var text = document.getElementById('textarea-left').value;
    text=text.toLowerCase();

  var encryptedText=text.replace(/e|i|a|o|u/g,function(matched) {
     return keys[matched];
    });
    document.getElementById("textarea-right").value=encryptedText;
}

// Objeto que mapea las letras encriptadas a las letras originales
var encryptedKeys = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

function decode() {
    var encryptedText = document.getElementById('textarea-left').value;

    // Usamos una expresión regular para buscar las palabras encriptadas
    var decryptedText = encryptedText.replace(/enter|imes|ai|ober|ufat/g, function(matched) {
        return encryptedKeys[matched]; // Buscamos la letra original en el objeto 'keys'
    });

    document.getElementById("textarea-right").value=decryptedText;
}

function copy(){
    var respondTextarea=document.getElementById('textarea-right').value;
    navigator.clipboard.writeText(respondTextarea);
}
