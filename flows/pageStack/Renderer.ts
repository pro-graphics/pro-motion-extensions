/// <reference path="../../defs/pro.motion.d.ts" />
/// <reference path="Extension.ts" />

module Pro.Motion.Extensions.Flows.pageStack {

    import Models = Pro.Motion.Models;
    import Render = Pro.Motion.Render;

    export class Renderer extends Render.Flows.PlacementFlow {

        constructor(private pageStackFlow: Extension, cameraElem: Render.Camera, flowIndex: number) {
            super(pageStackFlow, cameraElem, flowIndex);
        }

        public initializePages(timeline: TimelineMax) {

            var pageSize = this.cameraElem.size.getContainedSize(this.pageStackFlow.pageAspectRatio);

            this.pageElems.forEach((pageElem: Render.Page, index: number) => {
                var css = {
                    width: pageSize.width,
                    height: pageSize.height,
                    perspective: 10000 //(pageSize.width + pageSize.height) / 2
                };
                timeline.set(this.pageElems[index].div, css, "initialize");
            });
        }

        public generatePageMovement(timeline: TimelineMax, label: string, pageIndex: number) {
            var current = this.pageStackFlow.stacks.current;
            var future = this.pageStackFlow.stacks.future;
            var futureOffset = this.pageStackFlow.stacks.futureOffset;
            var past = this.pageStackFlow.stacks.past;
            var pastOffset = this.pageStackFlow.stacks.pastOffset;

            var pageSize = this.cameraElem.size.getContainedSize(this.pageStackFlow.pageAspectRatio);

            var css = current.renderCss(pageSize);
            this.applyCss(timeline, this.pageElems[pageIndex].div, label, 1, css, Expo.easeOut);

            past = past.duplicate();
            for (var i = pageIndex - 1; i >= 0; i--) {
                css = past.renderCss(pageSize);
                this.applyCss(timeline, this.pageElems[i].div, label, 1, css, Expo.easeOut);
                past.adjust(pastOffset);
            }

            future = future.duplicate();
            for (var i = pageIndex + 1; i < this.pageElems.length; i++) {
                css = future.renderCss(pageSize);
                this.applyCss(timeline, this.pageElems[i].div, label, 1, css, Expo.easeOut);
                future.adjust(futureOffset);
            }
        }

        private applyCss(timeline: TimelineMax, div: HTMLElement, label: string, duration: number, css: any,
                         ease: Ease) {
            if (label === "initialize") {
                timeline.set(div, css, label);
            }
            else {
                css.ease = ease;
                timeline.to(div, duration, css, label);
            }
        }
    }
}