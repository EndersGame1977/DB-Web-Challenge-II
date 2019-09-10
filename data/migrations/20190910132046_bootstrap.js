exports.up = function(knex, Promise) {
  // don't forget the return statement
  return knex.schema.createTable("cars", tbl => {
    // creates a primary key called id
    tbl.increments();
    // creates a text field called name which is both required and unique
    tbl
      .string("vin", 128)
      .unique()
      .notNullable();
    // creates a numeric field called budget which is required
    tbl.string("make", 128).notNullable();
    tbl.string("model", 128).notNullable();
    tbl.decimal("mileage").notNullable();
    tbl.string("transmission", 128);
    tbl.string("title", 128);
  });
};

exports.down = function(knex, Promise) {
  // drops the entire table
  return knex.schema.dropTableIfExists("cars");
};
