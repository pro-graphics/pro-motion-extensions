/// <reference path="../../defs/pro.motion.d.ts" />

module Pro.Motion.Extensions.Items.imageStack {

    import Models = Pro.Motion.Models;
    import Scripts = Models.Scripts;

    export class Extension extends Models.Items.SequencedItem {

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

        constructor(itemSet: Models.IItemSet, sequenceOnStepIndex: number, public srcs: string[], public width: number,
                    public height: number, public stacks: Types.Stacks, init: Models.Properties.PropertyList,
                    scriptSet: Scripts.ScriptSet) {

            super(itemSet, "imageStack", "ImageStack", sequenceOnStepIndex, init, scriptSet);

        }
    }
}