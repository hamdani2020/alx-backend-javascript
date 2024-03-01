import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * It binds the routes to the appropriate handler in the
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
