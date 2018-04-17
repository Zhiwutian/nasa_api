console.log('File loaded');

const API_KEY = '';

$('#get-data').click(callNasaApi);

$('#jupiter').click(function(){
    callNasaApiES5('jupiter');
});

function callNasaApi(){
    const q = $('#query').val();

    $.ajax({
        url: `https://images-api.nasa.gov/search?q=${q}`,
        method: 'GET',
        success: resp => {
            console.log('RESP:', resp);
        }
    });
}

function callNasaApiES5(search) {
    // const q = $('#query').val();

    $.ajax({
        url: 'https://images-api.nasa.gov/search?q=' + search,
        method: 'GET',
        success: function(resp){
            console.log('RESP:', resp);
        }
    });
}
