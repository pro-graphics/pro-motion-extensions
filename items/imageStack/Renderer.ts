/// <reference path="../../defs/pro.motion.d.ts" />
/// <reference path="Extension.ts" />

module Pro.Motion.Extensions.Items.imageStack {

    import Render = Pro.Motion.Render;
    import Util = Pro.Motion.Util;

    export class Renderer extends Render.Items.SequencedItem {

        private imgs: HTMLImageElement[] = [];

        constructor(private imageStackItem: Extension, itemSetElem: Render.IItemSet) {
            super(imageStackItem, itemSetElem);
            imageStackItem.srcs.forEach((src: string) => {
                var img = Util.createChildImageElement(this.div,
                                                       "pro",
                                                       imageStackItem.itemSet.flow.story.canvas.adjustImageUrl(src),
                                                       imageStackItem.width,
                                                       imageStackItem.height);
                this.imgs.push(img);
            });

            //this.moveToSubStep(0, false);
        }

        /*
         Called when the outer (main) timeline is initially created
         or when it is re-created because the canvas was resized.
         */
        public initializeItem(timeline: TimelineMax, cameraSize: Types.Size) {
            var pageAspectRatio = this.imageStackItem.itemSet.flow.pageAspectRatio;
            var pageSize = cameraSize.getContainedSize(pageAspectRatio);
            var story = this.imageStackItem.itemSet.flow.story;
            this.initializeProperties(story, [this.element], pageSize, timeline, this.imageStackItem.init, false);
            TweenLite.set(this.element, {width: "100%", height: "100%"});
        }

        moveToSubStep(position: number, animate: boolean, cameraSize: Types.Size) {
            var pageAspectRatio = this.imageStackItem.itemSet.flow.pageAspectRatio;
            var pageSize = cameraSize.getContainedSize(pageAspectRatio);

            var current = this.imageStackItem.stacks.current;
            var future = this.imageStackItem.stacks.future;
            var futureOffset = this.imageStackItem.stacks.futureOffset;
            var past = this.imageStackItem.stacks.past;
            var pastOffset = this.imageStackItem.stacks.pastOffset;

            var css: any;

            var countOfSteps = this.getCountOfSubSteps();
            if (position < 0 || position > countOfSteps) position = countOfSteps;

            if (position > 0) {
                var css = current.renderCss(pageSize);
                this.applyCss(this.imgs[position - 1], css, animate);
            }

            past = past.duplicate();
            for (var i = position - 2; i >= 0; i--) {
                css = past.renderCss(pageSize);
                this.applyCss(this.imgs[i], css, animate);
                past.adjust(pastOffset);
            }

            future = future.duplicate();
            for (var i = position; i < this.imgs.length; i++) {
                css = future.renderCss(pageSize);
                this.applyCss(this.imgs[i], css, animate);
                future.adjust(futureOffset);
            }
        }

        private applyCss(img: HTMLImageElement, css: any, animate: boolean) {
            if (animate) {
                TweenLite.to([img], 1, css);
            }
            else {
                TweenLite.set([img], css);
            }
        }

        getCountOfSubSteps(): number {
            return this.imgs.length;
        }
    }
}