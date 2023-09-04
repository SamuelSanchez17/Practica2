$(document).ready(function() {

    $('#btnRFC').click(function(event)
    {

        var nombre = $("#name").val();
        var apellidoPat = $('#apPat').val();
        var apellidoMat = $('#apMat').val();
        var fecha = $('#fecha').val();

        var nom = nombre.substring(0,2);
        var apPat = apellidoPat.substring(0,1);
        var apMat = apellidoMat.substring(0,1);
        var año = fecha.substring(2, 4);
        var mes = fecha.substring(5, 7);
        var dia = fecha.substring(8, 10);

        var primerDigito = Math.floor(Math.random() * 9) + 1;
          
        var consonantes = "BCDFGHJKLMNPQRSTVWXYZ";
        var segundaLetra = consonantes.charAt(Math.floor(Math.random() * consonantes.length));
          
        var vocales = "AEIOU";
        var tercerDigito = vocales.charAt(Math.floor(Math.random() * vocales.length));
          
        //homoclave     convierte el numero a string
        var resultado = primerDigito.toString() + segundaLetra + tercerDigito;
          
        var rfc = (apPat + apMat + nom + año + mes + dia + resultado).toUpperCase();
        $("#rfc").val(rfc);

    });//funcion generador rfc

    $('#btnAPI').click(function(event)
    {
        event.preventDefault();
        const userID = $('#user').val();

        $.ajax({

            url: `https://jsonplaceholder.typicode.com/users/${userID}`,
            method: 'GET',
            success: function(data){
                $('#nombreAPI').text(data.name);
                $('#emailAPI').text(data.email);
                $('#result').show();
            },
            error: function(){
                $('#nombreAPI').text('No se encontro usuario');
                $('#emailAPI').text('No se encontro email');
                $('#result').show();
            }

        })
    }); //funcion para comunicar con la api rest

});