var stack3 = Pro.Motion.Stories.stack3 = Pro.Motion.Stories.stack3 || {};

stack3.story = {
    canvas:{init:{background:"#BADA55", corners:true}},
    frame:{setup:{padding:15}},
    flows:[
        {   flow:"pageStack",
            setup:{
                placement:{ position:[-100,-100,0]},
                pageAspectRatio:4 / 3,
                stacks:{
                    current:{ scale:90},
                    future:{ position:[60,-75,-10], scale:40, opacity:80,
                        offset:{ position:[-45,0,0], opacity:80 }},
                    past:{ position:[-60,75,-10], scale:40,
                        offset:{ position:[45,0,0], opacity:80 }}
                }
            },
            pages:[
                { items:[
                    {
                        setup:{text:"A 'Page Stack' with<br>custom configuration."},
                        init:{font:10, textAlign:"center"}
                    }]
                },
                { items:[{setup:{text:"2"}}]},
                { items:[{setup:{text:"3"}}]},
                { items:[{setup:{text:"4"}}]},
                { items:[{setup:{text:"5"}}]},
                { items:[{setup:{text:"6"}}]},
                { items:[{setup:{text:"In 3D!"},
                    init:{ position:{z:30}, transformOrigin:[0,0,-15], font:10, color:"white", padding:true, border:[0.5, "white", "ridge"], corners:true, background:"orange", shadow:[[1,1,2,"rgba(0,0,0,0.3)"],[0,0,5,"rgba(0,0,0,0.15)",3,true]]},
                    scripts:[
                        { type:"step1", actions:[{delay:0.5, animation:{duration:4,ease:"elastic"}, rotation:{x:360}} ]}
                    ]}]
                }]
        }
    ]
};
