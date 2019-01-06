"use strict";
module.exports = function() {
  /*
  Gets a random number between 0 and 1000000 (inclusive).  
Gets that same random number every time the functon is invoked  
 */
  /*
  let number;
  const num = () => {
    if (number === undefined) {
      number = Math.random() * 1000000 + 1;
    }
    return number;
  };
  return num;
  */

  const n = Math.random() * 1000000 + 1;
  return () => n;
};
