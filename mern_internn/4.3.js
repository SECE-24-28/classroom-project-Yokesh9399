<!DOCTYPE html>
<html>
    <head>
        <title>Document</title>
        <script>
            function press()
            {
                let body=document.getElementById("main");
                let hd=document.getElementById("h1");
                hd.innerHTML="Peacock is out National bird";
                hd.style.backgroundColor="Black";
                hd.style.color="White";
                body.appendChild(hd);
                
            }
        </script>
    </head>

    <body class="main">
       <h1 id="h1">Peacock</h1>
            <button id="btn" onclick="press()">Click me!</button>
            
    </body>
</html>