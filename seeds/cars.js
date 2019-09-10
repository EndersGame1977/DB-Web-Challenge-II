exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: 1,
          make: "Bugatti",
          model: "La Voiture Noire",
          mileage: 1,
          transmission: "auto",
          title: "clean"
        },
        {
          vin: 2,
          make: "Rolls-Royce",
          model: "Sweptail",
          mileage: 1,
          transmission: "auto",
          title: "clean"
        },
        {
          vin: 3,
          make: "Mercedes-Benz",
          model: "Maybach Exelero",
          mileage: 1,
          transmission: "auto",
          title: "clean"
        },
        {
          vin: 4,
          make: "Koenigsegg",
          model: "CCXR Trevita",
          mileage: 1,
          transmission: "auto",
          title: "clean"
        },
        {
          vin: 5,
          make: "Lamborghini",
          model: "Veneno",
          mileage: 1,
          transmission: "auto",
          title: "clean"
        },
        {
          vin: 6,
          make: "Ferrari",
          model: "Pininfarina Sergio",
          mileage: 1,
          transmission: "auto",
          title: "clean"
        },
        {
          vin: 7,
          make: "Bugatti",
          model: "Chiron",
          mileage: 1,
          transmission: "auto",
          title: "clean"
        },
        {
          vin: 8,
          make: "Laferrari",
          model: "FXX K",
          mileage: 1,
          transmission: "auto",
          title: "clean"
        }
      ]);
    });
};
