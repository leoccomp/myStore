const productsRoutes = require('./products');
const productFindRoutes = require('./productFind');
const productCategoryRoutes = require('./productCategory');
const stockRoutes = require('./stock');
const imagesRoutes = require('./images');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    productsRoutes(app, fs);
    productFindRoutes(app, fs);
    productCategoryRoutes(app, fs);
    stockRoutes(app, fs);
    imagesRoutes(app, fs);
};

module.exports = appRouter;