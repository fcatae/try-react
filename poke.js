"use strict";

$.get('poke.json', function(data) {
   //alert(data.pokemon.length);
   var lista = document.getElementById('lista');
   
   data.pokemon.map(function(pokemon) {
       var elem = document.createElement('li');
       
       var view = { link: 'http://pokeapi.co/media/img/9.png', text: pokemon.name };
       var output = Mustache.render('<a href="{{link}}">{{text}}</a>', view);
       elem.innerHTML = output;       
       
       lista.appendChild(elem);
   })
    
});

// $.get('http://pokeapi.co/api/v1/sprite/1/')
// $.get('http://pokeapi.co/media/img/9.png', function(data) {})

