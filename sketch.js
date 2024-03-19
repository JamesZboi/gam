var splashScreen ;
var player, playerImage;
var playButton, aboutButton;
var backgroundImg;
var gameState = "wait";
var score = 0;

function preload(){
    playerImage=loadImage('assets/idle.gif')
    splashScreen=loadImage('assets/splashScreen.gif')
    backgroundImg=loadImage("assets/background.jpg")
}
function setup(){
createCanvas(windowWidth, windowHeight )

playButton=createImg('assets/play.png')
playButton.position(windowWidth/2, windowHeight/2)
playButton.size(80,80)
playButton.hide();

aboutButton=createImg('assets/about.png')
aboutButton.position(windowWidth/2, windowHeight/2+100)
aboutButton.size(80,80)
aboutButton.hide();
}
function draw(){
    if(gameState == "wait"){
        background(splashScreen)
        playButton.show();
        aboutButton.show();
    }
    playButton.mousePressed(() => {
        playButton.hide();
        aboutButton.hide();
        gameState = "level1"
    })
    aboutButton.mousePressed(()=>{
        aboutButton.hide();
        playButton.hide();
        gameState = "info"
    })

    if(gameState == "info"){
        aboutGame();
    }

    if(gameState=="level1"){
        background(backgroundImg)
    } 
   
    drawSprites();
    if(gameState=="level1" || gameState=="level2"){
        textSize(30);
        fill("white");
        text("SCORE : "+score, windowWidth-250,windowHeight/12);
    }
}

function aboutGame(){
    swal({
        title: "About this Game",
        text: "use arrow keys to move the player and F to punch",
        textAlign: "CENTER",
        imageUrl: "assets/splashScreen.gif",
        imagesize: "300x300",
        confirmButtonText:"Back",
        confirmButtonColor:"black"
    },
    function(){
        gameState = "wait"
    })
}  

