var reversetree = require('../');


var input = `
folder1
-------file1.js
-------file2.js
-------folder2
--------------file3.xml
--------------file4.java
..............folderx
.-......-.-...-.-..-.ubdex.hs
folder3
------file5.jupyter
`;

//console.log(JSON.stringify(reversetree.level1(input), 2, 2));
console.log(JSON.stringify(reversetree.level1(input), 2, 2));