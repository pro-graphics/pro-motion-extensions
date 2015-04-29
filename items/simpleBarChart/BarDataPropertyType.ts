/// <reference path="../../defs/pro.motion.d.ts" />
/// <reference path="BarDataVariableType.ts" />

module Pro.Motion.Extensions.Items.simpleBarChart {

    import Properties = Pro.Motion.Models.Properties;
    import Variables = Properties.Variables;

    export class BarDataPropertyType extends Properties.PropertyType {

        constructor() {
            var v: Variables.IVariableType[] = [];
            v.push(new BarDataVariableType("values", ["values"], "dummy", [], "", true));

            super("data", ["data"], v);
        }

        createPropertyFromBoolean(json: boolean): Properties.IProperty {
            return super.createPropertyFromBoolean(false);
        }

        private createProperty(json: any): Properties.IProperty {
            var property = new Properties.Property(this);
            property["values"].setValue(json);
            return property;
        }

        createPropertyFromNumber(json: number): Properties.IProperty {
            return this.createProperty(json);
        }

        createPropertyFromString(json: string): Properties.IProperty {
            return this.createProperty(json);
        }

        createPropertyFromArray(json: any[]): Properties.IProperty {
            return this.createProperty(json);
        }

        renderLabel(property: Properties.IProperty): string {
            return this.renderVariables(property, false, true);
        }
    }
}