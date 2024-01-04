export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  for (const e of reportWithIterator) {
    employees.push(e);
  }

  return employees.join(' | ');
}
