let budget = 1000

let isPrRunning = true

while (isPrRunning) {
    isPrRunning= confirm("emeliyyata davam edekmi?")
    const inputUser = prompt(`
    //1-pul daxil etmek
    //2-pul cekmek
    //3-balansi gostermek 
    Etmek istediyiniz emeliyatin nomresini secin:`)

    switch (inputUser) {
        case "1":
            const cashIn = +prompt("meblegi daxil edin:")
          
            budget += +cashIn
            alert(budget)
            break;
        case "2":
            const cashMinus = +prompt("cekmek istediyiniz meblegi yazin:")

            budget -= +cashMinus
            alert(budget)
            break;
        case "3":
            alert(budget)
            break;

        default:
           
            break;
    }
}
