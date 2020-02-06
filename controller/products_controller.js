module.exports = {
  createProduct: (req, res, next) => { 
    const db = req.app.get("db");
    // const {name, description, price, image_url } = req.body;
    db.create_product([req.body.name, req.body.description, req.body.price, req.body.image_url])
      .then(product => {
        res.status(200).send(product);
      })
      .catch(err => {
        res
          .status(500)
          .send({ errorMessage: "Something went wrong on our end..." });
        console.log(err);
      });
  },

  getOne: (req, res, next) => {
    const db = req.app.get("db");
    db.read_product(req.params.id)
      .then(product => {
        res.status(200).send(product);
      })
      .catch(err => {
        res
          .status(500)
          .send({ errorMessage: "Something went wrong on our end..." });
        console.log(err);
      });
  },

  getAll: (req, res, next) => {
    const db = req.app.get("db");
    db.read_products()
      .then(product => {
        res.status(200).send(product);
      })
      .catch(err => {
        res
          .status(500)
          .send({ errorMessage: "Something went wrong on our end..." });
        console.log(err);
      });
  },

  update: (req, res, next) => {
    const db = req.app.get("db");
    db.update_product(req.params.id, req.query.desc)
      .then(product => {
        res.status(200).send(product);
      })
      .catch(err => {
        res
          .status(500)
          .send({ errorMessage: "Something went wrong on our end..." });
        console.log(err);
      });
  },

  delete: (req, res, next) => {
    const db = req.app.get("db");
    db.delete_product(req.params.id)
      .then(product => {
        res.status(200).send(product);
      })
      .catch(err => {
        res
          .status(500)
          .send({ errorMessage: "Something went wrong on our end..." });
        console.log(err);
      });
  }
};
