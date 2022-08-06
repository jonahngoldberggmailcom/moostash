noseX=0
noseY=0
function preload(){
 clown_nose = loadImage('https://i.postimg.cc/2y26PjLy/Screenshot-2022-08-05-203054-removebg-preview.png')
}
function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw(){
    image(video, 0, 0, 300, 300)
    image(clown_nose, noseX, noseY, 30, 30)
}
function take_snapshot(){
    save('myFilterImage.png')
}
function modelLoaded(){
    console.log('PoseNet Is Initalized')
}
function gotPoses(results){
    if(results.length>0){
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
        console.log("moostashe x = " + results[0].pose.nose.x)
        console.log("moostashe y = " + results[0].pose.nose.y)
    }
}
