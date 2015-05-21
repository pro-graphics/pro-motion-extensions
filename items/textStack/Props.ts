/// <reference path="../../defs/pro.motion.d.ts" />

module Pro.Motion.Extensions.Items.textStack {

    export class Props {

        private static _propertyTypes: Pro.Motion.Models.Properties.IPropertyType[] = undefined;

        public static getPropertyTypes(): Pro.Motion.Models.Properties.IPropertyType[] {

            var cache = Pro.Motion.Models.Properties.Cache;

            if (Props._propertyTypes === undefined) {

                var p: Pro.Motion.Models.Properties.IPropertyType[] = [];
                p.push(cache.ANCHOR);
                p.push(cache.ANIMATION);
                p.push(cache.CLASS);
                p.push(cache.FONT);
                p.push(cache.OPACITY);
                p.push(cache.POSITION);
                p.push(cache.ROTATION);
                p.push(cache.SCALE);
                p.push(cache.SKEW);
                p.push(cache.TEXT_COLOR);
                p.push(cache.TEXT_SHADOW);
                p.push(cache.TEXT_STYLE);
                p.push(cache.TRANSFORM_ORIGIN);
                Props._propertyTypes = p;
            }
            return Props._propertyTypes;
        }
    }
}