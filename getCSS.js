$.getDiv =function(id){
    var $div = $("[id='" + id + "']");
    return ($div.length == 0) ? $("<div>").attr("id", id).appendTo("body") : $div;
}

$.getCSS = function (url) {
    var $getCSS_div = $.getDiv("getCSS_box").hide();

    if ($getCSS_div.find("[getCSSsrc='" + url + "']").length != 0) {
        return $("[getCSSsrc='" + url + "']").data("getCSS_deferred");
    }
    var reulst_deferred = $.get(url);
    var $styleDiv = $("<div>").attr("getCSSsrc", url).data("getCSS_deferred", reulst_deferred);
    $getCSS_div.append($styleDiv);
    reulst_deferred.done(function (data) {
        $styleDiv.append($("<style>").text(data));
    }).fail(function () {
        $styleDiv.remove();
    })
};