// Drugi zadatak
// Написати програм који исписује дијамант са рупом за унето N: (Нема потребе проверавати улазнеподатке)

let N = 5

let n = 5

for(let i = 1; i <= N; i++) {
    let red = ""
    for(let j = 1; j <= i; j++) { 
            red += "#"
            if(i = 5){
                red += ' '
            }
    }
    console.log(red)
}
