/**
 * This function returns the sum
 * of all the students ids
 */

export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (previousStudent, currentStudent) => previousStudent.id
      || previousStudent + currentStudent.id,
      0,
    );
  }
  return 0;
}
