function draw(){
        const canvas = document.getElementById("myCanva");
        if(canvas.getContext){
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(200 200 200)";
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = "rgb(0 0 200)";
        ctx.fillRect(30, 30, 50, 50);
        }
         
}

draw();