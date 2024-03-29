var setTokenBars;
var setPermanentBar;
var clearSettings;

on("ready", function () {
    "use strict";

    // Check if the namespaced property exists, creating it if it doesn't
    if (!state.DynamicTokenBars) {
        state.DynamicTokenBars = {
            version: 0.2.1,
            permanentBar: [false, false, false],
            seeAll: false
        };
    }

    setTokenBars = function (active) {
        // Get an array of all graphics on the object layer of the player page
        var tokens = findObjs({
            _pageid: Campaign().get("playerpageid"),
            layer: "objects",
            _type: "graphic"
        });

        // Set token bar visibility
        _.each(tokens, function (obj) {
            for (let i = 0; i < state.DynamicTokenBars.permanentBar.length; i++){
                var index = i+1;
                obj.set("showplayers_bar" + (index), state.DynamicTokenBars.seeAll && (active || state.DynamicTokenBars.permanentBar[i]));
                obj.set("playersedit_bar" + (index), active || state.DynamicTokenBars.permanentBar[i]);
            }
        })
    }

    setPermanentBar = function(index){
        if (index >= 1 && index <= state.DynamicTokenBars.permanentBar.length) {
            state.DynamicTokenBars.permanentBar[index-1] = !state.DynamicTokenBars.permanentBar[index-1];
        }
        setTokenBars(Campaign().get("initiativepage"));
    }

    clearSettings = function(){
        for (let i = 0; i < state.DynamicTokenBars.permanentBar.length; i++){
            state.DynamicTokenBars.permanentBar[i] = false;
        }
        state.DynamicTokenBars.seeAll = false;
        setTokenBars(Campaign().get("initiativepage"));
    }
})

on("change:campaign:initiativepage", function () {
    setTokenBars(Campaign().get("initiativepage"));
})

on("change:campaign:playerpageid", function () {
    setTokenBars(Campaign().get("initiativepage"));
})

on('chat:message', function (msg) {
    var message = msg.content;
    if (playerIsGM(msg.playerid) && message.indexOf('!dtb') === 0) {
        message = message.replace('!dtb', '').trim();
        // Handle permanent bar status
        if (message.indexOf('--pb') === 0) {
            message = message.replace('--pb', '').trim();
            setPermanentBar(message);
            return;
        }
        // Clear all permanent bar status
        if (message.indexOf('--clear') === 0){
            message = message.replace('--clear', '').trim();
            clearSettings();
            return;
        }
        if (message.indexOf('--seeall') === 0){
            state.DynamicTokenBars.seeAll = !state.DynamicTokenBars.seeAll;
            setTokenBars(Campaign().get("initiativepage"));
            return;
        }
    }
});