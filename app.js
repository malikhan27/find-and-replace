

// var userinput = prompt ('Enter Any Paragraph To Participate');
// var indexnum;

// if (userinput) {
//   var askUser = +prompt (
//     userinput +
//       '\n If you want to find any word from the above para press 1 or \n if you want to find and replace press 2'
//   );
//   if (askUser === 1) {
//     var tellaword = prompt ('tell us a word to find for you');
   
//     for (i = 0; i < userinput.length; i++) {
//       if (tellaword.toLowerCase()===userinput[i]) {
//         indexnum = i
//          document.write (
//           'your word ' +
//           tellaword + ' from your para '+
//           userinput+
//           ' is present at index ' +
//           + indexnum + "<br />" 
//          )
//       }
//     }
//   } else if (askUser === 2) {
//     var tellanewword = prompt (
//       userinput + '\n tell us a word to find for you from the above para'
//     );

//     var wordtoreplace = prompt (
//       userinput + '\n tell us a word to replace in place of ' + tellanewword
//     );

//     if (wordtoreplace && tellanewword) {
//       document.write (
//         'your word ' +
//           tellanewword + 
//           ' from your para '+
//             userinput +
//           ' now replaced as <br /> ' +
//           userinput.replaceAll (tellanewword, wordtoreplace)
//       );
//     }
//   } else {
//     alert ('enter a correct value');
//   }
// } else {
//   alert ('enter some text');
// }





var userinput = prompt ('Enter Any Paragraph To Participate');


if (userinput.toLowerCase()) {
  var askUser = +prompt (
    userinput +
      '\n If you want to find any word from the above para press 1 or \n if you want to find and replace press 2'
  );
  if (askUser === 1) {
    var tellaword = prompt ('tell us a word to find for you');
    var num=0
    var word = ""
    var con= false
   
    for (i = 0; i < userinput.length; i++) {
      if (tellaword[num].toLowerCase()===userinput[i]) {
        word+= tellaword[num] 
        num++
        con= true
        if(tellaword===word){
          break;
        }
      }
    }
  } else if (askUser === 2) {
    var tellanewword = prompt (
      userinput + '\n tell us a word to find for you from the above para'
    );

    var wordtoreplace = prompt (
      userinput + '\n tell us a word to replace in place of ' + tellanewword
    );

    if (wordtoreplace && tellanewword) {
      document.write (
        'your word ' +
          tellanewword + 
          ' from your para '+
            userinput +
          ' now replaced as <br /> ' +
          userinput.replaceAll (tellanewword, wordtoreplace)
      );
    }
  } else {
    alert ('enter a correct value');
  }
} else {
  alert ('enter some text');
}

word = word.toLowerCase()
update= userinput.indexOf(word)
update--

if(con){
  upd=""
  for(i=0;i<word.length;i++){
    update++
    upd+=update + " , "
  }
}



document.write(`${userinput} <br/> <br />Your word <b>${tellaword}</b> is present <b>${upd}<b> `)
