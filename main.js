$(document).ready(function(){
    $('header button').click(function() {
       $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
     })
 

   $('form').on('submit', function (e) {
      e.preventDefault();
      const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
      $(`
       <li>
       <img src="${enderecoDaNovaImagem}" />
       <div class="overlay-imagem-link">
       <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
       Ver imagem em tamanho real
       </a>
       <div/>
       <li/>`).appendTo('ul');
       $('#endereco-imagem-nova').val('');
   })


});


