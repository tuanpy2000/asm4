// 2. Viết function tìm ra phần tử xuất hiện không phải nhiều nhất cũng không phải ít nhất trong mảng
// Ex: [1,2,3,1,2,1,1] => return [2]
// Ex: [1,2,3,1,2, 7, 7, 1,1, 4,5] => return [2, 7]
arrOne = [1, 2, 3, 1, 2, 7, 7, 1, 1, 4, 5];
arrTwo = [1, 2, 3, 1, 2, 1, 1]

function getTheEleRepeatNotMostAndNotLeastInArray(arr) {
    let arrEle = []
    let arrNumRepeat = []
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let count = 1
        while (!arrEle.includes(arr[i])) {
            arrEle.push(arr[i])
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    count++
                }
            }
            arrNumRepeat.push(count)
        }
    }
    let maxIndex = 0
    let minIndex = 0
    let max = arrNumRepeat[0]
    let min = arrNumRepeat[0]
    for (let i = 0; i < arrNumRepeat.length; i++) {
        if (arrNumRepeat[i] > max) {
            maxIndex = i
            max = arrNumRepeat[i]
        }
        if (arrNumRepeat[i] < min) {
            minIndex = i
            min = arrNumRepeat[i]
        }
    }
    for (let i = 0; i < arrNumRepeat.length; i++) {
        if (arrNumRepeat[i] !== min && arrNumRepeat[i] !== max) {
            result.push(arrEle[i])
        }
    }
    console.log(result)
}
getTheEleRepeatNotMostAndNotLeastInArray(arrOne)
getTheEleRepeatNotMostAndNotLeastInArray(arrTwo)