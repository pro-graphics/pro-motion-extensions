var layers1 = Pro.Motion.Stories.layers1 = Pro.Motion.Stories.layers1 || {};

layers1.story = {
    frame:{aspectRatio:1},
    item:{
        item:"layer",
        init:{corners:true, size:[90,70], rot:{x:25}, bg:"rgba(255,255,255,0)", border:"rgba(0,0,0,0)"},
        scripts:[
            {action:{anim:{dur:25, ease:"linear"}, rot:1800}},
            {actions:[
                {delay:4, anim:3, bg:"rgba(255,255,255,0.8)", border:"#094766"},
                {delay:8, anim:3, bg:"rgba(255,255,255,0)", border:false}]
            }
        ],
        items:[
            {   item:"image", src:"../pro/pro-1000x829.png", width:70,
                action:{anim:{dur:25, ease:"linear"}, rot:-1800}
            },
            {   item:"text",
                text:"MOTION",
                init:{font:8, pos:[0,30,1], opacity:0, color:"#CCC"},
                actions:[{delay:4, anim:3, opacity:100}, {delay:8, anim:3, opacity:0}],
                charAction:{anim:[0.7,"curve",25,0,true,0.1], pos:{z:20}}
            }
        ]
    }
};
