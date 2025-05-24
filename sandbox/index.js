

// I apologize for bad my code, here are some memes as compensation:
// https://www.siliconrepublic.com/wp-content/uploads/2014/12/img/deadlines-meme.jpg
// https://i.programmerhumor.io/2023/02/programmerhumor-io-linux-memes-programming-memes-3c4bb1a312c4e45.jpg
// https://what.thedailywtf.com/assets/uploads/files/1732256335145-signal-2024-11-21-161747_002.jpeg




var NoHttps = true; // http mode (Used for testing and local hosting)

// Redirects

// redirects from http to https
if (location.protocol !== 'https:'){
  if (!NoHttps){
    console.log("Redirecting to https...");
    location.replace('https://' + location.href.split('//')[1]);
  }
}

// redirects to mobile version
if (/Mobi|Android|iPhone|Tablet|iPad|iPod/i.test(navigator.userAgent)) {
  if (!NoHttps){
    console.log("Redirecting to mobile version...");
    window.location.href = 'https://aqurik.fun/mobile';
  }
}

const makePhysicsThing = () => { // :fire:



    // https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3apq1b5vpatu7eyn4lk4.jpeg
   
   
    // cool imports (100% not taken from Stack Overflow)
    const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Body, Events } = Matter; 
    
    const engine = Engine.create();
    const world = engine.world;
    engine.gravity.y = 0.5; 
    
    const container = document.getElementById('howtocenteradiv');

    const render = Render.create({
        // oh god
        element: container,engine: engine,options: {wireframes:false, background: '#90cbff', width: container.clientWidth,height: container.clientHeight}
    });
    
    const createBordersIgIdk = function() { // the best
    return [
        Bodies.rectangle(container.clientWidth/2, -10, container.clientWidth, 40, { isStatic: true }),Bodies.rectangle(-10, container.clientHeight/2, 40, container.clientHeight, { isStatic: true }),
        Bodies.rectangle(container.clientWidth/2, container.clientHeight + 10, container.clientWidth, 40, { isStatic: true }),Bodies.rectangle(container.clientWidth + 10, container.clientHeight/2, 40, container.clientHeight, { isStatic: true })
    ];
};
       
        
    
    
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(
        engine, {
        mouse: 
        mouse,
        constraint: {stiffness: 0.6,
            render: { visible: false } }
    });


    World.add(world, [...createBordersIgIdk(), mouseConstraint]);



    Render.run(render);

    Matter.Runner.run(engine);
    
    
    const createShape = function(type, sizeBonus = 0, jumpBoost = 0) {
        
        new Audio("click.mp3").playbackRate = 0.8 + Math.random() * 0.4, new Audio("click.mp3").play();
       
        const x = container.clientWidth - container.clientWidth / 2 + Math.random() * 400 - 200;
        
        
        const jumbBuff = jumpBoost / 10
        let body;



        // It works - (C)2025 Aqrk
        switch(type) {
            case 'box':
                body = Bodies.rectangle(x, 50 + sizeBonus, 80 + sizeBonus, 80 + sizeBonus, { 
                    restitution: 0.6 + jumbBuff,
                    render: { fillStyle: "#60ff51" }
                })
                break;

            case 'bob':
                body = Bodies.rectangle(x, 50 + sizeBonus, 80 + sizeBonus, 80 + sizeBonus, { 
                    restitution: 0.8 + jumbBuff,
                    render: { sprite: {
                        texture: '/bobs/bob_wtf.png',
                        xScale: 2.8,
                        yScale: 2.8


                    
                        
                    
                    }},

                    vars: {
                        dctime: 0,
                        curDir: 0,
                        speed: 4
                    }

                    
                }
            
            );
                
                Events.on(engine, 'beforeUpdate', function() {
                const now = Date.now();
                if (now - body.vars.dctime > 1500 + Math.random() * 2500) {
                    body.vars.dctime = now;
                    Body.setAngularVelocity(body, (Math.random() * 0.5) - 0.25) * 10;   
                    body.vars.curDir = (Math.random() * 2 - 1) / 100;
                    Body.applyForce(body, body.position, {x: body.vars.curDir, y: 0});                
                }
                
                  
               
            });
                break;








             case 'static_box':
                body = Bodies.rectangle(x, 100 + sizeBonus, 100 + sizeBonus, 100 + sizeBonus, { 
                    restitution: 0.7,
                    friction: 0,
                    frictionAir: 0,
                    render: { fillStyle: "#60ff" }
                });
                
                
                break;
            case 'ball':
                    body = Bodies.circle(x, 50 + sizeBonus, 35 + sizeBonus, { 
                    restitution: 0.8 + jumbBuff,
                    render: { fillStyle:"#ff5252" }
                })
                break;
            case 'triangle':
                
                body = Bodies.polygon(x, 50 + sizeBonus, 3, 50 + sizeBonus, { 
                    restitution: 0.9 + jumbBuff,
                    
                    render: { fillStyle:"#f151ff" }
                })
                break;
        }
        
        World.add(world, body);
    };
    // https://i.redd.it/hbms08i9y1i91.jpg
    const veryFun = function() {
        
        ballsInterval = setInterval(() => createShape('ball', 20, 4), 100);
        theSecondBallsInterval = setInterval(() => createShape('box', 20, 4), 100);
        theSecondTheSecondBallsInterval = setInterval(() => createShape('triangle', 20, 4), 100);
    
};
    // https://what.thedailywtf.com/assets/uploads/files/1732126258689-ae9dbyb_460swp.webp
    const clearWorld = function() {
        try{ //help me
            clearInterval(ballsInterval);
            clearInterval(theSecondBallsInterval);
            clearInterval(theSecondTheSecondBallsInterval);
        }
        catch{
            console.log("Hello world");
            World.clear(world);
            World.add(world, [...createBordersIgIdk(), mouseConstraint]);            
        }
        
        
        World.clear(world);
        World.add(world, [...createBordersIgIdk(), mouseConstraint]);
    };
    
    document.getElementById('box').addEventListener('click', () => createShape('box'));
    document.getElementById('sbox').addEventListener('click', () => createShape('static_box'));
    document.getElementById('ball').addEventListener('click',  () => createShape('ball'));
    document.getElementById('triangle').addEventListener('click', () => createShape('triangle'));
    document.getElementById('clear').addEventListener('click', clearWorld);
    document.getElementById('bob').addEventListener('click', () => createShape('bob'));
    // document.getElementById('balls').addEventListener('click', veryFun);

    window.addEventListener('resize') = function() { // omg mobile support when
        render.canvas.width = container.clientWidth;
        render.canvas.height = container.clientHeight;
        clearWorld();
    };

};

document.addEventListener('DOMContentLoaded', makePhysicsThing());