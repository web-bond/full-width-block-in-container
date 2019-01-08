function fullWidthFinal(selector_container, selector_block) {
    var selector_container = selector_container;
    var selector_block = selector_block;
    if ($(selector_container).length && $(selector_block).length) {
        fullWidth(selector_container, selector_block);
        $(window).on('resize', function() {
            fullWidth(selector_container, selector_block);
        });
        $(document).ready(function() {
            fullWidth(selector_container, selector_block);
        });
    }
}
function fullWidth(selector_container, selector_block) {
    var selector_container = selector_container;
    var class_block = selector_block;
    if ($(selector_container).length && $(selector_block).length) {
        var width = document.documentElement.clientWidth;
        var containerWidth = $(selector_container).width();
        var margin = -(width - containerWidth)/2;
        $(class_block).css({'margin-left':+margin+'px','margin-right':+margin+'px'});
    }
}
