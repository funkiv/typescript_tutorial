//Union allowing weight to consist of both type number and string
function kgToLbs(weight: number | string) {
        //Narrowing
        //Allows compiler to narrow and know what type will be in each if block
        //Check out intellisense
        if(typeof weight === 'number') {
                return weight * 2.2
        } else {
                return parseInt(weight) * 2.2
        }
}

kgToLbs(10)
kgToLbs('10kg')