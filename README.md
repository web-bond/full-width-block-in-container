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

Example
-----------
```html
<div class="container">
    <div id="div-1"></div>
    <div id="div-2"></div>
    <div id="div-3"></div>
</div>

<script src="/src/full_width.js" type="text/javascript"></script>
<script>
    fullWidthFinal('container', 'div-2'); // fullWidthFinal('container class', 'block id');
</script>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    .container {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
    }
    @media (min-width: 1200px) {
        .container {
            width: 1170px;
            margin: 0 auto;
        }
    }
    .container div {
        background: red;
        height: 200px;
    }
    #div-2 {
        background: green;
    }
    #div-3 {
        background: orange;
    }
</style>
```
