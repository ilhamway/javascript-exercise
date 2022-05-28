/**
 * Konversikan menit pada paramter menjadi satuan jam.
 * Misal: 
 * - 99 menjadi "1:39"
 * - 132 menjadi "2:12"
 * 
 * notes:
 * - type data pada parameter akan selalu INTEGER
 * - type data pada result akan selalu berupa STRING
 */



function konversiMenit(menit) {
  // TODO: answer here
  let result = ""

  let menits = Math.floor(menit/60)
  let detik = menit%60
  if (detik < 10){
    result =  menits + ":0" + detik
  }else{
    result =  menits + ":" + detik
  }

  
  
  return result
}

console.log(konversiMenit(10));
console.log(konversiMenit(65));
console.log(konversiMenit(700));
console.log(konversiMenit(187));

module.exports = konversiMenit;