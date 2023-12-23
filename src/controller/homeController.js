const connection = require("../config/database");
const { getAllUser, getiduser, deleteuserid } = require("../services/CRUD");

const homepage = async (req, res) => {
  let result = await getAllUser();
  res.render("hompage.ejs", { users: result });
};

const Create = (req, res) => {
  res.render("create.ejs");
};
const postCreateuser = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let city = req.body.city;
  const [results, fields] = await connection.query(
    `INSERT INTO Users (name, email, city) VALUES (?, ?, ?)`,
    [name, email, city]
  );
  res.send("ok");
};
const getupdate = async (req, res) => {
  const userid = req.params.id;
  let user = await getiduser(userid);
  res.render("edit.ejs", { userEdit: user });
};
const postUpdateuser = async (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let email = req.body.email;
  let city = req.body.city;
  const [results, fields] = await connection.query(
    `UPDATE Users SET name = ?, email = ?, city = ? WHERE id = ?`,
    [name, email, city, id]
  );

  res.redirect("/home");
};

const postdeleteuser = async (req, res) => {
  const userid = req.params.id;
  let user = await getiduser(userid);
  res.render("delete.ejs", { Userdelte: user });
};

const postcomfirmdelete = async (req, res) => {
  let id = req.body.id;
  await deleteuserid(id);
  res.redirect("/home");
};
module.exports = {
  homepage,
  postCreateuser,
  Create,
  getupdate,
  postUpdateuser,
  postdeleteuser,
  postcomfirmdelete,
};
