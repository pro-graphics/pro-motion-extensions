var properties = Pro.Motion.Stories.properties = Pro.Motion.Stories.properties || {};

properties.story = {
    frame: {
        setup: {padding: 10},
        init: {background: "#BADA55", corners: true}
    },
    items: [
        {
            setup: {text: "opacity"},
            init: {font:15, opacity:100, position:[30, -45]},
            scripts: [
                {
                    actions: [
                        {animation:3, opacity:0 },
                        {animation:3, opacity:100}
                    ]
                }
            ]
        },
        {
            setup: {text: "X"},
            init: {font:15},
            scripts: [
                {
                    actions: [
                        {animation:3, position:{x:-30} },
                        {animation:3, position:{x:0} }
                    ]
                }
            ]
        },
        {
            setup: {text: "Y"},
            init: {font:15},
            scripts: [
                {
                    actions: [
                        {animation:3, position:{y:-40} },
                        {animation:3, position:{y:0} }
                    ]
                }
            ]
        },
        {
            setup: {text: "Z"},
            init: {font:15},
            scripts: [
                {
                    actions: [
                        {animation:3, position:{z:50} },
                        {animation:3, position:{z:0} }
                    ]
                }
            ]
        },
        {
            setup: {text: "scale"},
            init: {font:30, position:[-25, -45], scale:100},
            scripts: [
                {
                    actions: [
                        {animation:3, scale:0},
                        {animation:3, scale:100}
                    ]
                }
            ]
        },
        {
            setup: {text: "skew"},
            init: {font:15, position:[-35, 25], skew:30},
            scripts: [
                {
                    actions: [
                        {animation:3, skew:-30},
                        {animation:3, skew:30}
                    ]
                }
            ]
        },
        {
            setup: {text: "rotation x"},
            init: {font:10, position:[-5, 47]},
            scripts: [
                {
                    actions: [
                        {animation:{duration:6, ease:"linear"}, rotation:{x:720}}
                    ]
                }
            ]
        },
        {
            setup: {text: "rotation y"},
            init: {font:10, position:[30, -10]},
            scripts: [
                {
                    actions: [
                        {animation:{duration:6, ease:"linear"}, rotation:{y:720}}
                    ]
                }
            ]
        },
        {
            setup: {text: "rotation z"},
            init: {font:10, position:[32, 32]},
            scripts: [
                {
                    actions: [
                        {animation:{duration:6, ease:"linear"}, rotation:{z:720}}
                    ]
                }
            ]
        }
    ]
};
