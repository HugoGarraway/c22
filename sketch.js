const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var world, engine, ground, ball

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  var gOptions = {
    isStatic: true
  }
  ground = Bodies.rectangle(400,350,800,50,gOptions)
  World.add(world, ground)
  var bOptions = {
    restitution:1,friction:1,density:1
  
  }
  ball=Bodies.circle(400,50,30,bOptions)
  World.add(world, ball)
  console.log(ball)
}

function draw() {
  
  background(0);  
 Engine.update(engine)
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,800,50) 
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,30,30)
} 