var lines = Pro.Motion.Stories.lines = Pro.Motion.Stories.lines || {};

lines.story = {
    frame:{
        init:{background:"#BADA55", corners:true}
    },
    item:{
        setup:{
            text:[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Est igitur officium eius generis, quod nec in bonis ponatur nec in contrariis.",
                "Quod quidem iam fit etiam in Academia.",
                "",
                "Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam. Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum.",
                "Sin autem eos non probabat, quid attinuit cum iis, quibuscum re concinebat, verbis discrepare?",
                "Nobis aliter videtur, recte secusne, postea; Illud dico, ea, quae dicat, praeclare inter se cohaerere.",
                "An eum discere ea mavis, quae cum plane perdidiceriti nihil sciat?",
                "Sed vos squalidius, illorum vides quam niteat oratio.",
                "",
                "Re mihi non aeque satisfacit, et quidem locis pluribus.",
                "Sed quia studebat laudi et dignitati, multum in virtute processerat.",
                "Sunt enim prima elementa naturae, quibus auctis vÃ­rtutis quasi germen efficitur.",
                "",
                "Sed mehercule pergrata mihi oratio tua.",
                "Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Quodsi ipsam honestatem undique pertectam atque absolutam.",
                "Compensabatur, inquit, cum summis doloribus laetitia."]
        },
        init:{font:6, width:90, anchor:[0, -50], position:[0,-20]},
        scripts:[
            {
                actions:[ {animation:{duration:30, ease:"linear"}, position:{y:-340}} ]
            }
        ],
        lineInit:{position:[0,100], padding:{top:5}},
        lineScripts:[
            {
                actions:[ {animation:{duration:2, stagger:1}, position:false} ]
            }
        ]
    }
};