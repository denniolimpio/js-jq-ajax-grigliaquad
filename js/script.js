$(document).ready(function() {

  // Griglia 6x6, ad ogni click parte una richiesta

  $(".box").click(  function() {

    //dichiaro la mia variabile elemento cliccato
    var elementoCliccato = this;

    // API:
    // invoca un numero da 1 a 9
    $.ajax({

      url: 'https://flynn.boolean.careers/exercises/api/random/int',
      method: 'GET',

      // API caricato correttamente

      success: function(numero) {

        var numeroRandom = numero.response;

        // output

        $(elementoCliccato).text(numeroRandom);

        // ad ogni click rimuovo la classe preesistente

        $(elementoCliccato).removeClass("yellow");
        $(elementoCliccato).removeClass("green");

        // Se è <= 5 il quadrato diventa giallo,

        if ( numeroRandom <= 5) {

          // aggiundo la classe yellow
          $(elementoCliccato).addClass("yellow");

          // se è > di 5 il quadrato diventa verde.

        } else {

          // aggiundo la classe green
          $(elementoCliccato).addClass("green");

        }


      },

    // API non caricato
    
      error: function() {

        alert("Errore url");
      }
    });


  } );
});

//  Fine $(document).ready(..) {
