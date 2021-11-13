(()=>
{
    const document_element = document.documentElement;
    const display = document.getElementById('cvs').getContext('2d', {alpha:false});

    const world_width  = 480;
    const world_height = 480;

    draw =()=> 
    {
        display.fillStyle = '#8669';
        display.fillRect(0 ,0 ,world_width, world_height);
    }

    loop =()=>
    {
        window.requestAnimationFrame(loop);
        

      draw();
    }

    display.canvas.width  = world_width;
    display.canvas.height = world_height;

    window.requestAnimationFrame(loop);

})
();