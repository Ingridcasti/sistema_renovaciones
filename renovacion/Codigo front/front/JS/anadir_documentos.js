$(document).ready(function() {
    //obtenemos el valor de los input
    
    $('#adicionar').click(function() {
     var documento = document.getElementById("Documento").files[0].name;
      var tipo_documento = document.getElementById("tipo_documento").value;
      var i = 1; //contador para asignar id al boton que borrara la fila
       //esto seria lo que contendria la fila
      var fila = '<tr id="row' + i + '"><td>' + documento + '</td><td>' + tipo_documento + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>';
      i++;

    
      $('#mytable tr:first').after(fila);
        $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
        var nFilas = $("#mytable tr").length;
        $("#adicionados").append(nFilas - 1);
        //le resto 1 para no contar la fila del header
        document.getElementById("Documento").files ="";
        document.getElementById("tipo_documento").value = "";
       // document.getElementById("nombre").focus();
      });
    $(document).on('click', '.btn_remove', function() {
      var button_id = $(this).attr("id");
        //cuando da click obtenemos el id del boton
        $('#row' + button_id + '').remove(); //borra la fila
        //limpia el para que vuelva a contar las filas de la tabla
        $("#adicionados").text("");
        var nFilas = $("#mytable tr").length;
        $("#adicionados").append(nFilas - 1);
      });
    });