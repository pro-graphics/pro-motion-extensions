/// <reference path="../../defs/pro.motion.d.ts" />
/// <reference path="Extension.ts" />
/// <reference path="BarDataPropertyType.ts" />

module Pro.Motion.Extensions.Items.simpleBarChart {

    import Properties = Pro.Motion.Models.Properties;

    export class Props {

        private static _propertyTypes: Pro.Motion.Models.Properties.IPropertyType[] = undefined;
        private static _barPropertyTypes: Pro.Motion.Models.Properties.IPropertyType[] = undefined;

        private static cacheProperties() {

            Props._propertyTypes = [];
            Props._barPropertyTypes = [];

            var p = Props._propertyTypes;
            //p.push(Properties.Cache.ANCHOR);
            p.push(Properties.Cache.ANIMATION);
            //p.push(Properties.Cache.BACKGROUND);
            //p.push(Properties.Cache.BORDER);
            //p.push(Properties.Cache.CORNERS);
            p.push(Properties.Cache.CROP_SVG);
            p.push(Properties.Cache.OPACITY);
            p.push(Properties.Cache.POSITION);
            p.push(Properties.Cache.ROTATION);
            p.push(Properties.Cache.SCALE);
            p.push(Properties.Cache.SKEW);
            //p.push(Properties.Cache.TRANSFORM_ORIGIN);

            var p = Props._barPropertyTypes;
            p.push(Properties.Cache.ANIMATION);
            p.push(new Properties.SvgFillPropertyType("rgba(0,0,0,0.5)"));
            p.push(Properties.Cache.OPACITY);
            p.push(Properties.Cache.SKEW);
            p.push(new BarDataPropertyType());
        }

        public static getPropertyTypes(): Pro.Motion.Models.Properties.IPropertyType[] {
            if (Props._propertyTypes === undefined) Props.cacheProperties();
            return Props._propertyTypes;
        }

        public static getBarPropertyTypes(): Pro.Motion.Models.Properties.IPropertyType[] {
            if (Props._barPropertyTypes === undefined) Props.cacheProperties();
            return Props._barPropertyTypes;
        }
    }
}