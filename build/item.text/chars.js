var chars = Pro.Motion.Stories.chars = Pro.Motion.Stories.chars || {};

chars.story = {
    frame:{
        init:{bg:"#BADA55", corners:true}
    },
    items:[
        {   text:"CHARACTER ANIMATION",
            charInit:{font:24, pos:{z:12}, origin:[0,8,-6]},
            charAction:{anim:[2,"curve inout",3,0,true,0.1], rot:{x:360}}
        },
        {   item:"image", src:"sep.svg", width:90,
            init:{pos:{z:5}}
        }
    ]
};
