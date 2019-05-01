const middleware = {}

middleware['admin'] = require('@/middleware/admin.js');
middleware['admin'] = middleware['admin'].default || middleware['admin']

middleware['auth'] = require('@/middleware/auth.js');
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['checkLogin'] = require('@/middleware/checkLogin.js');
middleware['checkLogin'] = middleware['checkLogin'].default || middleware['checkLogin']

export default middleware
