function fullWidthFinal(class_container, id_block) {
    var class_container = class_container;
    var id_block = id_block;
    fullWidth(class_container, id_block);
    window.addEventListener('load', function() {
        fullWidth(class_container, id_block);
    });
    window.addEventListener('resize', function() {
        fullWidth(class_container, id_block);
    });
}

function fullWidth(class_container, id_block) {
    var class_container = class_container;
    var id_block = id_block;
    if (document.getElementsByClassName(class_container)[0]) {
        /* calculate width */
        var windowWidth = document.documentElement.clientWidth;
        var container = document.getElementsByClassName(class_container)[0];
        var containerPadding = parseFloat(window.getComputedStyle(container).paddingLeft)
            + parseFloat(window.getComputedStyle(container).paddingRight);
        var containerWidth = container.offsetWidth - containerPadding;
        var margin = -(windowWidth - containerWidth)/2;
        /* end calculate width */
        if (document.getElementById(id_block)) {
            document.getElementById(id_block).style.marginLeft = margin+'px';
            document.getElementById(id_block).style.marginRight = margin+'px';
        }
    }
}
