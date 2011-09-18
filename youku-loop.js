javascript: void(
(function() {
/* TODO add adjustment widgets maybe */
/* TODO movie player still accept nsseek when paused,
 *      so maybe it doesn't need to loop so frequently */
/* IE6 has a limit of 508 chars of bookmarklet, so better
 * keep compressed length under 500
 * use prototype.js for better size */
var embed = $('movie_player');
if (!embed.getNsData || $('_ykl_oop_')) return; 
var _loophandler = function() {
    var data = embed.getNsData();
    if (parseFloat(data.alltime) - parseFloat(data.time) < 0.5) {
        embed.nsseek(0);
    }
};
var interval_id = setInterval(_loophandler, 400);

/* disable continouse play, so it won't jump to another
 * page before _loophandler is called */
if ( typeof setPf === 'function' ) setPf({'checked':false});

/* icon display and events */
var loop_icon = new Element('span',
        {
            'id'    : '_ykl_oop_',
            'style' : 'color:red;cursor:pointer;',
        });
loop_icon.update('&#8734; '); /*nbsp show as a ? in IE6*/

var title = $('subtitle');
if (title) {
    /* standalone pages or video albums */
    title.insert({'top' : loop_icon});
} else {
    /* play list pages */
    $$('h1 span')[0].insert({'after' : loop_icon});
    /* do not handle error here, if it failed to find
     * a object to place the icon, just don't show it*/
}

loop_icon.observe("click", function(event) {
    clearInterval(interval_id);
    loop_icon.remove();
});
})()
)
