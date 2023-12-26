status_of_model = "";

function setup(){
    canvas = createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_of_model").innerHTML = "Status : Detecting Objects";
    status_of_object = document.getElementById("object_name_input").value;
}

function modelLoaded(){
    console.log('Model Loaded!');
    status_of_model = true;
}

function draw(){
    image(video, 0, 0, 350, 350);
}