(function ($) {
    function get_percent(container) {
        var posTop = $(window).scrollTop() - $(container).offset().top;
        var percent = (posTop * 100) / $(container).height();
        return percent;
    }

    function limit_percent(percent) {
        percent = (percent <= 0) ? 0 : percent;
        percent = (percent >= 100) ? 100 : percent;
        return percent;
    }
    $.fn.readPercent = function (receiver, bar) {
        var content = this.selector, percent;
        if (! receiver) { // Get raw percent (0-100)
            percent = limit_percent(get_percent(content));
            return percent;
        } else if (receiver === true) { // Get rounded percent (0-100)
            percent = limit_percent(Math.round(get_percent(content)));
            return percent;
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
