var layers1 = Pro.Motion.Stories.layers1 = Pro.Motion.Stories.layers1 || {};

layers1.story = {
    frame:{setup:{aspectRatio:1}},
    item:{
        item:"layer",
        init:{corners:true, size:[90, 70], rotation:{x:25}, background:"rgba(255,255,255,0)"},
        scripts:[
            {actions:[{animation:{duration:25, ease:"linear"}, rotation:1800}]},
            {actions:[
                {delay:9, animation:3, background:"rgba(255,255,255,0.8)", border:"#094766"},
                {delay:8, animation:3, background:"rgba(255,255,255,0)", border:false}]}
        ],
        items:[
            {
                item:"image",
                setup:{src:"../pro/pro-1000x829.png", width:70},
                scripts:[{actions:[{animation:{duration:25, ease:"linear"}, rotation:-1800}]}]
            },
            {
                item:"text",
                setup:{text:"MOTION"},
                init:{font:8, position:[0,30,1], opacity:0, color:"#CCC"},
                scripts:[
                    {actions:[
                        {delay:9, animation:3, opacity:100},
                        {delay:8, animation:3, opacity:0}]}
                ],
                charScripts:[{actions:[{animation:{duration:0.7, stagger:0.1, yoyo:true, repeat:25}, position:{z:20}}]}]
            }
        ]
    }
};
