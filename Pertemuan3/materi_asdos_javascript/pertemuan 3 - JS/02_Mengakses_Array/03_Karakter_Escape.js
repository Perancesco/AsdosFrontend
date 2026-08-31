//Karakter Escape
// \n → baris baru
let teksBarisBaru = 'Halo,\nSelamat datang!';
console.log(teksBarisBaru);

// \t → tab
let teksTab = 'Nama:\tIrvan BelajarIT';
console.log(teksTab);

// \' → kutip tunggal
let teksKutip1 = 'I\'m Learning Javascript';
console.log(teksKutip1); // Output: I'm Learning Javascript

// \" → kutip ganda
let teksKutip2 = "Dia Berkata, \"Hello!\"";
console.log(teksKutip2);

// \\ → backslash
let teksBackslash = 'C:\\MyFolder\\MyFile.txt';
console.log(teksBackslash); // Output: C:\MyFolder\MyFile.txt


//Ubah Case (toUpperCase & toLowerCase)
let contohKecil = 'hello world';
let hasilUpper = contohKecil.toUpperCase();  
console.log(hasilUpper); // Output: HELLO WORLD

let contohBesar = 'Hello World';
let hasilLower = contohBesar.toLowerCase();  
console.log(hasilLower); // Output: hello world
