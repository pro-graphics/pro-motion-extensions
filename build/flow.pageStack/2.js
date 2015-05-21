var stack2 = Pro.Motion.Stories.stack2 = Pro.Motion.Stories.stack2 || {};

stack2.story = {
    frame:{
        padding:15,
        init:{bg:"#BADA55", corners:true}
    },
    flow:{
        flow:"pageStack",
        placement:{ pos:[100,-100,0], rot:[0,0,0], scale:100 },
        pageAspectRatio:4/3,
        stacks:{
            current:{ pos:[-5,-10,-10], rot:[-10,15,-10], scale:100, opacity:100 },
            future:{ pos:[-33,-45,-35], rot:[-10,15,-10], scale:100, opacity:80,
                offset:{ pos:[-10,-9,-4], rot:[0,-5,3], scale:100, opacity:80 }},
            past:{ pos:[70,70,100], rot:[0,10,-5], scale:100, opacity:0,
                offset:{ pos:[0,0,0], rot:[0,0,0], scale:100, opacity:0 }}
        },
        pages:[
            { item:{
                    text:["A 'Page Stack' with", "custom configuration."],
                    init:{font:10, align:"center"},
                    actions:{delay:3}
                }
            },
            { item:{text:"2"}},
            { item:{text:"3"}},
            { item:{text:"4"}},
            { item:{text:"5"}},
            { item:{text:"6"}},
            { item:{
                    text: "In 3D!",
                    init: {
                        pos: {z:10},
                        font: 10,
                        padding: true,
                        border: true,
                        corners: true,
                        bg: "rgb(191,191,255)",
                        shadow: [[1,1,2,"rgba(0,0,0,0.3)"], [0,0,5,"rgba(0,0,0,0.15)",3,true]]
                    },
                    scripts: [
                        {action: {delay:1, anim:[4,"circle"], rot:{x:-360 + 180}, scale:200}},
                        {action: {delay:0.5, anim:[5.5,"elastic"], rot:{y:180}}},
                        {action: {anim:[5,"bounce"], rot:{z:-180}}}
                    ]
                }
            }
        ]
    }
};
