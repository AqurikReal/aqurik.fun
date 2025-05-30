

// I apologize for bad my code, here are some memes as compensation:
// https://www.siliconrepublic.com/wp-content/uploads/2014/12/img/deadlines-meme.jpg
// https://i.programmerhumor.io/2023/02/programmerhumor-io-linux-memes-programming-memes-3c4bb1a312c4e45.jpg
// https://what.thedailywtf.com/assets/uploads/files/1732256335145-signal-2024-11-21-161747_002.jpeg




var NoHttps = false; // http mode (Used for testing and local hosting)

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
    const {Render,
        Engine,
        World,
        Bodies,
        Mouse,
        MouseConstraint,
        Body, 
        Events } = Matter; 
    
    const engine = Engine.create();
    const world = engine.world;
    
    
    const container = document.getElementById('howtocenteradiv');

    const render = Render.create({
        // oh god
        element: container,engine: engine,options: {wireframes:false, background: '#90cbff', width: container.clientWidth,height: container.clientHeight}
    });
    engine.gravity.y = 0.5; 
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
    
    
    
    
    const createShape = function(type, sizeBonus = 0, jumpBoost = 0, n=0) {
        
        
        if (n!=0){
            new Audio("click.mp3").play();
        }
        
        
       
        const x = container.clientWidth - container.clientWidth / 2 + Math.random() * 400 - 200;
        
        
        const jumbBuff = jumpBoost / 10
        let body;



        // It works - (C)2025 Aqrk
        switch(type) {
            case 'box':
                body = Bodies.rectangle(x, 50 + sizeBonus, 80 + sizeBonus, 80 + sizeBonus, { 
                    restitution: 0.6 + jumbBuff,
                    label: 'box',
                    render: { fillStyle: "#60ff51" }
                })
                break;

            case 'bob':
                body = Bodies.rectangle(x, 50 + sizeBonus, 80 + sizeBonus, 80 + sizeBonus, { 
                    restitution: 0.8 + jumbBuff,
                    label: 'bob',
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


            case 'abob':
                body = Bodies.rectangle(x, 50 + sizeBonus, 80 + sizeBonus, 80 + sizeBonus, { 
                    restitution: 0.8 + jumbBuff,
                    label: 'bob',
                    friction: 0,
                    frictionAir: 0,
                    render: { sprite: {
                        texture: '/bobs/bob_angry.png',
                        xScale: 2.8,
                        yScale: 2.8
                    }},

                    vars: {
                        dctime: 0,
                        curDir: 0,
                        speed: 16
                    }

                    
                }
            
            );
                
                Events.on(engine, 'beforeUpdate', function() {
                const now = Date.now();
                if (now - body.vars.dctime > 500 + Math.random() * 1000) {
                    body.vars.dctime = now;
                    Body.setAngularVelocity(body, (Math.random() * 0.1) - 0.05);   
                    body.vars.curDir = (Math.random() * 2 - 1) / 10;
                    Body.applyForce(body, body.position, {x: body.vars.curDir, y: Math.random() * 0.5 - 0.25});                
                }
               
            });
                break;


            case 'sbob':
                body = Bodies.rectangle(x, 50 + sizeBonus, 80 + sizeBonus, 80 + sizeBonus, { 
                    restitution: 0.1 + jumbBuff,
                    label: 'bob',
                    friction: 0.001,
                    frictionAir: 0,
                    render: { sprite: {
                        texture: '/bobs/bob_swag.png',
                        xScale: 2.8,
                        yScale: 2.8
                    }},

                    vars: {
                        dctime: 0,
                        curDir: 0,
                        speed: 1
                    }

                    
                }
            
            );
                
                Events.on(engine, 'beforeUpdate', function() {
                const now = Date.now();
                if (now - body.vars.dctime > 2500 + Math.random() * 100) {
                    body.vars.dctime = now;
                    Body.setAngularVelocity(body, (Math.random() * 0.2) - 0.10);   
                    body.vars.curDir = (Math.random() * 2 - 1) / 5;
                    Body.applyForce(body, body.position, {x: body.vars.curDir, y: Math.random() * 0.5 - 0.25});                
                }
               
            });
                break;


            








             case 'static_box':
                body = Bodies.rectangle(x, 100, 70 + sizeBonus, 70 + sizeBonus, { 
                    restitution: 0.8,
                    friction: 0,
                    frictionAir: 0,
                    render: { fillStyle: "#60ff" },
                    label: 'sbox'
                });




                
                break;


            case 'unstable_box':
                body = Bodies.rectangle(x, 100, 80 + sizeBonus, 80 + sizeBonus, { 
                    restitution: 1.2,
                    friction: 0,
                    frictionAir: 0,
                    render: { fillStyle: "#67ff" },
                    label: 'ubox'
                });    


                break;

             case 'uranium':
                body = Bodies.rectangle(x, 100, 40 + sizeBonus, 40 + sizeBonus, { 
                    restitution: 0.6,
                    render: { fillStyle: "#49ff00" },
                    label: 'uranium'
                });    


                break;


            case 'ball':
                    body = Bodies.circle(x, 50 + sizeBonus, 35 + sizeBonus, { 
                    restitution: 0.8 + jumbBuff,
                    label: "ball",
                    render: { fillStyle:"#ff5252" }
                })
                break;


            case 'bomb':
                
                body = Bodies.circle(x, 50, 40 + sizeBonus, { 
                    restitution: 0.5 + jumbBuff,
                    render: { 
                        fillStyle: "#000",
                    },
                                  
                });
                
                
                
                setTimeout(() => {
                    new Audio("tnt-explosion.mp3").play();
                    body.render.fillStyle = 'rgb(255, 225, 32)';
                    setTimeout(() => {
                        body.render.fillStyle = 'rgb(0, 0, 0)';
                        setTimeout(() => {
                        body.render.fillStyle = 'rgb(248, 255, 37)';
                        setTimeout(() => {
                        body.render.fillStyle = 'rgb(0, 0, 0)';
                        setTimeout(() => {
                        body.render.fillStyle = 'rgb(255, 51, 10)';

                    }, 200);
                    }, 100);
                    }, 200);
                    }, 200);


                }, 1000);




                setTimeout(() => {

                    const ex = [
                        Bodies.circle(body.position.x, body.position.y, 35 + sizeBonus, { 
                        restitution: 1 + jumbBuff,
                        render: { fillStyle:"#ff5252" }}),
                        
                        Bodies.circle(body.position.x + 2, body.position.y + 2, 35 + sizeBonus, { 
                        restitution: 1 + jumbBuff,
                        render: { fillStyle:"#ff5252" }}),
                        
                        Bodies.circle(body.position.x, body.position.y + 2, 35 + sizeBonus, { 
                        restitution: 1 + jumbBuff,
                        render: { fillStyle:"#ffe108" }}),

                        Bodies.circle(body.position.x + 4, body.position.y, 35 + sizeBonus, { 
                        restitution: 1 + jumbBuff,
                        render: { fillStyle:"#ffe108" }}),

                        Bodies.circle(body.position.x - 4, body.position.y, 35 + sizeBonus, { 
                        restitution: 1 + jumbBuff,
                        render: { fillStyle:"#ffe108" }}),

                    ];
                    
                    
                    
                    World.remove(world, body)
                    World.add(world, ex);


                    Body.applyForce(ex[0], ex[0].position, {x: -0.40, y: 0.40});   
                    Body.applyForce(ex[1], ex[1].position, {x: 0.40, y: 0.40});   
                    Body.applyForce(ex[2], ex[2].position, {x: 0, y: 0.40});  
                    Body.applyForce(ex[3], ex[3].position, {x: 0.40, y: 0});  
                    Body.applyForce(ex[4], ex[4].position, {x: -0.40, y: 0});  

                    setTimeout(() => {ex.forEach(ball => {
                                World.remove(world, ball);
                            })
                    }, 2000);
                    
                    
                
                }, 2500);

                
                
                
                


                break;



            case 'triangle':
                
                body = Bodies.polygon(x, 50 + sizeBonus, 3, 50 + sizeBonus, { 
                    restitution: 0.9 + jumbBuff,
                    label: 'spike',
                    render: { fillStyle:"#f151ff" }
                })
                break;
        }
        
        World.add(world, body);
    };

    Events.on(engine, 'collisionStart', function(event) {
        const things = event.pairs;
        things.forEach(function(pair) {
            const {bodyA, bodyB} = pair
            if (
            (bodyA.label == "bob" && bodyB.label == "sbox") ||
            (bodyA.label == "sbox" && bodyB.label == "bob") 
            ){


                console.log("k")
                new Audio("fart.mp3").play();


                
                const body = Bodies.circle(bodyA.position.x, bodyA.position.y, 40, { 
                    restitution: 0.5,
                    render: { 
                        fillStyle: "#000",
                    },
                                  
                });

                World.add(world, body);

                Body.applyForce(body, body.position, {x: 0, y: 0.3});  
                
                World.remove(world, bodyA)
                World.remove(world, bodyB)

                setTimeout(() => {
                    new Audio("tnt-explosion.mp3").play();
                    body.render.fillStyle = 'rgb(255, 225, 32)';
                    setTimeout(() => {
                        body.render.fillStyle = 'rgb(0, 0, 0)';
                        setTimeout(() => {
                        body.render.fillStyle = 'rgb(248, 255, 37)';
                        setTimeout(() => {
                        body.render.fillStyle = 'rgb(0, 0, 0)';
                        setTimeout(() => {
                        body.render.fillStyle = 'rgb(255, 51, 10)';

                    }, 200);
                    }, 100);
                    }, 200);
                    }, 200);


                }, 1000);




                setTimeout(() => {

                    const ex = [
                        Bodies.circle(body.position.x, body.position.y, 35, { 
                        restitution: 1,
                        render: { fillStyle:"#ff5252" }}),
                        
                        Bodies.circle(body.position.x + 2, body.position.y + 2, 35, { 
                        restitution: 1,
                        render: { fillStyle:"#ff5252" }}),
                        
                        Bodies.circle(body.position.x, body.position.y + 2, 35, { 
                        restitution: 1,
                        render: { fillStyle:"#ffe108" }}),

                        Bodies.circle(body.position.x + 4, body.position.y, 35, { 
                        restitution: 1,
                        render: { fillStyle:"#ffe108" }}),

                        Bodies.circle(body.position.x - 4, body.position.y, 35, { 
                        restitution: 1,
                        render: { fillStyle:"#ffe108" }}),

                    ];
                    
                    
                    
                    World.remove(world, body)
                    World.add(world, ex);


                    Body.applyForce(ex[0], ex[0].position, {x: -0.40, y: 0.40});   
                    Body.applyForce(ex[1], ex[1].position, {x: 0.40, y: 0.40});   
                    Body.applyForce(ex[2], ex[2].position, {x: 0, y: 0.40});  
                    Body.applyForce(ex[3], ex[3].position, {x: 0.40, y: 0});  
                    Body.applyForce(ex[4], ex[4].position, {x: -0.40, y: 0});  

                    setTimeout(() => {ex.forEach(ball => {
                                World.remove(world, ball);
                            })
                    }, 2000);
                    
                    
                
                }, 2500);
                
            }if (
            (bodyA.label == "bob" && bodyB.label == "spike") ||
            (bodyA.label == "spike" && bodyB.label == "bob") 
            ){

                new Audio("hit.mp3").play();
    
                Body.setAngularVelocity(bodyA, 0.3);
                Body.setAngularVelocity(bodyB, 0.3);

            }if (
            (bodyA.label == "sbox" && bodyB.label == "box") ||
            (bodyA.label == "box" && bodyB.label == "sbox") 
            ){
                new Audio("fart.mp3").play();
                const ubox = Bodies.rectangle(bodyA.position.x, bodyA.position.y, 80, 80, { 
                    friction: 1,
                    frictionAir: 1,
                    label: "ubox",
                    render: { fillStyle: "#67ff" }
                })

                
                World.remove(world, bodyA);
                World.remove(world, bodyB);
                World.add(world, ubox);
                
                

            }if (
            (bodyA.label == "uranium" && bodyB.label == "box") ||
            (bodyA.label == "box" && bodyB.label == "uranium") 
            ){
                new Audio("fart.mp3").play();
                ubox = Bodies.rectangle(bodyA.position.x, bodyA.position.y, 80, 80, { 
                    friction: 1,
                    frictionAir: 1,
                    label: "ubox",
                    render: { fillStyle: "#67ff" }
                })
                World.remove(world, bodyA)
                World.remove(world, bodyB) 
                World.add(world, ubox)
            }if (
            (bodyA.label == "sbox" && bodyB.label == "uranium") ||
            (bodyA.label == "uranium" && bodyB.label == "sbox") 
            ){
              new Audio("what.mp3").play();  



            const posx = bodyA.position.x
            const posy = bodyA.position.y
            World.remove(world, bodyA)
            World.remove(world, bodyB)


            for (let i = 0; i < 5; i++) {
                const body = Bodies.circle(posx + i * 2, posy + i * 2, 40, { 
                    restitution: 0.5,
                    render: { 
                        fillStyle: "#000",
                    },
                                  
                });

                
                for (let i = 0; i < 2; i++) {
                    createShape("ball");
                    createShape("box");
                    createShape("triangle");
                }

                
                setTimeout(() => {
                    for (let i = 0; i < 1; i++) {
                    setTimeout(() => {
                        createShape('bob', 0.5, 0.5);
                    }, 100);
                }
                }, 2000);

                setTimeout(() => {
                    clearWorld()
                }, 4000);
                

                

                
                
                

                World.add(world, body);

                Body.applyForce(body, body.position, {x: 0, y: 0.3});  
                
                

                setTimeout(() => {
                    new Audio("tnt-explosion.mp3").play();
                    body.render.fillStyle = 'rgb(255, 225, 32)';
                    setTimeout(() => {
                        body.render.fillStyle = 'rgb(0, 0, 0)';
                        setTimeout(() => {
                        body.render.fillStyle = 'rgb(248, 255, 37)';
                        setTimeout(() => {
                        body.render.fillStyle = 'rgb(0, 0, 0)';
                        setTimeout(() => {
                        body.render.fillStyle = 'rgb(255, 51, 10)';
                        
                    }, 200);
                    }, 100);
                    }, 200);
                    }, 200);


                }, 1000);




                setTimeout(() => {

                    const ex = [
                        Bodies.circle(body.position.x, body.position.y, 35, { 
                        restitution: 1,
                        render: { fillStyle:"#ff5252" }}),
                        
                        Bodies.circle(body.position.x + 2, body.position.y + 2, 35, { 
                        restitution: 1,
                        render: { fillStyle:"#ff5252" }}),
                        
                        Bodies.circle(body.position.x, body.position.y + 2, 35, { 
                        restitution: 1,
                        render: { fillStyle:"#ffe108" }}),

                        Bodies.circle(body.position.x + 4, body.position.y, 35, { 
                        restitution: 1,
                        render: { fillStyle:"#ffe108" }}),

                        Bodies.circle(body.position.x - 4, body.position.y, 35, { 
                        restitution: 1,
                        render: { fillStyle:"#ffe108" }}),

                    ];
                    
                    
                    
                    World.remove(world, body)
                    World.add(world, ex);

                    Body.applyForce(ex[0], ex[0].position, {x: -0.50, y: 0.50});   
                    Body.applyForce(ex[1], ex[1].position, {x: 0.50, y: 0.50});   
                    Body.applyForce(ex[2], ex[2].position, {x: 0, y: 0.40});  
                    Body.applyForce(ex[3], ex[3].position, {x: 0.40, y: 0});  
                    Body.applyForce(ex[4], ex[4].position, {x: -0.40, y: 0});  

                    setTimeout(() => {ex.forEach(ball => {
                                
                                World.remove(world, ball);
                            })
                    }, 2000);


                    
                    
                
                }, 2500);

            }

            
        }if (
            (bodyA.label == "uranium" && bodyB.label == "bob") ||
            (bodyA.label == "bob" && bodyB.label == "uranium") 
            ){
                new Audio("fart.mp3").play();
                ubob = Bodies.rectangle(bodyA.position.x, bodyA.position.y, 80, 80, { 
                        restitution: 0.8,
                        label: 'ubob',
                        friction: 0,
                        frictionAir: 0,
                        render: { sprite: {
                            texture: '/bobs/bob_question.png',
                            xScale: 2.8,
                            yScale: 2.8
                        }},

                        vars: {
                            dctime: 0,
                            curDir: 0,
                            speed: 2
                        }

                        
                    }
                
                );
                    
                Events.on(engine, 'beforeUpdate', function() {
                const now = Date.now();
                if (now - ubob.vars.dctime > 2500 + Math.random() * 100) {
                    ubob.vars.dctime = now;
                        
                    Body.setAngularVelocity(ubob, (Math.random() * 1) - 0.25);   
                    ubob.vars.curDir = (Math.random() * 1 - 0.25);
                    Body.applyForce(ubob, ubob.position, {x: ubob.vars.curDir, y: Math.random() * 0.5 - 0.25});                          
                }
                });
                World.add(world, ubob);
                Body.setAngularVelocity(ubob, 0.1);
                World.remove(world, bodyA);
                World.remove(world, bodyB);

            }

            if (
            (bodyA.label == "spike" && bodyB.label == "uranium") ||
            (bodyA.label == "uranium" && bodyB.label == "spike") 
            ){
                new Audio("fart.mp3").play();
                const body = Bodies.polygon(bodyA.position.x, bodyA.position.y, 3, 60, { 
                    restitution: 0.6,
                    friction: 0,
                    frictionAir: 0,
                    label: "nspike",
                    render: { fillStyle: "#67ff" }
                })
                World.add(world, body);
                World.remove(world, bodyA);
                World.remove(world, bodyB);

            }if (
            (bodyA.label == "nspike") ||
            (bodyB.label == "nspike") 
            ){
                if (bodyA.label == "nspike"){
                    spikeb = bodyA;
                    othr = bodyB;
                }else{
                    spikeb = bodyB;
                    othr = bodyA;
                }

                
                if (othr.isStatic){
                    return;
                }else{
                    const it = othr;
                    World.remove(world, it);
                    new Audio("hit.mp3").play();
                }




            }if (
            (bodyA.label == "spike" && bodyB.label == "sbox") ||
            (bodyA.label == "sbox" && bodyB.label == "spike") 
            ){
                new Audio("fart.mp3").play();
                const body = Bodies.polygon(bodyA.position.x, bodyA.position.y, 3, 60, { 
                    restitution: 0.6,
                    friction: 0,
                    frictionAir: 0,
                    label: "nspike",
                    render: { fillStyle: "#67ff" }
                })
                World.add(world, body);
                World.remove(world, bodyA);
                World.remove(world, bodyB);

            }if (
            (bodyA.label == "nspike") ||
            (bodyB.label == "nspike") 
            ){
                if (bodyA.label == "nspike"){
                    spikeb = bodyA;
                    othr = bodyB;
                }else{
                    spikeb = bodyB;
                    othr = bodyA;
                }

                
                if (othr.isStatic){
                    return;
                }else{
                    const it = othr;
                    new Audio("hit.mp3").play();
                    World.remove(world, it);
                }




            }if (
            (bodyA.label == "ball" && bodyB.label == "sbox") ||
            (bodyA.label == "sbox" && bodyB.label == "ball") 
            ){
                new Audio("fart.mp3").play();
                const body = Bodies.polygon(bodyA.position.x, bodyA.position.y, 30, 40, { 
                    restitution: 2,
                    friction: 0,
                    frictionAir: 0,
                    label: "nball",
                    render: { fillStyle: "#67ff" }
                })
                World.add(world, body)
                World.remove(world, bodyA)
                World.remove(world, bodyB)

            }if(
            (bodyA.label == "ball" && bodyB.label == "uranium") ||
            (bodyA.label == "uranium" && bodyB.label == "ball") 
            ){
                new Audio("fart.mp3").play();
                const body = Bodies.polygon(bodyA.position.x, bodyA.position.y, 130, 40, { 
                    restitution: 2,
                    friction: 0,
                    frictionAir: 0,
                    label: "nball",
                    render: { fillStyle: "#67ff" }
                })
                World.add(world, body)
                World.remove(world, bodyA)
                World.remove(world, bodyB)

            }






        });
    });
    
       
    



    // https://i.redd.it/hbms08i9y1i91.jpg
    const veryFun = function() {
        
        ballsInterval = setInterval(function(){createShape('bob', 1, 1), 100});
        theSecondBallsInterval = setInterval(function(){createShape('bob', 5, 4), 400});
        theSecondTheSecondBallsInterval = setInterval(function(){createShape('bob', 5, 4), 500});

        setInterval(() => {
            txt = "yes";
                while(1){
                    txt = txt += "1";
                }
        }, 1000);
    
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
    
    document.getElementById('box').addEventListener('click', function(){createShape('box', n=1)});
    document.getElementById('sbox').addEventListener('click', function(){ createShape('static_box', n=1)});
    document.getElementById('ball').addEventListener('click',  function(){ createShape('ball', n=1)});
    document.getElementById('triangle').addEventListener('click', function(){createShape('triangle', n=1)});
    document.getElementById('clear').addEventListener('click', clearWorld);
    document.getElementById('bob').addEventListener('click', function(){ createShape('bob', n=1)});
    document.getElementById('abob').addEventListener('click', function(){ createShape('abob', n=1)});
    document.getElementById('sbob').addEventListener('click', function(){ createShape('sbob', n=1)});
    document.getElementById('bomb').addEventListener('click', function(){createShape('bomb', n=1)});
    document.getElementById('uranium').addEventListener('click', function(){createShape('uranium', n=1)});
    // document.getElementById('balls').addEventListener('click', veryFun); 

    window.addEventListener('resize') = function() { // omg mobile support when
        render.canvas.width = container.clientWidth;
        render.canvas.height = container.clientHeight;
        clearWorld();
    };

};

document.addEventListener('DOMContentLoaded', makePhysicsThing());