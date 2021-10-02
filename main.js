function setup()
{
     canvas = createCanvas(400,400);
     canvas.position(560,150);
     video = createCapture(VIDEO);
     video.size(500,500);
}

function gotPoses(results)
{
//  I will do next class code here  //
}

function modelLoaded() {
     console.log('PoseNet is Initialized')
}

function draw() {
     background(94, 94, 94); 
     fill(0, 132, 255);
     stroke(255, 255, 255);
     square(100,100,100);
     random_number_r = Math.floor(Math.random() * 255) + 1;
     random_number_g = Math.floor(Math.random() * 255) + 1;
     random_number_b = Math.floor(Math.random() * 255) + 1;
     document.getElementById("label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")"; 
}
