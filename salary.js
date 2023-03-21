//Initialize variables
let grossSalary = 0;
let benefits = 0; 
let paye = 0;
let NHIFDeducts = 0;
let NSSFDeducts = 1080;  
let grossSalaryNSSF = 0;
let netSalary = 0;
let taxablePay = 0;

// Get input values from the form and calculate the net salary when the form is submitted
let form = document.querySelector("#form2");

//listens for a form submission event using an event listener attached to the form element. 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    grossSalary = document.querySelector("#salary").value ; 
    benefits = document.querySelector("#benefits").value ; 
    grossSalaryNSSF = grossSalary -benefits - NSSFDeducts;
    console.log(grossSalary);
    console.log(grossSalaryNSSF);
    calculatePAYEMonthly(grossSalaryNSSF);
    calculateNHIFdeducts(grossSalaryNSSF);
    calculateNetSalary();
    let textNetSalary = document.querySelector('#output');
    textNetSalary.textContent = netSalary;
})

// Calculate NHIF deductions and PAYE only if grossSalary has a value
if(grossSalary){ 
    calculateNHIFdeducts(grossSalary);
    calculatePAYEMonthly(grossSalary);
    calculateNetSalary();
}

// Calculate PAYE per month based on grossSalaryNSSF
// The function checks the value of the grossSalaryNSSF and applies different tax rates based on predefined income tax brackets. 
function calculatePAYEMonthly(grossSalaryAfterNSSF){

    if(grossSalaryNSSF <= 24000){
        taxablePay = 24000;
        paye = taxablePay * 0.1;

    }else if(grossSalaryNSSF <= 32333){
        taxablePay = 8333.33;
        paye = taxablePay * 0.25;

    }else if(grossSalaryNSSF > 32333){
        taxablePay = 16586.67;
        paye = taxablePay * 0.30;

    }
     //rounds off the calculated PAYE value to the nearest integer using the Math.floor method and returns the result.
     paye = Math.floor(paye);
     return paye;
}

//The calculateNHIFdeducts function calculates the NHIF deductions based on the grossSalary.
//The function checks the value of the grossSalary and applies different NHIF contribution rates based on predefined income brackets. 
function calculateNHIFdeducts(grossSalary){

    if(grossSalary <= 5999){
        NHIFDeducts = 150;

    }else if(grossSalary <= 7999){
        NHIFDeducts = 300;

    }else if(grossSalary <= 11999){
        NHIFDeducts = 400;

    }else if(grossSalary <= 14999){
        NHIFDeducts = 500

    }else if(grossSalary <= 19999){
        NHIFDeducts = 600

    }else if(grossSalary <= 24999){
        NHIFDeducts = 750

    }else if(grossSalary <= 29999){
        NHIFDeducts = 850

    }else if(grossSalary <= 34999){
        NHIFDeducts = 900

    }else if(grossSalary <= 39999){
        NHIFDeducts = 950

    }else if(grossSalary <= 44999){
        NHIFDeducts = 1000

    }else if(grossSalary <= 49999){
        NHIFDeducts = 1100

    }else if(grossSalary <= 59999){
        NHIFDeducts = 1200

    }else if(grossSalary <= 69999){
        NHIFDeducts = 1300

    }else if(grossSalary <= 79999){
        NHIFDeducts = 1400

    }else if(grossSalary <= 89999){
        NHIFDeducts = 5100

    }else if(grossSalary <= 99999){
        NHIFDeducts = 1600

    }else if(grossSalary >= 100000){
        NHIFDeducts = 1700

    }
    
    //returns the calculated NHIF deductions.
    return NHIFDeducts;
}

//The calculateNetSalary function calculates the net salary by subtracting the PAYE and NHIF deductions from the grossSalaryNSSF.
function calculateNetSalary() {

    netSalary = grossSalaryNSSF - paye - NHIFDeducts ;
    //returns the calculated net salary.
    return netSalary;
}


