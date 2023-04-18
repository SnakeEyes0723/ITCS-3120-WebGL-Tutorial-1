// DrawRectangle.js
function main() {
    // Retrieve <canvas> element <- (1)
    var canvas = document.getElementById('example');
    if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return;
    }
    
    // Get the rendering context for 2DCG <- (2)
    var ctx = canvas.getContext('2d');
    var cty = canvas.getContext('2d');
    var ctz = canvas.getContext('2d');
    
    // Draw a green rectangle <- (3)
    ctx.fillStyle = 'rgba(0, 255, 0, 1.0)'; // Set a green color
    ctx.fillRect(120, 10, 225, 225); // Fill a rectangle with the color

    // Draw a red rectangle <- (3)
    cty.fillStyle = 'rgba(225, 0, 0, 1.0)'; // Set a red color
    cty.fillRect(500, 10, 225, 225); // Fill a rectangle with the color

    // Draw a multi-colored rectangle <- (3)
    r = 0;
    b = 255;
    for(x = 800; x < 1025; x += 37.5){
        for(y = 10; y < 235; y += 37.5){
            ctz.fillStyle = 'rgba('+ r + ', 0,' + b + ', 1.0)'; // Set a color
            ctz.fillRect(x, y, 37.5, 37.5); // Fill a rectangle with the color
            r += 5;
            b -= 5;
        }
    }
}