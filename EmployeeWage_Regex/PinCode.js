console.log(" Welcome To PinCode Validation ");

const pincodeRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");

function validatePincode(pincode){
    if(pincodeRegex.test(pincode))
        console.log(pincode + " :  Pin Code valide !!");
    else
        throw pincode + " : PINCODE is Invalid !";
}

try{
    validatePincode("500077");
    validatePincode("500 077");
}
catch(e){
    console.error(e);
} 
