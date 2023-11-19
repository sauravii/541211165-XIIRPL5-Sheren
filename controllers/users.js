const user = require("../models/users");

module.exports = {
  index: async (req, res) => {
    try {
      const users = await user.find();
      if (users.length > 0) {
        res.status(200).json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
        });
      } else {
        res.json({
          status: false,
          message: "Data kosong",
        });
      }
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
  store: async (req, res) => {
    try {
      const users = await user.create(req.body);
      res.status(201).json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        message: "Data berhasil ditambahkan",
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
  update: (req, res) => {
    // define variable id
    const id = req.params.id;
    // filter
    users.filter((user) => {
      if (user.id == id) {
        user.name = req.body.name;
        user.email = req.body.email;
        return user;
      }
    });

    // show output
    if (users.length > 0) {
      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        message: "Data berhasil diubah",
      });
    }
  },
  delete: (req, res) => {
    // define variable id
    const id = req.params.id;
    // filter
    users = users.filter((user) => user.id != id);

    // show output
    if (users.length > 0) {
      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        message: `Data dengan id ${id} berhasil dihapus`,
      });
    }
  },
};
