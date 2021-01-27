const simpleCalc = {
    sum: function(first, second) {
        let result = first + second;

        return result;
    },
    sub: function(first, second) {
        let result = first - second;

        return result;
    },
    mul: function (first, second) {
        let result = first * second;

        return result;
    },
    div: function (first, second) {
        let result = first / second;

        return result;
    }
}

module.exports = simpleCalc;