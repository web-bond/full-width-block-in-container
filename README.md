Full width block in container
============
The script on javascript, which allows you to stretch the block in a container for the entire width of the window. 
<br>
Visually you can look at http://web-bond.com/projects/block-full-width-into-container/

Initialize
------------
```html
<script src="full_width.js" type="text/javascript"></script>
<script>
    fullWidthFinal('container', 'div-2'); // fullWidthFinal('container class', 'block id');
</script>
```

Initialize with JQuery (if you have jQuery it's more better option)
------------
```html
<script src="https://code.jquery.com/jquery-2.2.4.min.js"
        integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
        crossorigin="anonymous"></script>
<script src="full_width_jquery.js" type="text/javascript"></script>
<script>
    fullWidthFinal('.container', '#div-2'); // fullWidthFinal('container selector', 'block selector');
</script>
```

Example
-----------
```html
<div class="container">
    <div id="div-1"></div>
    <div id="div-2"></div>
    <div id="div-3"></div>
</div>

<!-- javascript -->
<script src="full_width.js" type="text/javascript"></script>
<script>
    fullWidthFinal('container', 'div-2'); // fullWidthFinal('container class', 'block id');
</script>
<!-- end -->

<!-- jQuery -->
<script src="https://code.jquery.com/jquery-2.2.4.min.js"
        integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
        crossorigin="anonymous"></script>
<script src="full_width_jquery.js" type="text/javascript"></script>
<script>
    fullWidthFinal('.container', '#div-2'); // fullWidthFinal('container selector', 'block selector');
</script>
<!-- end -->
```
