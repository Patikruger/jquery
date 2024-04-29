$(document).ready(function(){
    $('header button').click(function() {
       $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
     })
 

    $('form').on('submit', function(e) {
      e.preventDefault();
       const enderecoDaNovaImagem = $ ('#endereço-imagem-nova').val();
       const novoItem = $('<li><li/>');
       $(`<img src="${enderecoDaNovaImagem}" />`).apendTo(novoItem);
       $(`
       <div class="overlay-imagem-link">
       <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
       Ver imagem em tamanho real
       </a>
       <div/>
       `).apendTo(novoItem);
       $(novoItem).apendTo('ul');
    })


});


