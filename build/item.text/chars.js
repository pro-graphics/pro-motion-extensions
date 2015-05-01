var chars = Pro.Motion.Stories.chars = Pro.Motion.Stories.chars || {};

chars.story = {
    frame:{
        init:{bg:"#BADA55", corners:true}
    },
    items:[
        {
            setup:{text:"CHARACTER ANIMATION"},
            charInit:{font:24,pos:{z:12}, origin:[0,8,-6]},
            charScripts:[
                {
                    actions:[
                        {anim:{dur:2, stagger:0.1, repeat:3, ease:"curve inout", yoyo:true}, rot:{x:360}}
                    ]
                }
            ]
        },
        {
            item:"image",
            setup:{src:"sep.svg", width:90},
            init:{pos:{z:5}}
        }
    ]
};
