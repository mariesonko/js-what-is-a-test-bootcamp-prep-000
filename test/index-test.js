var index = require("../index.js")
if (index.name === "Susan") {
  console.log("Susan")
} else if (index.height < 40){
  console.log ("is less than 40")
} else {
  console.log(index.message)
}
