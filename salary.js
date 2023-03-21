//Initialize
let paye = 0;
let NHIFDeductions = 0;
let NSSFDeductions = 1080;
let grossSalary = 0;
let benefits = 0;   
let grossSalaryAfterNSSF = 0;
let netSalary = 0;
let taxablePay = 0;

// Get input values from the form and calculate the net salary when the form is submitted
let form = document.querySelector("#form2");

//listens for a form submission event using an event listener attached to the form element. 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    grossSalary = document.querySelector("#basicSalary").value ; 
    benefits = document.querySelector("#benefits").value ; 
    grossSalaryAfterNSSF = grossSalary -benefits - NSSFDeductions;
    console.log(grossSalary);
    console.log(grossSalaryAfterNSSF);
    calculatePAYEperMonth(grossSalaryAfterNSSF);
    calculateNHIFdeductions(grossSalaryAfterNSSF);
    calculateNetSalary();
    let textNetSalary = document.querySelector('#output');
    textNetSalary.textContent = netSalary;
})

// Calculate NHIF deductions and PAYE only if grossSalary has a value
if(grossSalary){ 

    calculateNHIFdeductions(grossSalary);
    calculatePAYEperMonth(grossSalary);

   
    calculateNetSalary();

}

// Calculate PAYE per month based on grossSalaryAfterNSSF
// The function checks the value of the grossSalaryAfterNSSF and applies different tax rates based on predefined income tax brackets. 
function calculatePAYEperMonth(grossSalaryAfterNSSF){

    if(grossSalaryAfterNSSF <= 24000){
        taxablePay = 24000;
        paye = taxablePay * 0.1;

    }else if(grossSalaryAfterNSSF <= 32333){
        taxablePay = 8333.33;
        paye = taxablePay * 0.25;

    }else if(grossSalaryAfterNSSF > 32333){
        taxablePay = 16586.67;
        paye = taxablePay * 0.30;

    }
     //rounds off the calculated PAYE value to the nearest integer using the Math.floor method and returns the result.
     paye = Math.floor(paye);
     return paye;
}

//The calculateNHIFdeductions function calculates the NHIF deductions based on the grossSalary.
//The function checks the value of the grossSalary and applies different NHIF contribution rates based on predefined income brackets. 
function calculateNHIFdeductions(grossSalary){

    if(grossSalary <= 5999){
        NHIFDeductions = 150;

    }else if(grossSalary <= 7999){
        NHIFDeductions = 300;

    }else if(grossSalary <= 11999){
        NHIFDeductions = 400;

    }else if(grossSalary <= 14999){
        NHIFDeductions = 500

    }else if(grossSalary <= 19999){
        NHIFDeductions = 600

    }else if(grossSalary <= 24999){
        NHIFDeductions = 750

    }else if(grossSalary <= 29999){
        NHIFDeductions = 850

    }else if(grossSalary <= 34999){
        NHIFDeductions = 900

    }else if(grossSalary <= 39999){
        NHIFDeductions = 950

    }else if(grossSalary <= 44999){
        NHIFDeductions = 1000

    }else if(grossSalary <= 49999){
        NHIFDeductions = 1100

    }else if(grossSalary <= 59999){
        NHIFDeductions = 1200

    }else if(grossSalary <= 69999){
        NHIFDeductions = 1300

    }else if(grossSalary <= 79999){
        NHIFDeductions = 1400

    }else if(grossSalary <= 89999){
        NHIFDeductions = 5100

    }else if(grossSalary <= 99999){
        NHIFDeductions = 1600

    }else if(grossSalary >= 100000){
        NHIFDeductions = 1700

    }
    
    //returns the calculated NHIF deductions.
    return NHIFDeductions;
}

//The calculateNetSalary function calculates the net salary by subtracting the PAYE and NHIF deductions from the grossSalaryAfterNSSF.
function calculateNetSalary() {

    netSalary = grossSalaryAfterNSSF - paye - NHIFDeductions ;
    //returns the calculated net salary.
    return netSalary;
}


