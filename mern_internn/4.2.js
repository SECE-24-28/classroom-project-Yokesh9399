<!DOCTYPE html>
<html>
    <head>
        <title>Document</title>
        <script>
            function press()
            {
                let body=document.getElementById("main");
                let hd=document.getElementById("h1");
                hd.innerHTML="I am From IND";
                hd.style.backgroundColor="Black";
                hd.style.color="White";
                body.appendChild(hd);
            }
        </script>
    </head>

    <body>
        <body id="main">
            <button id="btn" onclick="press()">Click me!</button>
            
        </body>




    </body>
</html>  