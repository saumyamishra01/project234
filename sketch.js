var World = Matter.World;
var Engine = Matter.Engine;
var Bodies = Matter.Bodies;

var engine, world, object;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic : true

  }

  object = Bodies.rectangle(200, 100, 50, 50, object_options);
  World.add(world, object);
  
}

function draw() {
  background("purple"); 
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 50,50);
}