var stack2 = Pro.Motion.Stories.stack2 = Pro.Motion.Stories.stack2 || {};

stack2.story = {
    frame:{
        setup:{padding:15},
        init:{background:"#BADA55", corners:true}
    },
    flows:[
        {   flow:"pageStack",
            setup:{
                placement:{ pos:[100,-100,0], rot:[0,0,0], scale:100 },
                pageAspectRatio:4/3,
                stacks:{
                    current:{ pos:[-5,-10,-10], rot:[-10,15,-10], scale:100, opacity:100 },
                    future:{ pos:[-33,-45,-35], rot:[-10,15,-10], scale:100, opacity:80,
                        offset:{ pos:[-10,-9,-4], rot:[0,-5,3], scale:100, opacity:80 }},
                    past:{ pos:[70,70,100], rot:[0,10,-5], scale:100, opacity:0,
                        offset:{ pos:[0,0,0], rot:[0,0,0], scale:100, opacity:0 }}
                }
            },
            pages:[
                { items:[
                    {   setup:{ text:"A 'Stack Flow' with<br>custom configuration."},
                        init:{font:10, textAlign:"center"},
                        scripts:[{ actions:[{ delay:3}]}]
                    }]
                },
                { items:[{setup:{text:"2"}}]},
                { items:[{setup:{text:"3"}}]},
                { items:[{setup:{text:"4"}}]},
                { items:[{setup:{text:"5"}}]},
                { items:[{setup:{text:"6"}}]},
                { items:[{setup:{text:"In 3D!"},
                    init:{ pos:{z:10}, font:10, padding:true, border:true, corners:true, bg:"rgb(191,191,255)", shadow:[[1,1,2,"rgba(0,0,0,0.3)"],[0,0,5,"rgba(0,0,0,0.15)",3,true]]},
                    scripts:[
                        { type:"step1", actions:[{delay:1, anim:{dur:4, ease:"circle"}, rot:{x:-360 + 180}, scale:200} ]},
                        { type:"step1", actions:[{delay:0.5, anim:{dur:5.5, ease:"elastic"}, rot:{y:180}} ]},
                        { type:"step1", actions:[{anim:{dur:5, ease:"bounce"}, rot:{z:-180}} ]}
                    ]}]
                }]
        }
    ]
};
