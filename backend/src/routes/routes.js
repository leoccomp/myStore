const productsRoutes = require('./products');
const productFindRoutes = require('./productFind');
const stockRoutes = require('./stock');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    productsRoutes(app, fs);
    productFindRoutes(app, fs);
    stockRoutes(app, fs);

};

module.exports = appRouter;