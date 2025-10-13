
function StopWatch(){
    this.duration = 0;
    let isRunning = false;
    let startTime;

    this.start = function() {
        if (isRunning)
            throw new Error('Stopwatch has already started!');
        isRunning = true;
        startTime = Date.now();
    }

    this.stop = function() {
        if (!isRunning)
            throw new Error('Stopwatch is not started!');
        isRunning = false;
        this.duration += ((Date.now() - startTime) / 1000);
    }

    this.reset = function() {
        this.duration = 0;
        startTime = null;
        isRunning = false;
    }

}

const sw = new StopWatch()