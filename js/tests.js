function checkForName(fullName, name) {
  const result = fullName.includes(fullName); name.includes(name); // Change this line
  return result;
}
console.log(checkForName("Egor Kolbasov", "egor"));
