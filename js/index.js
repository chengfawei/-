$('#shortcut li').hover(function () {
    if ($(this).children('dl').length){
        $(this).addClass('li-activate');
    }

},function () {
    if ($(this).children('dl').length) {
        $(this).removeClass('li-activate');
    }
});

/*         */
$('#keyword').focus(function () {
    $(this).val('');
});

/*       */
$('#header-cart dl').hover(function () {
    $(this).addClass('hover');
},function () {
    $(this).removeClass('hover');
});
/*       */

$('#nav-list li').hover(function () {
    $(this).addClass('nav-activate');
},function () {
    if ($(this).attr('activate')!='true'){$(this).removeClass('nav-activate');}
});
/*      item-hover*/
$('.cate-list-show li').hover(function () {
    $(this).addClass('item-hover');
},function () {
    $(this).removeClass('item-hover');
});

/*             */






