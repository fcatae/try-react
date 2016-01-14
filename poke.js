"use strict";

$.get('poke.json', function(data) {
   //alert(data.pokemon.length);
   var lista = document.getElementById('lista');
   
   data.pokemon.map(function(pokemon) {
       console.log('a')
       var elem = document.createElement('li');
       
       var link = document.createElement('a');
       link.setAttribute('href','http://pokeapi.co/media/img/9.png');
       link.textContent = pokemon.name;
       
       elem.appendChild(link);
       
       lista.appendChild(elem);
   })
    
});

// $.get('http://pokeapi.co/api/v1/sprite/1/')
$.get('http://pokeapi.co/media/img/9.png', function(data) {
    
})
