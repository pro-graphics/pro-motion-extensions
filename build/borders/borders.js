var borders = Pro.Motion.Stories.borders = Pro.Motion.Stories.borders || {};

borders.story = {
    frame: {
        setup: {padding:5},
        init: {background:"#BADA55", corners:true}
    },
    items: [
        {
            setup: {text:"padding"},
            init: {border: [1, "green", "double"]},
            scripts: [
                {
                    actions: [
                        {animation:2, padding:[7, 0, 0, 0]},
                        {animation:2, padding:[7, 0, 7, 0]},
                        {animation:2, padding:[7, 0, 7, 7]},
                        {animation:2, padding:[7, 7, 7, 7]},
                        {animation:1, padding:[0, 0, 0, 0]}
                    ]
                }
            ]
        },
        {
            setup: {text:"corners"},
            init: {position:[-35, -35], border:true, corners:true, padding:true},
            scripts: [
                {
                    actions: [
                        {animation:2, corners:10},
                        {animation:2, corners:[10, 0, 10, 0], padding:true},
                        {animation:2, corners:[0, 10, 0, 10]},
                        {animation:2, corners:true, padding:true},
                    ]
                }
            ]
        },
        {
            setup: {text:"border"},
            init: {position:[35, 35], border:true, padding:true},
            scripts: [
                {
                    actions: [
                        {animation:2, border:[5, "blue"]},
                        {animation:3, border:[2, "green", "groove"]},
                        {animation:2, border:[2, "blue", "outset"]},
                        {animation:2, border:true}
                    ]
                }
            ]
        },
        {
            setup: {text:"border"},
            init: {position:[35, -35], border:true, padding:true},
            scripts: [
                {
                    actions: [
                        {animation:2, border:[2, "green", "dashed"]},
                        {animation:2, border:[2, "red", "dotted"]},
                        {animation:2, border:[2, "blue", "inset"]},
                        {animation:2, border:true}
                    ]
                }
            ]
        },
        {
            setup: {text:"shadow"},
            init: {position:[-35, 35], border:true, padding:true, shadow:true, corners:true,},
            scripts: [
                {
                    actions: [
                        {animation:2, shadow:[2, 2, 5]},
                        {animation:2, shadow:true},
                        {animation:2, shadow:[-2, 2, 5]},
                        {animation:2, shadow:[0, 0, 5, "rgba(12,40,255,1)"]},
                        {animation:1, shadow:true}
                    ]
                }
            ]
        }
    ]
};
