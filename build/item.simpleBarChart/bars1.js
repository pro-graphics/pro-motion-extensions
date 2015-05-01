var bars1 = Pro.Motion.Stories.bars1 = Pro.Motion.Stories.bars1 || {};

bars1.story = {
    item: {
        item: "layer",
        init: {background: "#EEE", size: [32,32], corners: 1, position: {z:-1}},
        items: [
            {
                item: "simpleBarChart",
                setup: {bars: 10, domain: 10, width: 30, height:30, margin:1},
                barScripts: [
                    {
                        actions: [
                            {
                                animation: { duration:3, stagger:0.05, ease:"elastic" },
                                data: [1,2,3,4,5,6,7,8,9,10],
                                //skew: 30
                            },
                            {
                                animation: { duration:3, stagger:0.05, ease:"elastic" },
                                data: [1,-2,3,-4,5,-6,7,-8,9,-10],
                                fill: "purple",
                                opacity: 50
                            },
                            {
                                animation: { duration:3, stagger:0.05 },
                                data: [8,5,4,3,2,2,3,4,5,8],
                                fill: "orange",
                                opacity: 100
                            },
                            {
                                animation: { duration:3, stagger:0.05, ease:"bounce" },
                                data: [1,2,3,4,5,6,7,8,9,10]
                            },
                            {
                                animation: { duration:0.5 },
                                data: false,
                                fill: "red"
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
