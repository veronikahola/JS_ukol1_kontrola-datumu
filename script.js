


// složitější verze


// const jeValidniDatum = (datum) => {

//     const rok = Number(datum.slice(6));
//     const mesic = Number(datum.slice(3,5));
//     const den = Number(datum.slice(0,2));

//     const jePrestupnyRok = (rok) => {
//         if (rok % 4 === 0 && (rok % 100 !== 0 || rok % 400 === 0)) {
//             return true
//         }
//         return false;
//     }



//     if (!(rok >= 1900 && rok <= 2100)) {
//         console.log('špatně zadaný rok');
//         return false;
//     }



//     if (!(mesic >= 1 && mesic <= 12)) {
//         console.log('špatně zadaný mesic')
//         return false;
//     }



//     if (mesic === 1 || mesic === 3 || mesic === 5 || mesic === 7 || mesic === 8 || mesic === 10 || mesic === 12) {

//         if (!(den >= 1 && den <= 31)) {
//             console.log('špatně zadaný den. Zadaný měsíc má pouze 31 dní!')
//             return false;
//         }
    
//     } else if (mesic === 4 || mesic === 6 || mesic === 9 || mesic === 11) {

//         if (!(den >= 1 && den <= 30)) {
//             console.log('špatně zadaný den. Zadaný měsíc má pouze 30 dní!')
//             return false;
//         }
//     } else if (mesic === 2) {

//         if (jePrestupnyRok(rok) && !(den >= 1 && den <= 29)) {
//             console.log('špatně zadaný den. Únor v přestupném roce má pouze 29 dní!')
//             return false;

//         } else if (!jePrestupnyRok(rok) && !(den >= 1 && den <= 28)) {
//             console.log('Špatně zadaný den. Nejedná se o přestupný rok, únor má jen 28 dní.')
//             return false;
//         }
//     }


//     return true;
// }

// console.log(jeValidniDatum('29.02.2024'));








// zjednodušená verze s bonusem



const jeValidniDatum = (datum) => {

    const rok = Number(datum.slice(6));
    const mesic = Number(datum.slice(3,5));
    const den = Number(datum.slice(0,2));

    const jePrestupnyRok = (rok) => {
        if (rok % 4 === 0 && (rok % 100 !== 0 || rok % 400 === 0)) {
            return true;
        }
        return false;
    }

    const pocetDniMesice = (mesic, rok) => {
        if (mesic === 2) {
            return jePrestupnyRok(rok) ? 29 : 28;
          } else if (mesic === 4 || mesic === 6 || mesic === 9 || mesic === 11) {
            return 30;
          } else {
            return 31;
          }
    }


    if (!(rok >= 1900 && rok <= 2100)) {
        console.log('špatně zadaný rok');
        return false;
    }

    if (!(mesic >= 1 && mesic <= 12)) {
        console.log('špatně zadaný mesic')
        return false;
    }

    if (!(den >= 1 && den <= pocetDniMesice(mesic, rok))) {
        console.log(`špatně zadaný den. Zadaný měsíc má pouze ${pocetDniMesice(mesic, rok)} dní!`)
        return false;
    }

    return true;
}

console.log(jeValidniDatum('29.02.2023'));