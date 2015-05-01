var layers2 = Pro.Motion.Stories.layers2 = Pro.Motion.Stories.layers2 || {};

layers2.story = {
    frame:{setup:{aspectRatio:1}},
    items:[
        {
            setup:{text:["Layer", "Cropping", "Techniques"]},
            init:{style:"caps", color:"#EEE"}
        },
        {
            item:"layer",
            init:{crop:true, size:[13,13], border:[0.5,"#094766"], corners:7, bg:"#FFC", pos:[-25,-15]},
            scripts:[
                {actions:[{anim:{dur:3, ease:"bounce"}, pos:{y:15}}]},
                {actions:[{anim:4, pos:{x:23}}]},
                {actions:[{delay:5, anim:{dur:3, ease:"elastic"}, pos:[-25,-15]}]}
            ],
            items:[{
                setup:{text:["Layer", "Cropping", "Techniques"]},
                init:{style:"caps", color:"#094766", pos:[25,15]},
                scripts:[
                    {actions:[{anim:{dur:3, ease:"bounce"}, pos:{y:-15}}]},
                    {actions:[{anim:4,pos:{x:-23}}]},
                    {actions:[{delay:5, anim:{dur:3, ease:"elastic"}, pos:[25,15]}]}
                ]
            }]
        }
    ]
};
