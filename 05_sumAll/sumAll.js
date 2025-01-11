const sumAll = function(start, finish) {
    if (typeof start !== 'number' || typeof finish !== 'number') {
        return 'ERROR';
    }

    if (!Number.isInteger(start) || !Number.isInteger(finish)) {
        return 'ERROR';
    }

    if (start < 0 || finish < 0) {
        return 'ERROR';
    }

    if (start > finish) {
        const temp = start;
        start = finish;
        finish = temp;
    }

    let sum = 0;
    for (let i = start; i <= finish; i++)
    {
        sum += i;
    }
    
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
