var stack3 = Pro.Motion.Stories.stack3 = Pro.Motion.Stories.stack3 || {};

stack3.story = {
    canvas:{init:{bg:"#BADA55", corners:true}},
    frame:{padding:15},
    flow:{
        flow:"pageStack",
        placement:{ pos:[-100,-100,0]},
        pageAspectRatio:4/3,
        stacks:{
            current:{ scale:90},
            future:{ pos:[60,-75,-10], scale:40, opacity:80,
                offset:{ pos:[-45,0,0], opacity:80 }},
            past:{ pos:[-60,75,-10], scale:40,
                offset:{ pos:[45,0,0], opacity:80 }}
        },
        pages:[
            { item:{
                    text:["A 'Page Stack' with", "custom configuration."],
                    init:{font:10, align:"center"}
                }
            },
            { item:{text:"2"}},
            { item:{text:"3"}},
            { item:{text:"4"}},
            { item:{text:"5"}},
            { item:{text:"6"}},
            { item: {
                    text: "In 3D!",
                    init: {
                        pos: {z: 30},
                        origin: [0, 0, -15],
                        font: 10,
                        color: "black",
                        padding: true,
                        border: [0.5, "white", "ridge"],
                        corners: true,
                        bg: "orange",
                        shadow: [[1,1,2,"rgba(0,0,0,0.3)"], [0,0,5,"rgba(0,0,0,0.15)",3,true]]
                    },
                    action:{delay:0.5, anim:[4,"elastic"], rot:{x:360}}
                }
            }
        ]
    }
};
