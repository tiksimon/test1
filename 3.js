// Treci zadatak
// Написати програм који исписује збир бројева дељивих са 3,
//  и производ бројева који нису дељивиса 3,
//  а јесу са 7 (Између K и N, укључујући њих)

let K = 3
let N = 35
let suma = 0
let proizvod = 1 

for(i = K; i <= N; i++) {
    if(i % 3 == 0)
    suma += i
    if(i % 3 !==0 && i % 7 == 0)
    proizvod *= i
}
console.log(suma)
console.log(proizvod)