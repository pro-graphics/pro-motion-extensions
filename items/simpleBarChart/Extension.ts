/// <reference path="../../defs/pro.motion.d.ts" />

module Pro.Motion.Extensions.Items.simpleBarChart {

    import Models = Pro.Motion.Models;
    import Properties = Models.Properties;
    import Scripts = Models.Scripts;

    export class Extension extends Models.Items.Item {

        constructor(itemSet: Pro.Motion.Models.IItemSet,
                    public bars: number,
                    public width: number,
                    public height: number,
                    public margin: number,
                    public minDomainValue: number,
                    public maxDomainValue: number,
                    init: Properties.PropertyList,
                    scriptSet: Scripts.ScriptSet,
                    public barsInit: Properties.PropertyList,
                    public barsScriptSet: Scripts.ScriptSet) {

            super(itemSet, "simpleBarChartItem", "SimpleBarChartItem", [init], [scriptSet]);

        }
    }
}