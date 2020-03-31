/*
*
*
*       Complete the handler logic below
*       
*       
*/

const numRegex = /[\d./]+/;
const unitRegex = /[^\d]+$/;

function ConvertHandler() {

  this.getNum = function(input) {
    if (!input.match(numRegex)) return 1;
    let stripped = input.replace(unitRegex, ''); // strip units

    if (!stripped.match(/\//)) {
      return +stripped ? (+stripped).toFixed(5).toString() : 'Invalid number';
    } else {
      // handle fractions
      const numbers = stripped.split('/');
      if (numbers.length === 2) {
        return (numbers[0] / numbers[1]).toFixed(5).toString();
      } else {
        return 'Invalid fraction';
      }
    }
  };
  
  this.getUnit = function(input) {
    const validUnits = ['gal','l','mi','km','lbs','kg'];
    const inputUnit = input.match(unitRegex)[0].trim().toLowerCase();
    for (let elem of validUnits) {
      if (inputUnit === elem) return inputUnit;
    };
    return 'Invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
