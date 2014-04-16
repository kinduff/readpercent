/**
 * readpercent v0.1 http://kinduff.github.io/readpercent
 * author: @kinduff
 */
(function ($) {
    function get_percent(container) {
        var posTop = $(window).scrollTop() - ($(container).offset().top - $(window).height());
        var percent = (posTop * 100) / $(container).height();
        percent = Math.min(100, Math.max(0, percent));
        return percent;
    }
    $.fn.readpercent = function (receiver, bar) {
        var content = this.selector, percent;
        if (! receiver) { // Get raw percent (0-100)
            return get_percent(content);
        } else if (receiver === true) { // Get rounded percent (0-100)
            return ~~get_percent(content);
        } else {
            $(window).bind("scroll.globalMessage", {
                receiver: receiver,
                container: content
            }, function (e) {
                percent = get_percent(e.data.container);
                if (bar) { // Change width percent of an element
                    $(receiver + ' ' + bar).css('width', percent + '%');
                } else { // Fill HTML5 Progress Element
                    $(receiver).val(percent);
                }
            });
        }
    };
}(jQuery));
