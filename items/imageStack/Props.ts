/// <reference path="../../defs/pro.motion.d.ts" />

module Pro.Motion.Extensions.Items.imageStack {

    import Properties = Pro.Motion.Models.Properties;

    export class Props {

        private static _propertyTypes: Properties.IPropertyType[] = undefined;

        public static getPropertyTypes(): Properties.IPropertyType[] {

            if (Props._propertyTypes === undefined) {

                var p: Properties.IPropertyType[] = [];
                p.push(Properties.Cache.ANCHOR);
                p.push(Properties.Cache.ANIMATION);
                p.push(Properties.Cache.OPACITY);
                p.push(Properties.Cache.POSITION);
                p.push(Properties.Cache.ROTATION);
                p.push(Properties.Cache.SCALE);
                p.push(Properties.Cache.SKEW);
                p.push(Properties.Cache.TRANSFORM_ORIGIN);
                Props._propertyTypes = p;
            }
            return Props._propertyTypes;
        }
    }
}