module.exports = function toReadable (number) {
      function num_letters(k, d) {  
        let i = '';
        if (k == '' || k == '0') return ' zero'; 
        k = k.split(/(?=(?:\d{3})+$)/);  
        if (k[0].length == 1) k[0] = '00'+k[0];
        if (k[0].length == 2) k[0] = '0'+k[0];
        for (let j = (k.length - 1); j >= 0; j--) { 
          if (k[j] != '000') {
            i = (((d && j == (k.length - 1)) || j == (k.length - 2)) && (k[j][2] == '1' || k[j][2] == '2') ? t(k[j],1) : t(k[j]));
          }
        }
        function t(k, d) {  
          let e = [
     ['',' one',' two',' three',' four',' five',' six',' seven',' eight',' nine'],
     [' ten',' eleven',' twelve',' thirteen',' fourteen',' fifteen',' sixteen',' seventeen',' eighteen',' nineteen'],
     ['','',' twenty',' thirty',' forty',' fifty',' sixty',' seventy',' eighty',' ninety'],
     ['',' one hundred',' two hundred',' three hundred',' four hundred',' five hundred',' six hundred',' seven hundred',' eight hundred',' nine hundred'],
     ['',' one',' two']
    ];
          return e[3][k[0]] + (k[1] == 1 ? e[1][k[2]] : e[2][k[1]] + (d ? e[4][k[2]] : e[0][k[2]]));
        }
        return i;
      }
      function removeTheSpace(e) {  
        return e.substring(1);
      }
      number = number.toString();
      return removeTheSpace (num_letters(number,1));
}
