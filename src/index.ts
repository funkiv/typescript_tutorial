type Customer = {
        birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
        return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1)
//Optional property access operator
//Gets executed only if customer and birthday is not null or undefined
        console.log(customer?.birthday?.getFullYear())

//Optional element access operator
// if (customers !== null && customers !== undefined) essentially
//CHECKS IF THE ARRAY EXISTS NOT IF THE INDEX IS THERE BOTH RETURN UNDEFINED
let customers: number[] = [1 ,2 , 3]
console.log(customers[10])
console.log(customers?.[10])

//Optional call
let log: any = null

//Only calls log if it is actually referencing a function using ?
log?.('a')