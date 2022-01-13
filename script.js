var gallery = [];


$(".add").click(function() {
    var newphoto = $(".picture-url").val();
    gallery.push(newphoto);
    var newcaption = $(".caption").val();
    $(".gallery").append("<img src=" + newphoto + ">" + "<br>" + "<figcaption>" + newcaption + "</figcaption>");
    $(".picture-url").val("");
    $(".caption").val("");
});

$(".gallerybut").click(function() {
    $(".gallery").hide(gallery);
    for (var addedpic of gallery) {
        $(".gallery").show("<img src=" + addedpic + ">");
    }
    $(".gallery").show(gallery);

});



