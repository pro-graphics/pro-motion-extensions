var eases = Pro.Motion.Stories.eases = Pro.Motion.Stories.eases || {};

eases.story = {
    classes:{
        label:{ font:6, anchor:-50, transformOrigin:-50, rotation:-90 }
    },
    frame:{
        setup:{padding:15},
        init:{background:"#BADA55", corners:true}
    },
    items:[
        {
            setup:{text:"linear"},
            init:{position:[-48, -35], class:"label"}
        },
        {
            item:"image",
            setup:{src:"ball.gif", width:5},
            init:{position:[-48, -32]},
            scripts:[
                {
                    actions:[
                        {animation:{duration:4, ease:"linear"}, position:[-48, 45]},
                        {animation:{duration:4, ease:"linear"}, position:[-48, -32]}
                    ]
                }
            ]
        },
        {
            setup:{text:"bounce"},
            init:{position:[-36, -35], class:"label"}
        },
        {
            item:"image",
            setup:{src:"ball.gif", width:5},
            init:{position:[-36, -32]},
            scripts:[
                {
                    actions:[
                        {animation:{duration:4, ease:"bounce"}, position:[-36, 45]},
                        {animation:{duration:4, ease:"bounce in"}, position:[-36, -32]}
                    ]
                }
            ]
        },
        {
            setup:{text:"elastic"},
            init:{position:[-24, -35], class:"label"}
        },
        {
            item:"image",
            setup:{src:"ball.gif", width:5},
            init:{position:[-24, -32]},
            scripts:[
                {
                    actions:[
                        {animation:{duration:4, ease:"elastic"}, position:[-24, 45]},
                        {animation:{duration:4, ease:"elastic in"}, position:[-24, -32]}
                    ]
                }
            ]
        },
        {
            setup:{text:"back"},
            init:{position:[-12, -35], class:"label"}
        },
        {
            item:"image",
            setup:{src:"ball.gif", width:5},
            init:{position:[-12, -32]},
            scripts:[
                {
                    actions:[
                        {animation:{duration:4, ease:"back"}, position:[-12, 45]},
                        {animation:{duration:4, ease:"back in"}, position:[-12, -32]}
                    ]
                }
            ]
        },
        {
            setup:{text:"sine"},
            init:{position:[0, -35], class:"label"}
        },
        {
            item:"image",
            setup:{src:"ball.gif", width:5},
            init:{position:[0, -32]},
            scripts:[
                {
                    actions:[
                        {animation:{duration:4, ease:"sine"}, position:[0, 45]},
                        {animation:{duration:4, ease:"sine in"}, position:[0, -32]}
                    ]
                }
            ]
        },
        {
            setup:{text:"curve"},
            init:{position:[12, -35], class:"label"}
        },
        {
            item:"image",
            setup:{src:"ball.gif", width:5},
            init:{position:[12, -32]},
            scripts:[
                {
                    actions:[
                        {animation:{duration:4, ease:"curve"}, position:[12, 45]},
                        {animation:{duration:4, ease:"curve in"}, position:[12, -32]}
                    ]
                }
            ]
        },
        {
            setup:{text:"expo"},
            init:{position:[24, -35], class:"label"}
        },
        {
            item:"image",
            setup:{src:"ball.gif", width:5},
            init:{position:[24, -32]},
            scripts:[
                {
                    actions:[
                        {animation:{duration:4, ease:"expo"}, position:[24, 45]},
                        {animation:{duration:4, ease:"expo in"}, position:[24, -32]}
                    ]
                }
            ]
        },
        {
            setup:{text:"slow mo"},
            init:{position:[36, -35], class:"label"}
        },
        {
            item:"image",
            setup:{src:"ball.gif", width:5},
            init:{position:[36, -32]},
            scripts:[
                {
                    actions:[
                        {animation:{duration:4, ease:"slowmo less"}, position:[36, 45]},
                        {animation:{duration:4, ease:"slowmoback less"}, position:[36, -32]}
                    ]
                }
            ]
        },
        {
            setup:{text:"slow mo"},
            init:{position:[48, -35], class:"label"}
        },
        {
            item:"image",
            setup:{src:"ball.gif", width:5},
            init:{position:[48, -32]},
            scripts:[
                {
                    actions:[
                        {animation:{duration:4, ease:"slowmo more"}, position:[48, 45]},
                        {animation:{duration:4, ease:"slowmoback more"}, position:[48, -32]},
                        {delay:1}
                    ]
                }
            ]
        }
    ]
};
