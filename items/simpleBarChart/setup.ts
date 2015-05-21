/// <reference path="../../defs/pro.motion.d.ts" />
/// <reference path="Extension.ts" />
/// <reference path="Props.ts" />

module Pro.Motion.Extensions.Items.simpleBarChart {

    var DEFAULT_WH = 50; //% of container
    var DEFAULT_M = 1; //% of chart width

    import Models = Pro.Motion.Models;
    import Serialization = Pro.Motion.Serialization;
    import Scripts = Models.Scripts;
    import Util = Pro.Motion.Util;

    export function readJson(itemSet: Models.IItemSet, json): Models.Items.Item {
        var bars = Math.max(1, Math.min(Util.convertToNumber(Util.getSetup(json, "bars")), 100));
        var width = Math.max(0, Util.convertToNumber(Util.getSetup(json, "width"), DEFAULT_WH));
        var height = Math.max(0, Util.convertToNumber(Util.getSetup(json, "height"), DEFAULT_WH));
        var margin = Math.max(0, Util.convertToNumber(Util.getSetup(json, "margin"), DEFAULT_M));

        var minDomainValue = 0;
        var maxDomainValue = 0;
        var domain = Util.getSetup(json, "domain");

        if (typeof domain === 'number') {
            maxDomainValue = domain;
        }
        else if (domain instanceof Array) {
            minDomainValue = domain.length > 0 ? Util.convertToNumber(domain[0]) : 0;
            maxDomainValue = domain.length > 1 ? Util.convertToNumber(domain[1]) : 0;
        }

        if (maxDomainValue < minDomainValue) {
            var swap = maxDomainValue;
            maxDomainValue = minDomainValue;
            minDomainValue = swap;
        }

        var propertyTypes = Props.getPropertyTypes();
        var barPropertyTypes = Props.getBarPropertyTypes();

        var init = Serialization.PropertyListReader.read(itemSet.story, json.init, propertyTypes);
        var barsInit = Serialization.PropertyListReader.read(itemSet.story, json.barInit || json.barsInit, barPropertyTypes);

        var scriptSet = Serialization.ScriptSetReader.readJson(itemSet, "Chart", json, [""], propertyTypes);
        var barsScriptSet = Serialization.ScriptSetReader.readJson(itemSet, "Bars", json, ["bar", "bars"], barPropertyTypes);

        return new Extension(itemSet, bars, width, height, margin, minDomainValue, maxDomainValue,
                             init, scriptSet, barsInit, barsScriptSet);
    }
}