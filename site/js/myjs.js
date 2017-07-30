$(function () {
    var hello = ['UI Developer', 'Photographer', 'Hungry for creativity'];
    var used = ['UI Developer'];
    var greeting = $('#what');
    var item;
    var sentence = $('#sentence');

    function hey() {
        item = hello[Math.floor(Math.random() * hello.length)];
        if (hello.length != used.length) {
            while (jQuery.inArray(item, used) != -1) {
                item = hello[Math.floor(Math.random() * hello.length)];
            }
            used.push(item);
        } else {
            used.length = 0;
            item = hello[Math.floor(Math.random() * hello.length)];
            used.push(item);
        }
        greeting.html(item);
        greeting.animate({
            "opacity": "1"
        }, 1500);

        sentence.fadeIn(1500);
    }

    window.setInterval(function () {
        sentence.fadeOut(1500);
        greeting.animate({
            "opacity": "0"
        }, 1500);
        setTimeout(hey, 1500);
    }, 5000);

});

$('.thumbnail').click(function(){
    $('.modal-body').empty();
    var title = $(this).parent('a').attr("title");
    $('.modal-title').html(title);
    $($(this).parents('div').html()).appendTo('.modal-body');
    $('#myModal').modal({show:true});
});