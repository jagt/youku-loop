javascript: void(
(function() {
/* TODO click on the icon to stop looping */
/* TODO add adjustment */
var embed = document.getElementById('movie_player');
if (!embed.getNsData || document.getElementById('_ykl_oop_')) return; 
var _loophandler = function() {
    var data = embed.getNsData();
    var alltime = parseFloat(data.alltime);
    var time = parseFloat(data.time);
    if (alltime - time < 0.5) {
        embed.nsseek(0);
    }
};
var interval_id = setInterval(_loophandler, 400);

/* icon display and events */
var loop_icon = document.createElement('span');
loop_icon.style.cursor = 'pointer';
loop_icon.style.color  = 'red';
loop_icon.innerHTML = '&#8734;&nbsp';
loop_icon.id = '_ykl_oop_';

var title = document.getElementById('subtitle');
title.insertBefore(loop_icon, title.firstChild);

loop_icon.addEventListener("click", function() {
    clearInterval(interval_id);
    title.removeChild(loop_icon);
}, false);
})()
)
    

