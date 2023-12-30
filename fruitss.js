img = "";
status = "";
objects = [];

function preloaded() {
    img = loadImage('dog_cat.jpg')
}

function modelLoaded() {
    console.log("Modelo Carregado!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
 
function draw() {
    image(img, 0, 640, 420);

    if(status !="")
    {
    }

    fill("#FF0000");
    text("garda-roupa", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );

    fill("#FF0000");
    text("ventilador", 320, 120);
    noFill();
    rect(300, 90, 270, 320 );
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}