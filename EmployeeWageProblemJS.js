//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//Defining the constants
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const IS_ABSENT = 0;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NO_OF_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

var totalEmpHours = 0;
var totalEmpWages = 0;
var empWorkingDays = 0;
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//UC1: Checking the attendance of the employee using random fucntion
{
  let empCheck = Math.floor(Math.random() * 3);
  if (empCheck == IS_ABSENT) {
    console.log("Employee is absent");
    return;
  } else {
    console.log("Employee is present");
  }
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//UC2: Calculating the wage of the employee
{
  let empHours = 0;
  let empCheck = Math.floor(Math.random() * 3);
  switch (empCheck) {
    case IS_PART_TIME:
      empHours = PART_TIME_HOURS;
      break;
    case IS_FULL_TIME:
      empHours = FULL_TIME_HOURS;
      break;
    default:
      empHours = 0;
      break;
  }
  let empWage = empHours * WAGE_PER_HOUR;
  console.log("Wage of the employee is: " + empWage);
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//UC3: Refactoring the UC2 code to define a function to get the employee wage hours
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default: 
            return 0;
    }
}
// let empCheck = Math.floor(Math.random() * 3);
// let empHours = getWorkingHours(empCheck);
// let empWage = empHours * WAGE_PER_HOUR;
// console.log("Wage of the employee is: " + empWage);
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//UC4: Using for loop to calculate the total wage for a month
{
  for(days = 0; days <= NO_OF_WORKING_DAYS; days ++){
    let empCheck = Math.floor(Math.random() * 3);
    let empHours = getWorkingHours(empCheck);
    totalEmpHours += empHours;
  }
  totalEmpWages = totalEmpHours * WAGE_PER_HOUR;
  console.log("Total Wage of the employee is: " + totalEmpWages);
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//UC5: Calculating the employee wages until condition of maximum working hours or maximum working days is achieved
{
  do{
    empWorkingDays += 1;
    let empCheck = Math.floor(Math.random() * 3);
    let empHours = getWorkingHours(empCheck);
    totalEmpHours += empHours;
  }while(empWorkingDays < 20 && totalEmpHours <160);
  totalEmpWages = totalEmpHours * WAGE_PER_HOUR;
  console.log('Total woroking hours: '+totalEmpHours+'-------Total Wages: '+totalEmpWages+'-------Total working days: '+empWorkingDays);
}


