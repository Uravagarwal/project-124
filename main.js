

function setup()
{
    vidio = createCapture(VIDEO);
    vidio.size(510,500);
    vidio.position(50)

    canvas = createCanvas(500,400)
    canvas.position(800)

    posenet = ml5.poseNet(vidio,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("hi");
}

function gotPoses(results)
{
  if(results.length>0)
  {
      console.log(results);
  }
}

function draw()
{
    background("yellow");
}
