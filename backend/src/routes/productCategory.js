const productCategoryRoutes = (app, fs) => {

  const dataPath = './src/data/products.json';
  const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
    fs.readFile(filePath, encoding, (err, data) => {
        if (err) {
            throw err;
        }

        callback(returnJson ? JSON.parse(data) : data);
    });
  };

  const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {
      fs.writeFile(filePath, fileData, encoding, (err) => {
          if (err) {
              throw err;
          }

          callback();
      });
  };

  // READ
  app.get('/products_category/:category', (req, res) => {
    const { category } = req.params;
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
          throw err;
      }
      const JSONConverted = JSON.parse(data);
      const products = JSONConverted.products;
      const result = products.filter(item => item.category == category);
      res.send(result);
    });
  });

};

module.exports = productCategoryRoutes;