import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';
import { browserHistory } from 'dva/router';
// 1. Initialize
const app = dva({
  history: browserHistory
});
// 2. Plugins
app.use(createLoading({
  loading: { global: true }
}));

// 3. Model
app.model(require('./models/exampleModel'));
app.model(require('./models/userModel'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
