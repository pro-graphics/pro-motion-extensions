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
        json.setup = json.setup || {};

        var bars = Math.max(1, Math.min(Util.convertToNumber(json.setup.bars), 100));
        var width = Math.max(0, Util.convertToNumber(json.setup.width, DEFAULT_WH));
        var height = Math.max(0, Util.convertToNumber(json.setup.height, DEFAULT_WH));
        var margin = Math.max(0, Util.convertToNumber(json.setup.margin, DEFAULT_M));

        var minDomainValue = 0;
        var maxDomainValue = 0;
        if (typeof json.setup.domain === 'number') {
            maxDomainValue = json.setup.domain;
        }
        else if (json.setup.domain instanceof Array) {
            minDomainValue = json.setup.domain.length > 0 ? Util.convertToNumber(json.setup.domain[0]) : 0;
            maxDomainValue = json.setup.domain.length > 1 ? Util.convertToNumber(json.setup.domain[1]) : 0;
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

        var scriptSet = Serialization.ScriptSetReader.read(itemSet, "Chart", json.scripts, propertyTypes);
        var barsScriptSet = Serialization.ScriptSetReader.read(itemSet, "Bars", json.barScripts || json.barsScripts,
                                                               barPropertyTypes);

        return new Extension(itemSet, bars, width, height, margin, minDomainValue, maxDomainValue,
                             init, scriptSet, barsInit, barsScriptSet);
    }
}