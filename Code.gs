// const ui = SpreadsheetApp.getUi();
const ss = SpreadsheetApp.getActiveSpreadsheet();
const DBoard = ss.getSheetByName('Dream Board')

const statuscol = DBoard.getRange('A:A');
const dreamerIDcol = DBoard.getRange('B:B');
const dreamIDcol = DBoard.getRange('C:C');
const dream = DBoard.getRange('D:D');


function getDream(DreamID) {
  
  let search = dreamIDcol.createTextFinder(DreamID).findNext()
  // catching number not existing
  if (search == null) {
    return "Cannot find dream!"
  } 
  let row = search.getRow()
  let cell = 'D' + row
  let dream = DBoard.getRange(cell).getValue()
  
  return dream
}

function getDreamTest() {
  let value = ss.getSheetByName('Code Test').getRange('A5').getValue();

  getDream(value);
}

// ------------------------------

function getAllDreams(DreamerID) {
  
  let searchList = []
  let dreamList = []

  searchList = dreamerIDcol.createTextFinder(DreamerID).findAll()
  
  // if array is empty
  if (!searchList.length) {
    return "Cannot find dreamer!"
  } 

  searchList.forEach((search) => {
    let row = search.getRow()
    let cell = 'D' + row
    let dream = DBoard.getRange(cell).getValue()
    console.log(dream)
    dreamList.push(dream)
  });

  console.log(dreamList)
  return dreamList
}

function getAllDreamsTest() {
  let value = ss.getSheetByName('Code Test').getRange('D5').getValue();

  getAllDreams(value);
}
