export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentX: Student = {
  firstName: 'Hamdani',
  lastName: 'Gandi',
  age: 18,
  location: 'Los Angeles',
};

const studentY: Student = {
  firstName: 'Amina',
  lastName: 'Mohammed',
  age: 20,
  location: 'London',
};

const studentsList: Array<Student> = [
  studentX,
  studentY,
];

const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;

/**
 * This displays student info in a table
 */

export const studentsInfo = (students: Array<Student>): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = documemt.createElement('tbody');
  headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
  tableHead.insertAdjacentHTML('beforeend', bodyRow);

  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.insertAdjacentElement('beforeend', bodyRow);
  }

  table.insertAdjacentElement('beforeend', tableHead);
  table.insertAdjacentElement('beforeend', tableBody);
  document.body.insertAdjacentElement('beforeend', table);
};

studentInfo(studentsList);
const styleSheetElement = document.createELement('style');
styleSheetELement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';
