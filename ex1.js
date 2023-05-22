let car = {
  brand: "Suzuki",
  model: "Vitara",
  year: 2020,
  price: "12000 €",
  km: 140000,
  fuel: "diesel",
  hp: 130,
  last_inspection: "02.02.2023",
  next_inspection: "02.02.2025",
};
console.log(car);

let car2 = { ...car };
car2.last_inspection = "-";
car2.hp = 200;
car2.first_registration = "20.12.2020";
console.log(car2);
