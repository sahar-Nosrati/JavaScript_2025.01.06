
// exporting function 
const fruits = ["APPLE", "BANANA", "CHERRY"];

//foreach();
fruits.forEach((element) => console.log(element.toLowerCase()));

find()
const coutries = [ "Japan", "Germany", "Alaska", "Japan"];

const europeanCountry = coutries.find((country) => country === "Germany");
let selectedEropeanCoutry;

switch(europeanCountry){
  case ("USA"): selectedEropeanCoutry = `The USA is located in America continent`
  break;
  case ("South Korea"): selectedEropeanCoutry = `The South Korea is located in Asia continent`
  break;
  case ("Germany"): selectedEropeanCoutry = `The Germany is located in Europe continent`
  break;
default : selectedEropeanCoutry = `This country has not been defined`;
};
console.log(selectedEropeanCoutry);

// indexOf()
const selectedReiver = function(...reviers){
    const importantReiver = reviers.indexOf("Aras");

    const iranianRiver = importantReiver  ? `The ${reviers[importantReiver]} is iranian river` : `It is not iranian revier or it is undefined`;
    return iranianRiver;
}

console.log(selectedReiver("Nile", "mississipi", "Aras", "mississipi"));

// findIndexOf()
const cities = ["Warsaw", "Newyork","Tehran", "Delhi", "Newyork"];

const usaCity = cities.indexOf("Newyork");
console.log(usaCity);

// sort()
const provinces = [
  "Gilan",
  "Giabc",
  "ahvaz",
  "fars",
  "East Azarbayjan",
  "khorasan",
];
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// reverse()
const provinces2 = ["Gilan", "ahvaz", "fars", "East Azarbayjan", "khorasan"];
const reversedProvinces = provinces2.reverse();
console.log(reversedProvinces);

switch (europeanCountry) {
  case "USA":
    selectedEropeanCoutry = `The USA is located in America continent`;
    break;
  case "South Korea":
    selectedEropeanCoutry = `The South Korea is located in Asia continent`;
    break;
  case "Germany":
    selectedEropeanCoutry = `The Germany is located in Europe continent`;
    break;
  default:
    selectedEropeanCoutry = `This country has not been defined`;
}
console.log(selectedEropeanCoutry);
// ####################################