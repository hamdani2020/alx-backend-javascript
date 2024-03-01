import express from 'express';
import mapRoutes from './routes';

const app = express();
const PORT = 1234;

mapRoutes(app);
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
module.exports = app;
