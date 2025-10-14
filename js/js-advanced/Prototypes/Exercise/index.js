
function StopWatch(){
    let startTime, isRunning, duration = 0;

    Object.defineProperties(this, {
        duration: {
            get: function() {return duration;},
            set: function(value) {duration = value;}
        },
        isRunning: {
            get: function() {return isRunning;},
            set: function(value) {isRunning = value;}
        },
        startTime: {
            get: function() {return startTime;},
            set: function(value) {startTime = value;}
        }
    });
}

StopWatch.prototype.start = function(){
    if (this.isRunning)
    throw new Error('Stopwatch has already started!');
    this.isRunning = true;
    this.startTime = Date.now();
}

StopWatch.prototype.stop = function(){
    if (!this.isRunning)
        throw new Error('Stopwatch is not started!');
    this.isRunning = false;
    this.duration += ((Date.now() - this.startTime) / 1000);
}

StopWatch.prototype.reset = function() {
    this.duration = 0;
    this.startTime = null;
    this.isRunning = false;
}

const sw = new StopWatch()