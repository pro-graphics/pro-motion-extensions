/// <reference path="../../defs/pro.motion.d.ts" />

module Pro.Motion.Extensions.Items.textStack {

    import Models = Pro.Motion.Models;
    import Items = Models.Items;
    import Properties = Models.Properties;
    import Scripts = Models.Scripts;

    export class Extension extends Items.SequencedItem {

        public static defaultStacksJson = {
            current: {
                opacity: 100
            },
            future: {
                scale: 60,
                opacity: 0
            },
            past: {
                scale: 140,
                opacity: 0
            }
        };

        constructor(itemSet: Models.IItemSet,
                    sequenceOnStepIndex: number,
                    public texts: string[],
                    public stacks: Types.Stacks,
                    init: Properties.PropertyList,
                    scriptSet: Scripts.ScriptSet) {

            super(itemSet, "textStack", "TextStack", sequenceOnStepIndex, init, scriptSet);

        }
    }
}