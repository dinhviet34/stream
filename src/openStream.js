const playVideo = require('./playVideo');
const Peer = require('simple-peer');
const $ = require('jquery');
function openStream(){
    navigator.mediaDevices.getUserMedia({audio: false, video:true})
    .then(stream => {
        playVideo(stream,'video')

        const p = new Peer({initiator:location.hash === '#1',trickle:false,stream});
        p.on('signal',function(token){
            $('#txtMySignal').val(JSON.stringify(token));
        });
        $('#btnConnect').click(() => {
            const friendSignal = JSON.parse($('#txtFriendSignal').val());
            p.signal(friendSignal);
        });
        p.on('stream', function friendStream(){
            playVideo(stream,'video2');
        });
    })
    .catch(err => console.log(err));
}
module.exports = openStream;