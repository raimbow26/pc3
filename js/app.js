$(document).ready(function () {
    const apiUrl = 'js/pokemon.json'; // Ruta al archivo JSON o URL del API

    $.getJSON(apiUrl, function (data) {
        let trainersHtml = '';

        data.forEach(trainer => {
            trainersHtml += `<div class="trainer">
                <h2>${trainer.entrenador}</h2>
                <div class="pokemon-list">`;

            trainer.pokemons.forEach(pokemon => {
                trainersHtml += `<div class="pokemon ${pokemon.tipo}">
                    <h3>${pokemon.nombre}</h3>
                    <img src="${pokemon.foto}" alt="${pokemon.nombre}">
                    <p>Tipo: ${pokemon.tipo}</p>
                </div>`;
            });

            trainersHtml += `</div></div>`;
        });

        $('#trainers').html(trainersHtml);
    });
});
