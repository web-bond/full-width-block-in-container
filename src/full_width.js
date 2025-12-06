function fullWidthFinal(selector_container, selector_block) {
    fullWidth(selector_container, selector_block);

    window.addEventListener('resize', function () {
        fullWidth(selector_container, selector_block);
    });

    document.addEventListener('DOMContentLoaded', function () {
        fullWidth(selector_container, selector_block);
    });
}

function fullWidth(selector_container, selector_block) {
    var container = document.querySelector(selector_container);
    var blocks = document.querySelectorAll(selector_block);

    if (!container || !blocks.length) return;

    var winWidth = document.documentElement.clientWidth || window.innerWidth;

    var style = getComputedStyle(container);
    var paddingLeft = parseFloat(style.paddingLeft) || 0;
    var paddingRight = parseFloat(style.paddingRight) || 0;

    var containerClientWidth = container.clientWidth;
    var contentWidth = containerClientWidth - paddingLeft - paddingRight;

    var margin = -(winWidth - contentWidth) / 2;

    blocks.forEach(function (blk) {
        blk.style.marginLeft = margin + 'px';
        blk.style.marginRight = margin + 'px';
    });
}
