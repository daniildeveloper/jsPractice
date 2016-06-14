var cluster = require("cluster");
var CPUs = require("os").cpus();

if (cluster.isMaster) {
    //launch workers
    for (var i = 0; i < CPUs.length; i++) {
        cluster.fork();
    }
} else {
    console.log("pid " + cluster.worker.process.pid + " is started");
}