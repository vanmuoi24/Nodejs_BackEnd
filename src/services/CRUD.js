const connection = require("../config/database");

const getAllUser = async () => {
  let [result, fields] = await connection.query("select * from Users u");
  return result;
};
const getiduser = async (userid) => {
  let [result, fields] = await connection.query(
    "SELECT * FROM Users WHERE id = ?",
    [userid]
  );
  let user = result && result.length > 0 ? result[0] : {};
  return user;
};

const deleteuserid = async (id) => {
  const [results, fields] = await connection.query(
    `DELETE FROM Users
    WHERE id=?`,
    [id]
  );
};
module.exports = { getAllUser, getiduser, deleteuserid };
