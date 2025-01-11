const repeatString = function(word, times) {
    phrase = '';

if (times < 0)
{
    phrase = 'ERROR';
}

    for (let i = 0; i < times; i++)
    {
        phrase += word;
    }

    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
