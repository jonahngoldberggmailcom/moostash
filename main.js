function preload(){

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
}
function take_snapshot(){
    save('myFilterImage.png')
}
function modelLoaded(){
    console.log('PoseNet Is Initalized')
}
function gotPoses(results){
    if(results.length>0){
        console.log("moostashe x = " + results[0].pose.moostashe.x)
        console.log("moostashe y = " + results[0].pose.moostashe.y)
    }
}