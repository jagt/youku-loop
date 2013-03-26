javascript: void(
(function() {
/* TODO add adjustment widgets maybe */
/* IE6 has a limit of 508 chars of bookmarklet, so better
 * keep compressed length under 500
 * use prototype.js for better size */

if (!setPlayerLoop || $('_ykl_oop_')) return;
/* Youku v5 player just support loop and continious play */
var set_loop = function(loop) {
    setPlayerLoop(loop);
    if (loop) {
        PlayerContinuous(false);
    }
};

/* icon display and events */
var loop_icon = new Element('span',
        {
            'id'    : '_ykl_oop_',
            'style' : 'color:red;cursor:pointer;'
        });
loop_icon.update('&#8734; '); /*nbsp show as a ? in IE6*/

/* insert in this way is more generic and should fit all types of pages*/
$$('h1').first().insert(loop_icon);
set_loop(true);

loop_icon.observe("click", function(event) {
    set_loop(false);
    loop_icon.remove();
});
})()
)
