// student score, total possible score
// 15/20 -> You got a C ()!

const gradeCalc = function (studentScore, totalScore) {
  const percent = (studentScore / totalScore) * 100;
  let letterGrade = ""

  if (percent >= 90) {
    letterGrade = "A";
  } else if (percent >= 80 && percent < 90) {
    letterGrade = "B";
  } else if (percent >= 70 && percent < 80) {
    letterGrade = "C";
  } else if (percent >= 60 && percent < 70) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  return `You've scored ${percent}%! Your grade for this assessment is ${letterGrade}.`;
};

const result = gradeCalc(44, 100);
console.log(result);
