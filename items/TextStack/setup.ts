/// <reference path="../../defs/pro.motion.d.ts" />
/// <reference path="Extension.ts" />
/// <reference path="Props.ts" />

module Pro.Motion.Extensions.Items.textStack {

    import Models = Pro.Motion.Models;
    import Serialization = Pro.Motion.Serialization;
    import Scripts = Pro.Motion.Models.Scripts;
    import Util = Pro.Motion.Util;

    export function readJson(itemSet: Models.IItemSet, json): Models.Items.Item {
        json.setup = json.setup || {};

        var texts: string[] = [];
        if (json.setup.text instanceof Array) {
            json.setup.text.forEach((text: any) => {
                texts.push(text.toString());
            });
        }
        else texts = (json.setup.text.toString()).split(" ");

        var startOnStep = Math.max(0, Util.convertToNumber(json.setup.startOnStep) - 1);
        var stacks = Types.Stacks.fromJson(json.setup.stacks || Extension.defaultStacksJson);

        var propertyTypes = Props.getPropertyTypes();
        var init = Serialization.PropertyListReader.read(itemSet.story, json.init, propertyTypes);
        var scriptSet = Serialization.ScriptSetReader.read(itemSet, "Text", json.scripts, propertyTypes);

        var item = new Extension(itemSet, startOnStep, texts, stacks, init, scriptSet);
        return item;
    }
}