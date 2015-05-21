var layers2 = Pro.Motion.Stories.layers2 = Pro.Motion.Stories.layers2 || {};

layers2.story = {
    frame:{aspectRatio:1},
    items:[
        {   text:["Layer", "Cropping", "Techniques"],
            init:{style:"caps", color:"#EEE"}
        },
        {   item:"layer",
            init:{crop:true, size:[13,13], border:[0.5,"#094766"], corners:7, bg:"#FFC", pos:[-25,-15]},
            scripts:[
                {action:{anim:[3,"bounce"], pos:{y:15}}},
                {action:{anim:4, pos:{x:23}}},
                {action:{delay:5, anim:[3,"elastic"], pos:[-25,-15]}}
            ],
            items:[{
                text:["Layer", "Cropping", "Techniques"],
                init:{style:"caps", color:"#094766", pos:[25,15]},
                scripts:[
                    {action:{anim:[3,"bounce"], pos:{y:-15}}},
                    {action:{anim:4, pos:{x:-23}}},
                    {action:{delay:5, anim:[3,"elastic"], pos:[25,15]}}
                ]
            }]
        }
    ]
};
