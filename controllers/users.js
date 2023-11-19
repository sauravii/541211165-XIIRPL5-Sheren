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
  update: async (req, res) => {
    try {
      const users = await user.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      res.status(200).json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        message: "Data berhasil diubah",
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
  delete: async (req, res) => {
    try {
      await user.findByIdAndDelete(req.params.id);
      res.json({
        status: true,
        method: req.method,
        url: req.url,
        message: "Delete data success",
      });
    } catch (err) {
      res.status(400).json({ sucess: false, error: err });
    }
  },
};
