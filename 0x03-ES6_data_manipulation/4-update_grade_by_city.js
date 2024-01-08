/**
 * This function returns an array of students
 * for a specific city with their new grade
 */

export default function updateStudentGradeByCity(students, city, newGrades) {
  const currentGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || currentGrade).grade,
      }));
  }
  return [];
}
