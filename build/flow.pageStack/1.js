var stack1 = Pro.Motion.Stories.stack1 = Pro.Motion.Stories.stack1 || {};

stack1.story = {
    frame:{
        padding:15,
        init:{bg:"#BADA55", corners:true}
    },
    flow: {
        flow:"pageStack",
        placement:{pos:100},
        pages:[
            { item:{
                    text:"This is a seven page 'Page Stack' using the default configuration.",
                    init:{font:10, width:90, align:"center"},
                    action:{delay:3}
                }
            },
            { item:{text:"2"}},
            { item:{text:"3"}},
            { item:{text:"4"}},
            { item:{text:"5"}},
            { item:{text:"6"}},
            { item:{text:"In 3D!",
                init:{
                    pos:{z:10},
                    font:10,
                    padding:true,
                    border:true,
                    corners:true,
                    bg:"rgb(127,255,127)",
                    shadow:[[1,1,2,"rgba(0,0,0,0.3)"],[0,0,5,"rgba(0,0,0,0.15)",3,true]]},
                scripts:[
                    { action:{delay:1, anim:[4,"circle"], rot:{x:-360 + 180}, scale:200}},
                    { action:{delay:0.5, anim:[5.5,"elastic"], rot:{y:180}}},
                    { action:{anim:[5,"bounce"], rot:{z:180}}}
                ]}
            }
        ]
    }
};
