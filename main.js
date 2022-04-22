leftWristX=0;
leftWristY=0
rightWristX=0;
rightWristY=0;
song1="";
song2="";

score=0;
points=0;
function preload(){
    song1 = loadSound("hp.mp3");
song2= loadSound("as.mp3");


}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses)

}
function modelLoaded(){
    console.log("Model Initialized!!");
}
function draw(){
    image(video,0,0,600,500);
    song1_status= song1.isPlaying();
    song2_status= song2.isPlaying();
    fill("cornflowerblue");
    stroke("cornflowerblue");


   
  

    if(points>0.2){
        circle(leftWristX,leftWristY,20);
       song1.stop();


   
    if(song2_status==false){
        song2.play();
        document.getElementById("asfu").innerHTML="Happy Birthday!";
    }
}
 

    if(score>0.2){
        circle(rightWristX,rightWristY,20);
       song2.stop();


    
    if(song1_status==false){
        song1.play();
        document.getElementById("asfu").innerHTML="Happy Anniversary!";
    }
}
}











function gotPoses(results){
if(results.length>0){
    console.log(results);

    leftWristX= results[0].pose.leftWrist.x;
    leftWristY= results[0].pose.leftWrist.y;
    console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);

   rightWristX= results[0].pose.rightWrist.x;
  rightWristY= results[0].pose.rightWrist.y;
    console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);

    score=results[0].pose.keypoints[9].score;
    console.log("leftWrist Score=" +score);
    points=results[0].pose.keypoints[10].score;
    console.log("right wrist score="+points);
    
}
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
    
}
