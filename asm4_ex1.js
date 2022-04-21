// 1. Viết function tìm ra phần tử xuất hiện nhiều nhất trong mảng
// Ex: [1,2,3,1,2,1,1] => return [1]
// Ex: [1,2,3,1,2,1,1, 2, 2] => return [1, 2]

const arrFirst = [1, 2, 3, 1, 2, 1, 1, 2, 2]
const arrSecond = [1, 2, 3, 1, 2, 1, 1]

function getArrOfMostRepeatNum(arr) {
    let result = []
    let maxCount = 1

    for (let i = 0; i < arr.length - 1; i++) {
        let count = 1
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count += 1;
            }
        }
        if (count > maxCount) {
            result = [arr[i]]
            maxCount = count

        } else if (count == maxCount) {
            result.push(arr[i]);
            maxCount = count;
        }
    }
    console.log(result)
}

getArrOfMostRepeatNum(arrFirst)
getArrOfMostRepeatNum(arrSecond)