/// <reference path="../../defs/pro.motion.d.ts" />

module Pro.Motion.Extensions.Items.simpleBarChart {

    import Variables = Pro.Motion.Models.Properties.Variables;

    export class BarDataVariableType extends Variables.VariableType<number[][]> {

        constructor(label: string, jsonNames: string[], cssName: string,
                    defaultValue: number[][], text: string, alwaysInitializeCss: boolean) {

            super(label, jsonNames, cssName, text, defaultValue, alwaysInitializeCss);
        }

        public scrubValue(value: any): number[][] {
            var d: number[][] = [];

            if (typeof value === 'number') {
                return [[undefined, value]];
            }
            else if (typeof value === 'string') {
                var parts: string[] = value.split(",");
                parts.forEach((part: string) => {
                    d.push([0, Util.convertToNumber(part.trim())]);
                });
            }
            else if (value instanceof Array) {
                value.forEach((datum: any) => {
                    if (datum instanceof Array) {
                        d.push([
                                   datum.length > 0 ? Util.convertToNumber(datum[0]) : 0,
                                   datum.length > 1 ? Util.convertToNumber(datum[1]) : 0
                               ]);
                    }
                    else {
                        d.push([0, Util.convertToNumber(datum)]);
                    }
                });
            }
            return d;
        }

        writeCssBucket(story: Pro.Motion.Models.Story, model: Extension, containerSize: Types.Size, bucket: any, value: number[][]) {
            var proCache = bucket.element["proCache"] || {};
            bucket.element["proCache"] = proCache;
            var index = bucket.elementIndex;
            var proData = proCache.data = [0, 0];
            if (value.length > index) {
                var datum = value[index];
                if (datum.length > 0) proData[0] = datum[0];
                if (datum.length > 1) proData[1] = datum[1];
            }
        }
    }
}