//Always annotate the parameters and return types, that way errors can be known

//Can define default values for parameters
//This is a slick way of making parameters optional and handling undefined values
function calculateTax(income: number, taxYear = 2022) {
        let x
        if ( taxYear < 2022)
                return income * 1.2
        //undefined
        return income
}

//You can always overide default parameters by passing them in.
calculateTax(10_000, 2024)