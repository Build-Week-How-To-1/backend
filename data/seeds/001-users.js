exports.seed = async function (knex) {
  await knex("users").insert([
    {
      email: "dalecooper@gmail.com",
      password: "password",
    },
    {
      email: "deputyhawk@yahoo.com",
      password: "password",
    },
    {
      email: "lucymoran@msn.com",
      password: "password",
    },
  ]);
};
