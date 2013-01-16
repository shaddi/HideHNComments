/* (c) 2013 Shaddi Hasan
 *
 * Do whatever you want with this.
 */

$(function(){
    if ( document.location.href.search("item") > 0 ||
         document.location.href.search("newcomments") > 0 ) {
        $(".comment").remove();
        $(".comhead").remove();
        $('img[src*="gray"]').remove();
        $('a[href*="reply"]').remove();
        $('form[action$="/r"]').remove();
    }
    $('a[href*="item"]').remove(":contains('comment')");
    $('a[href*="item"]').remove(":contains('discuss')");
});
