// Prvi zadatak
// Написати програм који исписује рачун у кафани, али само муштеријама које имају више од 18година
// Додатно, попуст се одобрава у два следећа случаја:
// 1. Број година дељив са 7 (15% попуста)
// 2. Број година дељив са 11 (25% попуста)
// Улазни подаци:
// Количина (број пића)
// Цена једног пића
// Број година муштерије
// Напомена: Проверити улазне податке (Валидност количине, цене и година)

let kolicina = 2
let cenaPoKomadu = 180
let godina = 35

let cenaNa100 = cenaPoKomadu/100
let cena

    if(godina % 7 == 0 && godina > 18) { 
    cena = cenaNa100 * 85 * kolicina
    console.log(`Kupac treba da plati ${cena}`)
    }

    if(godina % 11 == 0 && godina > 18){
        cena = cenaNa100 * 75 * kolicina
        console.log(`Kupac treba da plati ${cena}`)
    } 
    if(godina < 18){
        console.log("Kupac nema dovoljno godina")
    }