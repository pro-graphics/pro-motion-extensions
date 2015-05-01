/// <reference path="../../defs/pro.motion.d.ts" />
/// <reference path="Extension.ts" />

module Pro.Motion.Extensions.Items.textStack {

    import Items = Pro.Motion.Render.Items;
    import Util = Pro.Motion.Util;

    export class Renderer extends Items.SequencedItem {

        private divs: HTMLDivElement[] = [];

        constructor(private textStackItem: Extension, itemSetElem: Pro.Motion.Render.IItemSet) {
            super(textStackItem, itemSetElem);
            textStackItem.texts.forEach((text: string) => {
                var textDiv = Util.createChildDivElement(this.div, "pro");
                textDiv.innerHTML = text;
                this.divs.push(textDiv);
            });

            //this.moveToSubStep(0, false);
        }

        /*
         Called when the outer (main) timeline is initially created
         or when it is re-created because the canvas was resized.
         */
        public initializeItem(timeline: TimelineMax, cameraSize: Types.Size) {
            var pageAspectRatio = this.textStackItem.itemSet.flow.pageAspectRatio;
            var pageSize = cameraSize.getContainedSize(pageAspectRatio);
            var story = this.textStackItem.itemSet.flow.story;
            this.initializeProperties(story, [this.element], pageSize, timeline, this.textStackItem.init, false);
        }

        moveToSubStep(position: number, animate: boolean, cameraSize: Types.Size) {
            var pageAspectRatio = this.textStackItem.itemSet.flow.pageAspectRatio;
            var pageSize = cameraSize.getContainedSize(pageAspectRatio);

            var current = this.textStackItem.stacks.current;
            var future = this.textStackItem.stacks.future;
            var futureOffset = this.textStackItem.stacks.futureOffset;
            var past = this.textStackItem.stacks.past;
            var pastOffset = this.textStackItem.stacks.pastOffset;

            var css: any;

            var countOfSteps = this.getCountOfSubSteps();
            if (position < 0 || position > countOfSteps) position = countOfSteps;

            if (position > 0) {
                var css = current.renderCss(pageSize);
                this.applyCss(this.divs[position - 1], css, animate);
            }

            past = past.duplicate();
            for (var i = position - 2; i >= 0; i--) {
                css = past.renderCss(pageSize);
                this.applyCss(this.divs[i], css, animate);
                past.adjust(pastOffset);
            }

            future = future.duplicate();
            for (var i = position; i < this.divs.length; i++) {
                css = future.renderCss(pageSize);
                this.applyCss(this.divs[i], css, animate);
                future.adjust(futureOffset);
            }
        }

        private applyCss(div: HTMLDivElement, css: any, animate: boolean) {
            if (animate) {
                TweenLite.to([div], 1, css);
            }
            else {
                TweenLite.set([div], css);
            }
        }

        getCountOfSubSteps(): number {
            return this.divs.length;
        }
    }
}