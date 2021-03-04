const imagesRoutes = (app, fs) => {

  const dataPath = './src/data/images.json';
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
  app.get('/images/:id', (req, res) => {
    const { id } = req.params;
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
          throw err;
      }
      const JSONConverted = JSON.parse(data);
      const images = JSONConverted.images;
      const result = images.filter(item => item.id == id);
      res.send(result);
    });
  });

};

module.exports = imagesRoutes;