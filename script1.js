var days =prompt("Enter Your Desire Date to meet:");
var newDate = new Date(Date.now()+days*24*60*60*1000);

document.write("Today is       :",new Date());
document.write('</em><br/>');
document.write('</em><br/>');
document.write("We are meeting on    :",newDate);