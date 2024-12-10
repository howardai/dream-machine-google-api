// https://hooshmand.net/api-google-sheets-google-apps-script/
// https://stackoverflow.com/questions/30126787/call-a-function-from-external-url

function doGet(e) { // get parameter to understand what to return  
    let searchType = e.parameter.search;
    let id = e.parameter.id;

    switch (searchType){
      case "dreamer":
        var result = getAllDreams(id);
        break;
      case "dream":
        var result = getDream(id);
        break;        
      default:
        var result = "search type error";
        break;
    }
    var result = {
        'result': result
    };
    var myJSON = JSON.stringify(result);
    return ContentService.createTextOutput(myJSON).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
    return true;
}
