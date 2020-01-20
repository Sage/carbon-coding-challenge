/*
  Please, DO NOT modify this file.
*/
var faker = require("faker");

module.exports = () => {
  const data = { invoices: [] };
  for (let id = 1; id <= 1000; id++) {
    const total = faker.random.number({ min: 1, max: 10000, precision: 2 });
    const due = faker.random.number({ min: 0, max: total, precision: 2 });
    data.invoices.push({
      id,
      date: faker.date.recent(),
      orderNumber: `${faker.random
        .word()
        .toUpperCase()
        .substr(0, 3)}-${faker.random.number({ max: 999 })}`,
      customer: faker.company.companyName(),
      reference: faker.commerce.productName(),
      due: due.toString(),
      total: total.toString(),
      status: faker.random.arrayElement([
        "Overdue",
        "Awaiting Payment",
        "Part Paid",
        "Paid"
      ])
    });
  }
  return data;
};
