let users = [
  { id: 1, name: "Sheren", email: "sheren@gmail.com" },
  { id: 2, name: "Aura", email: "aura@gmail.com" },
];

module.exports = {
  index: (req, res) => {
    // show output
    if (users.length > 0) {
      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
      });
    } else {
      res.json({
        status: false,
        data: [],
        message: "Data kosong",
      });
    }
  },
  store: (req, res) => {
    users.push(req.body);

    // show output
    if (users.length > 0) {
      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        message: "Data berhasil ditambahkan",
      });
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
