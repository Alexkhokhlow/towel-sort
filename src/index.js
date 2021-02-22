// You should implement your task here.

module.exports = function towelSort(matrix) {
    if ((typeof(matrix) == 'undefined') || matrix.length == 0) {
        return []
    }
    let a = []
    matrix.forEach((element, index, array) => {
        if (index % 2 == 0) {
            a.push(element)
        } else {
            element.reverse()
            a.push(element)

        }
    });

    return a.reduce((acc, val) => acc.concat(val))

}