const arr = []

for (let i = 0 ; i < 100; i++) {
    const randomNumb = Math.floor((Math.random() * 50 ) +1);
    arr.push(randomNumb)
}

console.log(arr)

const arrOdd = []
const arrEven = []

for (let i = 0 ; i < arr.length ; i++) {
    if ( (i+2) % 2 == 0)  { 
        arrOdd.push(arr[i])
   }
    else {
        arrEven.push(arr[i])
 }
}

console.log(arrOdd,arrEven)

minOdd = Math.min(...arrOdd)
minEven = Math.min(...arrEven)
maxOdd =  Math.max(...arrOdd)
maxEven = Math.max(...arrEven)

let sumOdd = 0
let sumEven = 0

for ( i = 0 ; i < arrOdd.length ; i++) {
    sumOdd += arrOdd[i]
}
for ( i = 0 ; i < arrEven.length ; i++) {
    sumEven += arrEven[i]
}

let rataOdd = sumOdd / arrOdd.length
let rataEven = sumEven / arrEven.length

console.log('Nilai minimum array Odd adalah          : ' +minOdd)
console.log('Nilai minimum array Even adalah         : ' +minEven)
console.log('Nilai maksimum array Odd adalah         : ' +maxOdd)
console.log('Nilai maksimum array Even adalah        : ' +maxEven)
console.log('Nilai total array Odd adalah            : ' +sumOdd)
console.log('Nilai total array Even adalah           : ' +sumEven)
console.log('Nilai rata-rata array Odd adalah        : ' +rataOdd)
console.log('Nilai rata-rata array Even adalah       : ' +rataEven)
if (minOdd < minEven) {
    bandingmin = minEven - minOdd;
    console.log('Nilai minimum array Odd lebih kecil dari nilai minimum array Even dengan nilai = ' +bandingmin)
}
else if (minOdd > minEven) {
    bandingmin = minOdd - minEven;
    console.log('Nilai minimum array Odd lebih besar dari nilai minimum array Even dengan nilai = ' +bandingmin)
}
else {
    bandingmin = 0;
    console.log('Nilai minimum array Odd sama besar dari nilai minimum array Even dengan nilai = ' +bandingmin)
}
if (maxOdd < maxEven) {
    bandingmax = maxEven - maxOdd;
    console.log('Nilai maksimum array Odd lebih kecil dari nilai maksimum array Even dengan nilai = ' +bandingmax)
}
else if (maxOdd > maxEven) {
    bandingmax = maxOdd - maxEven;
    console.log('Nilai maksimum array Odd lebih besar dari nilai maksimum array Even dengan nilai = ' +bandingmax)
}
else {
    bandingmax = 0;
    console.log('Nilai maksimum array Odd sama besar dari nilai maksimum array Even dengan nilai = ' +bandingmax)
}
if (sumOdd < sumEven) {
    bandingsum = sumEven - sumOdd;
    console.log('Nilai maksimum array Odd lebih kecil dari nilai maksimum array Even dengan nilai = ' +bandingsum)
}
else if (sumOdd > sumEven) {
    bandingsum = sumOdd - sumEven;
    console.log('Nilai total array Odd lebih besar dari nilai total array Even dengan nilai = ' +bandingsum)
}
else {
    bandingsum = 0;
    console.log('Nilai total array Odd sama besar dari nilai total array Even dengan nilai = ' +bandingsum)
}