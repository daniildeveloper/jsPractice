var someResource = getData();

setInterval(function() {
    var node = document.getElementById("Node");

    if (node) {
        //do stuff with node and someResource
        node.innerHTML = JSON.stringify(someResource);
    }
}, 1000);