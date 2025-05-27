function checkScore(marks, examType) {
  if (examType === "Final-exam") {
    return marks >= 90 && marks <= 100;
  } else {
    return marks >= 89 && marks <= 100;
  }
}

console.log("Student get A+ grade or not: "+checkScore(90, "Final-exam"));  
console.log("Student get A+ grade or not: "+checkScore(89, "Regular"));      
console.log("Student get A+ grade or not: "+checkScore(89, "Final-exam"));   
console.log("Student get A+ grade or not: "+checkScore(85, "Regular"));      
