$(document).ready(function() {

  // Griglia 6x6, ad ogni click parte una richiesta

  $(".box").click(  function() {


    var elementoCliccato = this;


    $.ajax({

      url: 'https://flynn.boolean.careers/exercises/api/random/int',
      method: 'GET',

      success: function(data) {

        var numeroRandom = data.response;

        // output

        $(elementoCliccato).text(numeroRandom);


        // Se è <= 5 il quadrato diventa giallo,
        if ( numeroRandom <= 5) {

          $(elementoCliccato).addClass("yellow");

          // se è > di 5 il quadrato diventa verde.

        } else {
          $(elementoCliccato).addClass("green");
        }


      },

      error: function() {

        alert("Errore url");
      }
    });


  } );
});

//  Fine $(document).ready(..) {
