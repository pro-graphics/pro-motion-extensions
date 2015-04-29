/// <reference path="../../defs/pro.motion.d.ts" />
/// <reference path="Extension.ts" />

module Pro.Motion.Extensions.Items.simpleBarChart {

    import Render = Pro.Motion.Render;
    import Util = Pro.Motion.Util;

    export class Renderer extends Render.Items.Item {

        private g: SVGGElement;
        private barDivs: SVGRectElement[] = [];

        private width = 0;      //Width in pixels of the entire chart
        private height = 0;     //Height in pixels of the entire chart
        private margin = 0;     //Width in pixels;
        private barWidth = 0;   //Width of each bar in pixels

        private maxDomain = 0;
        private minDomain = 0;
        private domain = 0;      //The range of expected data values between min and max
        private domainBase = 0;  //The baseline for bars (values above this go up, below go down)
        private rangeBase = 0;   //The baseline in pixels from the top

        constructor(private simpleBarChartItem: Extension, itemSetElem: Render.IItemSet) {
            super(simpleBarChartItem, itemSetElem, Util.createChildSvgElement(itemSetElem.div, "svg", {"class": "pro"}));
            this.g = <SVGGElement>Util.createChildSvgElement(this.element, "g");
            for (var c = 0; c < simpleBarChartItem.bars; c++) {
                this.barDivs.push(<SVGRectElement>Util.createChildSvgElement(this.g, "rect"));
            }

            //It is expected that maxDomain >= minDomain (Serialization reader swaps the values if needed)
            this.maxDomain = simpleBarChartItem.maxDomainValue;
            this.minDomain = simpleBarChartItem.minDomainValue;

            this.domain = Math.abs(this.maxDomain - this.minDomain);
            this.domainBase = this.maxDomain < 0 ? this.maxDomain : (this.minDomain > 0 ? this.minDomain : 0);
        }

        public initializeItem(timeline: TimelineMax, cameraSize: Types.Size) {
            var item = this.simpleBarChartItem;
            var story = item.itemSet.flow.story;
            var pageAspectRatio = item.itemSet.flow.pageAspectRatio;
            var pageSize = cameraSize.getContainedSize(pageAspectRatio);

            this.width = (item.width / 100) * pageSize.width;
            this.height = (item.height / 100) * pageSize.height;
            this.margin = this.simpleBarChartItem.margin / 100 * this.width;

            if (this.margin * (this.simpleBarChartItem.bars + 1) > this.width) {
                this.margin = this.width / (this.simpleBarChartItem.bars + 1);
            }
            else {
                this.barWidth = (this.width - this.margin * this.simpleBarChartItem.bars) / this.simpleBarChartItem.bars;
            }

            this.rangeBase = Math.abs(this.simpleBarChartItem.maxDomainValue - this.domainBase) / this.domain * this.height;

            var forceProps: any = {width: this.width, height: this.height};

            this.initializeProperties(story, [this.element], pageSize, timeline, item.init, true, forceProps);

            forceProps = {};

            this.initializeProperties(story, this.barDivs, pageSize, timeline, item.barsInit, false, forceProps,
                                      this.afterBarCssProperties.bind(this));
        }

        public generateStepActions(itemSet: Render.IItemSet,
                                   pageSize: Types.Size,
                                   timeline: TimelineMax,
                                   stepIndex: number,
                                   label: string) {
            var item = this.simpleBarChartItem;
            this.generateActionsForStep(itemSet, [this.element], pageSize, timeline, stepIndex, label, item.scriptSet);
            this.generateActionsForStep(itemSet, this.barDivs, pageSize, timeline, stepIndex, label, item.barsScriptSet,
                                        this.afterBarCssProperties.bind(this));
        }

        //
        // This method does the actual bar layout after the BarDataProperty and BarMarginProperty recorded their values
        //
        private afterBarCssProperties(properties: Models.Properties.IProperty[], buckets: any[], containerSize: Types.Size) {

            if (this.domain <= 0) return;

            buckets.forEach((bucket: any, index: number) => {

                var datumFrom = Util.convertToNumber(bucket.element.proCache.data[0], this.domainBase);
                var datumTo = Util.convertToNumber(bucket.element.proCache.data[1], this.domainBase);

                console.log(bucket.element.proCache, datumFrom, datumTo);

                var y = (this.maxDomain - Math.max(datumFrom, datumTo)) / this.domain * this.height;
                var h = ((this.maxDomain - Math.min(datumFrom, datumTo)) / this.domain * this.height) - y;
                var radius = this.barWidth / 8;

                bucket.attr = {
                    x: this.margin / 2 + index * (this.margin + this.barWidth),
                    width: this.barWidth,
                    y: y,
                    height: h,
                    rx: radius,
                    ry: radius
                };
            });
        }
    }
}