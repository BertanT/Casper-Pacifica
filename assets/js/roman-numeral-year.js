// JS code used to display the copyright year in roman numerals

// Javascript method to convert integers to a roman numerals
// This method is based on the following article by Anatolii Kurochkin: 
// https://javascript.plainenglish.io/leetcode-12-integer-to-roman-javascript-21459e45a0ee
const intToRomanNumeral = (num) => {
    const map = {
      M:  1000,
      CM: 900,
      D:  500,
      CD: 400,
      C:  100,
      XC: 90,
      L:  50,
      XL: 40,
      X:  10,
      IX: 9,
      V:  5,
      IV: 4,
      I:  1,
    };  
    let result = ' ';
    
    for (key in map) {
        const repeatCounter = Math.floor(num / map[key]);
    
        if (repeatCounter !== 0) {
          result += key.repeat(repeatCounter);
        }
        
        num %= map[key];
        
        if (num === 0) return result;
    }
    
    return result;
  };

  // Method to convert the current year and add it to the copyright text
  const romanNumeralCopyrightYear = () => {
    const currentYear = new Date().getFullYear();
    const romanNumeralYear = intToRomanNumeral(currentYear);
    document.getElementById('copyright-text').innerHTML += romanNumeralYear;
  }

  // Run method when the page loads
  window.onload = romanNumeralCopyrightYear();