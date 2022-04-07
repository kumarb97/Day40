
   
// const prompt = require("prompt-sync")();
let mail = prompt("Enter mail id to validate : ");
const mailRegex= RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");

function validateMail(mail){
    if(mailRegex.test(mail)){
        console.log("Mail is is valid");
    }
    else{
        throw mail+" Mail is Invalid";
    }
}
try{
    validateMail(mail);
}
catch(e){
    console.error(e);
}
let email = "abc@bridgelabz.co.in";
validateMail(email);

email = "abc@gmail.com.com";
validateMail(email);

email = "abc@yahoo.com";
validateMail(email);

email = "abc@1.com";
validateMail(email);

email = "abc-100@yahoo.com";
validateMail(email);

email = "abc.100@yahoo.com";
validateMail(email);

email = "abc111@abc.com";
validateMail(email);

email = "abc-100@abc.net";
validateMail(email);

email = "abc.100@abc.com.au";
validateMail(email);

email = "abc+100@gmail.com";
validateMail(email);

console.log("---------- Invalid Emails ----------");
try{
email = ".abc@abc.com";
validateMail(email);
}
catch(e){
    console.error(e);
}
try{
email = "abc";
validateMail(email);
}
catch(e){
    console.error(e);
}
try{
email = "abc@.com.my";
validateMail(email);
}
catch(e){
    console.error(e);
}
try{
email = "abc@abc@gmail.com";
validateMail(email);
}
catch(e){
    console.error(e);
}
try{
email = "abc()*@gmail.com";
validateMail(email);
}
catch(e){
    console.error(e);
}
try{
email = "abc..2002@gmail.com";
validateMail(email);
}
catch(e){
    console.error(e);
}
try{
email = "abc.@gmail.com";
validateMail(email);
}
catch(e){
    console.error(e);
}
try{
email = "abc123@.com";
validateMail(email);
}
catch(e){
    console.error(e);
}
try{
email = "abc123@.com.com";
validateMail(email);
}
catch(e){
    console.error(e);
}
try{
email = "abc123@gmail.a";
validateMail(email);
}
catch(e){
    console.error(e);
}
try{
email = "abc@%*.com";
validateMail(email);
}
catch(e){
    console.error(e);
}
try{
email = "abc@gmail.com.1a";
validateMail(email);
}
catch(e){
    console.error(e);
}
try{
email = "abc@gmail.com.aa.au";
validateMail(email);
}
catch(e){
    console.error(e);
}