var bars2 = Pro.Motion.Stories.bars2 = Pro.Motion.Stories.bars2 || {};

bars2.story = {
    items: [
        {
            item: "simpleBarChart",
            setup: {bars: 30, domain: 50, width: 90, height:40, margin:0.3},
            barInit: {fill: "#BADA55"},
            barScripts: [
                {
                    actions: [
                        {
                            animation: { duration:3, stagger:0.05, ease:"elastic" },
                            data: [34,33,32,27,31,35,36,33,39,34,26,32,45,39,33,37,29,36,22,31,37,36,44,42,35,36,39,33,45,38]
                        },
                        {
                            animation: { duration:0.3, stagger:0.01 },
                            data: [12,13,12,11,10,14,16,1,4,11,5,10,15,15,12,17,14,14,10,11,13,12,18,20,17,16,19,10,15,17]
                        },
                        {
                            delay: 2,
                            animation:1,
                            data:false
                        }
                    ]
                }
            ]
        },
        {
            item: "simpleBarChart",
            setup: {bars: 30, domain: 50, width: 90, height:40, margin:2},
            barInit: {fill: "orange"},
            barScripts: [
                {
                    actions: [
                        {   animation: { duration:3, stagger:0.05, ease:"elastic" },
                            data: [[45,34],[42,33],[36,32],[33,27],[37,31],[40,35],[42,36],[34,33],[41,39],[39,34],[38,26],[46,32],[49,45],[50,39],[46,33],[47,37],[39,29],[38,36],[37,22],[45,31],[42,37],[41,36],[49,44],[46,42],[50,35],[41,36],[46,39],[38,33],[47,45],[42,38]]
                        },
                        {   animation: { duration:2, stagger:0.02, ease:"bounce" },
                            data: [[45,12],[42,13],[36,12],[33,11],[37,10],[40,14],[42,16],[34,1],[41,4],[39,11],[38,5],[46,10],[49,15],[50,15],[46,12],[47,17],[39,14],[38,14],[37,10],[45,11],[42,13],[41,12],[49,18],[46,20],[50,17],[41,16],[46,19],[38,10],[47,15],[42,17]],
                            fill: "purple"
                        },
                        {   delay:0.5,
                            animation:0.5,
                            opacity:0
                        }
                    ]
                }
            ]
        }
    ]
};
