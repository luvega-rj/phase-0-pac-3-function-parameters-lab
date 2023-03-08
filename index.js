
function introduction(name) {
    console.log(`Hi, my name is ${name}!`);
  }
  
  
  
  
  function introductionWithLanguage (name,language) {
  console.log(`hi,my name is ${name}! and i am learning to programe in ${language}`)
  }
  
  
  
  function introductionWithLanguageOptional (name,language = "javascript"){
      console.log(`hi,my name is ${name}!and am learning to programme ${language}`)
  }
  
  introduction("ronald")
  introductionWithLanguage("ronald","javascript")
  introductionWithLanguageOptional("ronald")