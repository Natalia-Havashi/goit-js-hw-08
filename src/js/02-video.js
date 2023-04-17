import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(time) {
    localStorage.setItem('videoplayer-current-time', time.seconds);
}

const lastPayerTime = localStorage.getItem('videoplayer-current-time');

if(lastPayerTime){
    player.setCurrentTime(lastPayerTime);
} else {
    console.log(' ');
}