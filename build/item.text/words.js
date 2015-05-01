var words = Pro.Motion.Stories.words = Pro.Motion.Stories.words || {};

words.story = {
    frame:{
        init:{bg:"#BADA55", corners:true}
    },
    item:{
        setup:{ text:["The Quick Brown", "Fox Jumped Over", "The Lazy Dog !"] },
        init:{font:{size:14, lineHeight:100}, width:90},
        lineInit:{ padding:true },
        wordInit:{origin:[0,-50], rotation:{x:100}, opacity:0, background:"orange", border:true, corners:true, padding:true},
        wordScripts:[
            {
                actions:[ {animation:{duration:6, stagger:0.12, ease:"elastic"}, rotation:false, opacity:false} ]
            }
        ]
    }
};
