$(document).ready(function() {
  var javaScriptData = {
    languageUse: "web",
    paradigms: "less",
    letter: "j",
    animalType: "cat",
    developed: "before"
  }
  var cSharpData = {
    languageUse: "application",
    paradigms: "more",
    letter: "c",
    animalType: "cat",
    developed: "after"
  }
  var pythonData = {
    languageUse: "data",
    paradigms: "more",
    letter: "p",
    animalType: "dog",
    developed: "before"
  }
  var programmingLanguagesArray = [javaScriptData, cSharpData, pythonData];
  $("#user-input-container form").submit(function(event) {
    var languageUseInput = $("input:radio[name='language-use']:checked").val();
    var paradigmAmountInput = $("input:radio[name='paradigm-amount']:checked").val();
    var bestLetterInput = $("input:radio[name='best-letter']:checked").val();
    var bestAnimalInput = $("input:radio[name='animal-type']:checked").val();
    var yearDevelopedInput = $("input:radio[name='year-developed']:checked").val();
    var javaScript = calculateProgrammingLanguageScore(languageUseInput, paradigmAmountInput, bestLetterInput, bestAnimalInput, yearDevelopedInput, javaScriptData).toString();
    var cSharp = calculateProgrammingLanguageScore(languageUseInput, paradigmAmountInput, bestLetterInput, bestAnimalInput, yearDevelopedInput, cSharpData).toString();
    var python = calculateProgrammingLanguageScore(languageUseInput, paradigmAmountInput, bestLetterInput, bestAnimalInput, yearDevelopedInput, pythonData).toString();

    if (python > cSharp && python > javaScript) {
      $("#python-hidden").show();
    } else if (cSharp > python && cSharp > javaScript) {
      $("#csharp-hidden").show();
    } else if (javaScript > cSharp && javaScript > python) {
      $("#javascript-hidden").show();
    } else if (cSharp === javaScript === python) {
      $("#python-hidden").show();
      $("#javascript-hidden").show();
      $("#csharp-hidden").show();
    } else if (cSharp === javaScript) {
      $("#javascript-hidden").show();
      $("#csharp-hidden").show();
    } else if (cSharp === python) {
      $("#python-hidden").show();
      $("#csharp-hidden").show();
    } else if (javaScript === python) {
      $("#python-hidden").show();
      $("#javascript-hidden").show();
    } else {

    }
    event.preventDefault();
  });
  function calculateProgrammingLanguageScore(languageUseArg, paradigmAmountArg, bestLetterArg, bestAnimalArg, yearDevelopedArg, language) {
    var score = 0;
    var languagePropertyArray = [];
    var languageArgArray = [languageUseArg, paradigmAmountArg, bestLetterArg, bestAnimalArg, yearDevelopedArg];
    for (key in language) {
      if(language.hasOwnProperty(key)) {
        languagePropertyArray.push(language[key]);
      }
    }
    for (var i = 0; i < languagePropertyArray.length; i++) {
      if (languagePropertyArray[i] === languageArgArray[i]) {
        score = score + 1;
      } else {
        score = score + 0;
      }
    }
    return score;
  }
  function checkYearDevelopedInput(inputArg) {
    if(inputArg === undefined) {
      $("#yearDevelopedInputContainer p").remove();
      $("#yearDevelopedInputContainer").append("<p>Please select an option</p>");

    } else {
      return true;
    }
  }
  function checkLanguageUseInput(inputArg) {
    if(inputArg === undefined) {
      $("#languageUseInputContainer p").remove();
      $("#languageUseInputContainer").append("<p>Please select an option</p>");

    } else {
      return true;
    }
  }
  function checkParadigmAmountInput(inputArg) {
    if(inputArg === undefined) {
      $("#paradigmAmountInputContainer p").remove();
      $("#paradigmAmountInputContainer").append("<p>Please select an option</p>");

    } else {
      return true;
    }
  }
  function checkBestLetterInput(inputArg) {
    if(inputArg === undefined) {
      $("#bestLetterInputContainer p").remove();
      $("#bestLetterInputContainer").append("<p>Please select an option</p>");

    } else {
      return true;
    }
  }
  function checkBestAnimalInput(inputArg) {
    if(inputArg === undefined) {
      $("#bestAnimalInputContainer p").remove();
      $("#bestAnimalInputContainer").append("<p>Please select an option</p>");

    } else {
      return true;
    }
  }
});
