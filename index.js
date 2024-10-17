// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
};
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(a1){
    return function(fare){
        return fare * a1;
    };
};

const fareDoubler = createFareMultiplier (2);

const fareTripler = createFareMultiplier (3);

const selectDifferentDrivers = function(drivers, passedFunction){
    return passedFunction(drivers);
};