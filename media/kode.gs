function doGet() {
  
  return HtmlService.createHtmlOutputFromFile("login")

}

  function AddRecord(username,password,sebagai) {
  var url = 'https://docs.google.com/spreadsheets/d/1U4zTImMyipiAIlo1kI5CKEGwmjtu-8X-5FwrrcRGBQE/edit#gid=0';
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("Riwayat");
  webAppSheet.appendRow([new Date(),username,password,sebagai]);
  } 
 
function checkLogin(username, password, sebagai) {
  var url = 'https://docs.google.com/spreadsheets/d/1U4zTImMyipiAIlo1kI5CKEGwmjtu-8X-5FwrrcRGBQE/edit#gid=0';
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("Data");
  var getLastRow =  webAppSheet.getLastRow();
  var found_record = '';
  for(var i = 1; i <= getLastRow; i++)
  {
   if(webAppSheet.getRange(i, 1).getValue().toUpperCase() == username.toUpperCase() && 
     webAppSheet.getRange(i, 2).getValue().toUpperCase() == password.toUpperCase() &&
     webAppSheet.getRange(i, 3).getValue().toUpperCase() == sebagai.toUpperCase())
   {
     found_record = 'TRUE';
   }    
  }
  if(found_record == '')
  {
    found_record = 'FALSE'; 
  }
  
  return found_record;
  
}