const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const StudentsGroups = {};
  const FieldNames = fileLines[0].split(',');
  const studentsNames = FieldNames.slice(0, FieldNames.length - 1);

  for (const line of fileLines.slice(1)) {
    const RecordOfStudent = line.split(',');
    const studentValues = RecordOfStudent.slice(0, RecordOfStudent.length - 1);
    const field = RecordOfStudent[RecordOfStudent.length - 1];
    if (!Object.keys(StudentsGroups).includes(field)) {
      StudentsGroups[field] = [];
    }
    const StudentEntry = studentsNames
      .map((propName, idx) => [propName, studentValues[idx]]);
    StudentsGroups[field].push(Object.fromEntries(StudentEntry));
  }

  const StudentsTotal = Object
    .values(StudentsGroups)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${StudentsTotal}`);
  for (const [field, group] of Object.entries(StudentsGroups)) {
    const NamesOfStudents = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${NamesOfStudents}`);
  }
};

module.exports = countStudents;
