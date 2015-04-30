/// <reference path="../../defs/pro.motion.d.ts" />

module Pro.Motion.Extensions.Flows.pageStack {

    import Models = Pro.Motion.Models;

    export class Extension extends Models.Flows.PlacementFlow {

        public static defaultStacksJson = {
            current: {
                position: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: 100,
                opacity: 100
            },
            future: {
                position: [140, 0, -200],
                rotation: [0, -10, 5],
                scale: 100,
                opacity: 80,
                offset: {
                    position: [130, 80, -200],
                    rotation: [0, -5, 2],
                    scale: 100,
                    opacity: 50
                }
            },
            past: {
                position: [-140, 0, -200],
                rotation: [0, 10, -5],
                scale: 100,
                opacity: 80,
                offset: {
                    position: [-130, 80, -200],
                    rotation: [0, 5, -2],
                    scale: 100,
                    opacity: 50
                }
            }
        };

        constructor(story: Models.Story,
                    placement: Types.Placement,
                    defaultPageClass: string,
                    pageAspectRatio: number,
                    public stacks: Types.Stacks) {

            super(story, "pageStack", placement, defaultPageClass, pageAspectRatio, "pageStackPage");
        }
    }
}