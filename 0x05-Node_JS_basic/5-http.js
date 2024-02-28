const fs = require('fs');
const http = require('http');

/**
 * It counts the number of students in the CSV file
 */

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
	reject(new Error('Cannot load the database'));
      }
      if (data) {
	const reportParts = [];
	const FileLines = data.toString('utf-8').trim().split('\n');
	const StudentGroups = {};
	const DbFieldNames = FileLines[0].split(',');
	const StudentPropNames = DbFieldNames.slice(
	  0, DbFieldNames.length - 1,
        );
	for (const line of FileLines.slice(1)) {
	  const StudentRecord = line.split(',');
	  const StudentPropValues = StudentRecord.slice(
	    0, StudentRecord.length - 1,
          );
	  const field = StudentRecord[StudentRecord.length - 1];
	  if (!Object.keys(StudentGroups).includes(field)) {
	    StudentGroups[field] = [];
	  }
	  const StudentEntry = StudentPropNames.map((propName, idx) => [
	    propName, StudentPropValues[idx],
	  ]);
	  StudentGroups[field].push(Object.fromEntries(StudentEntry));
        }

	const TotalStudents = Object.values(StudentGroups).reduce(
	  (pre, cur) => (pre || []).length + cur.length,
	);
	reportParts.push(`Number of students: ${TotalStudents}`);
	for (const [field, group] of Object.entries(StudentGroups)) {
	  reportParts.push([
	    `Number of students in ${field}: ${group.length}.`,
	    'List:',
	    group.map((student) => student.firstname).join(', '),
	  ].join(' '));
	}
	resolve(reportParts.join('\n'));
      }
    });
  }
});

const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
        .catch((err) => {
          responseParts.push(err instanceof Error ? err.message : err.toString());
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
