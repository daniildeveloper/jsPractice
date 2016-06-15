var theThing = null;

var replaceString = function() {
    var originalThing = theThing;

    var unused = function() {
        if (originalThing) {
            console.log("hi");
        }
    };

    theThing = {
        longStr: new Array(1000000).join("*"),
        someMethod: function() {
            console.log("Some Message");
        }
    };
};

setInterval(replaceString, 1000);