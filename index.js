function cambiarContenidos() 
	{
	  var elemento = document.getElementById("miBotone");
	  elemento.innerHTML  = "¡Producto agregado!";
	}
    function cambiarContenido() 
	{
	  var elemento = document.getElementById("miBoton");
	  elemento.innerHTML  = "¡Producto agregado!";}
    function agregarComentario() {
        var comentarioInput = document.getElementById("comentario").value;
      
       
        if (comentarioInput === "") {
          return; 
           }
         var contenedorComentarioo = document.getElementById("contenedor-comentarios");
         var nuevoComentario = document.createElement("div");
         nuevoComentario.innerHTML = comentarioInput;
         nuevoComentario.classList.add("comentarios");
         contenedorComentarios.appendChild(nuevoComentario);
         document.getElementById("comentarios").value = "";
      }
      function agregarComentario() {
        var comentarioInput = document.getElementById("comentario").value;
      
       
        if (comentarioInput === "") {
          return; 
           }
         var contenedorComentarios = document.getElementById("contenedor-comentarios");
         var nuevoComentario = document.createElement("div");
         nuevoComentario.innerHTML = comentarioInput;
         nuevoComentario.classList.add("comentario");
         contenedorComentarios.appendChild(nuevoComentario);
         document.getElementById("comentario").value = "";
      }
      