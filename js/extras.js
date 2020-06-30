$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  
    for (var i=0;i<4;i++) {
      next=next.next();
      if (!next.length) {
        next=$(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    }
  });

// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});


// popovers initialization - on click
$('[data-toggle="popover-click"]').popover({
  html: true,
  trigger: 'click',
  placement: 'bottom',
  content: function () { return $('#popover_content_list').html(); }
});

//prueba para botones
var inicio = 1; //se inicializa una variable en 1

function aumentar(){ 
var cantidad = document.getElementById('cantidad').value = ++inicio; 
}

function disminuir(){ 

var cantidad = document.getElementById('cantidad').value = --inicio; 
}