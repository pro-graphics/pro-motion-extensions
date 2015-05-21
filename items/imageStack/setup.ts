/// <reference path="../../defs/pro.motion.d.ts" />
/// <reference path="Extension.ts" />
/// <reference path="Props.ts" />

module Pro.Motion.Extensions.Items.imageStack {

    import Models = Pro.Motion.Models;
    import Serialization = Pro.Motion.Serialization;
    import Scripts = Pro.Motion.Models.Scripts;
    import Util = Pro.Motion.Util;

    export function readJson(itemSet: Models.IItemSet, json): Models.Items.Item {
        json.setup = json.setup || {};

        var srcs: string[] = [];
        if (json.setup.srcs instanceof Array) {
            json.setup.srcs.forEach((src: any) => {
                src = (src || "").toString().trim();
                srcs.push(src);
            });
        }

        var width = isNaN(json.setup.width) ? undefined : Number(json.setup.width);
        var height = isNaN(json.setup.height) ? undefined : Number(json.setup.height);

        if (width === undefined && height === undefined) height = 100;

        var startOnStep = Math.max(0, Util.convertToNumber(json.setup.startOnStep) - 1);
        var stacks = Types.Stacks.fromJson(json.setup.stacks || Extension.defaultStacksJson);

        var propertyTypes = Props.getPropertyTypes();
        var init = Serialization.PropertyListReader.read(itemSet.story, json.init, propertyTypes);
        var scriptSet = Serialization.ScriptSetReader.readJson(itemSet, "Images", json, [""], propertyTypes);

        var item = new Extension(itemSet, startOnStep, srcs, width, height, stacks, init, scriptSet);
        return item;
    }
}