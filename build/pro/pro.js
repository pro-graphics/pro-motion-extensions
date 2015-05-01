var logo = Pro.Motion.Stories.logo = Pro.Motion.Stories.logo || {};

logo.story = {
    flows:[
        {
            flow:"simple",
            pages:[
                {
                    items:[
                        {
                            item:"image",
                            setup:{src:"pro-1000x829.png", width:90},
                            init:{opacity:3, rotation:-10},
                            scripts:[
                                {
                                    actions:[{animation:{duration:4, yoyo:true, repeat:1, ease:"sine inout"}, rotation:10}]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
