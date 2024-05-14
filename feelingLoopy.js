/**Loop through the characters of a given CSV string.
Store each “cell” of data in a variable.
When you encounter a comma, move to the next cell.
When you encounter the “\r\n” sequence, move to the next “row.”*/

const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26`;

const rows = csvString.split(`\n`);
for (let row of rows) {
const cells = row.split(`,`);
console.log(cells.join(`,`)); //log each row of data
}
