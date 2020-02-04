
// <div id="card1" class="playlist-card active-card">
//     <img class="thumbnail" src="https://i.vimeocdn.com/video/600595198_390x220.webp" />
//     <h3 class="video-card-title">Croissants | Flour and Stone</h3>
// </div>

function createCard(obj){
    var playlistCard = document.createElement('div');
    playlistCard.className = 'playlist-card';
    playlistCard.id = 'card' + obj.id;

    var thumbnail = document.createElement('img');
    thumbnail.className = 'thumbnail';
    thumbnail.src = obj.thumbnail;
    playlistCard.appendChild(thumbnail);

    var title = document.createElement('h3');
    title.className = 'video-card-title';
    title.innerHTML = obj.title;
    playlistCard.appendChild(title);

    return playlistCard;

}

xhttp = new XMLHttpRequest();

var inputBox = document.getElementById('search-box');
var btn = document.getElementById('search-btn');

btn.onclick = function(){
    var cardGrid = document.getElementById('video-card-grid');
    cardGrid.innerHTML = '';
    var value = '';
    if(inputBox.value.length >= 3){
        value = inputBox.value;
    }
    else{
        window.alert('Please type more than three letters')
    }

    var api = 'https://5d76bf96515d1a0014085cf9.mockapi.io/playlist?search=' + value;
    

    xhttp.open('GET', api, true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4){
            console.log(JSON.parse(this.responseText));
            var response = JSON.parse(this.responseText);
            for(var i=0; i<response.length; i++){
                cardGrid.appendChild(createCard(response[i]));
            }
        }
    }
    
}




