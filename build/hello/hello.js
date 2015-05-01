var hello = Pro.Motion.Stories.hello = Pro.Motion.Stories.hello || {};

hello.story = {
    frame: {
        setup: {padding:15},
        init: {bg: "#BADA55", corners:true}
    },
    items: [
        {
            setup: {text: "Hello"},
            init: {font:50, opacity:50},
            scripts: [
                {
                    actions: [
                        {anim:5, rot:[180, -360, 540]},
                        {anim:5, rot:[180, 180, 180]}
                    ]
                }
            ]
        },
        {
            setup: {text: "World"},
            init: {font:20, pos:[35, 35], opacity:50},
            scripts: [
                {  actions: [{anim:{dur:3, ease:"curve less out"}, pos:{x:-35}}]},
                {  actions: [{anim:{dur:3, ease:"curve less in"}, pos:{y:-35}}]},
                {
                    actions: [
                        {delay:3, anim:{ dur:3, ease:"elastic" }, pos:[35,-35]},
                        {anim:{ dur:3, ease:"bounce"}, pos:[35,35]}
                    ]
                }
            ]
        }
    ]
};
