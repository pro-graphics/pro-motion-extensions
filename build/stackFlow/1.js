var stack1 = Pro.Motion.Stories.stack1 = Pro.Motion.Stories.stack1 || {};

stack1.story = {
    frame:{
        setup:{padding:15},
        init:{background:"#BADA55", corners:true}
    },
    flows:[
        {   flow:"pageStack",
            setup:{ placement:{ position:100 }},
            pages:[
                { items:[
                    {   item:"text",
                        setup:{ text:"This is a seven page 'Stack Flow' using the default configuration."},
                        init:{font:10, width:90, textAlign:"center"},
                        scripts:[{ actions:[{ delay:3}]}]
                    }]
                },
                { items:[{item:"text", setup:{ text:"2"}}]},
                { items:[{item:"text", setup:{ text:"3"}}]},
                { items:[{item:"text", setup:{ text:"4"}}]},
                { items:[{item:"text", setup:{ text:"5"}}]},
                { items:[{item:"text", setup:{ text:"6"}}]},
                { items:[{item:"text",
                    setup:{ text:"In 3D!"},
                    init:{ position:{z:10}, font:10, padding:true, border:true, corners:true, background:"rgb(127,255,127)", shadow:[[1,1,2,"rgba(0,0,0,0.3)"],[0,0,5,"rgba(0,0,0,0.15)",3,true]]},
                    scripts:[
                        { event:"step1", actions:[{delay:1, animation:{duration:4,ease:"circle"}, rotation:{x:-360 + 180}, scale:200} ]},
                        { event:"step1", actions:[{delay:0.5, animation:{duration:5.5,ease:"elastic"}, rotation:{y:180}} ]},
                        { event:"step1", actions:[{animation:{duration:5,ease:"bounce"}, rotation:{z:180}} ]}
                    ]}]
                }]
        }
    ]
};
