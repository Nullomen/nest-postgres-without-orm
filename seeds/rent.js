/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('rent')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('rent').insert([
        {
          id: 1,
          car_id: 1,
          start_date: new Date(1),
          end_date: new Date(25 * 3600 * 1000),
        },
        {
          id: 2,
          car_id: 2,
          start_date: new Date(1),
          end_date: new Date(25 * 3600 * 1000),
        },
        {
          id: 3,
          car_id: 3,
          start_date: new Date(1),
          end_date: new Date(25 * 3600 * 1000),
        },
        {
          id: 4,
          car_id: 4,
          start_date: new Date(1),
          end_date: new Date(25 * 3600 * 1000),
        },
        {
          id: 5,
          car_id: 5,
          start_date: new Date(1),
          end_date: new Date(25 * 3600 * 1000),
        },
        {
          id: 6,
          car_id: 5,
          start_date: new Date('Dec 26, 2021'),
          end_date: new Date(2022, 0, 15),
        },
        {
          id: 7,
          car_id: 4,
          start_date: new Date('Dec 7, 2021'),
          end_date: new Date(2022, 0, 15),
        },
        {
          id: 8,
          car_id: 3,
          start_date: new Date('Dec 20, 2021'),
          end_date: new Date('Dec 30, 2021'),
        },
        {
          id: 9,
          car_id: 3,
          start_date: new Date('Dec 1, 2021'),
          end_date: new Date('Dec 8, 2021'),
        },
        {
          id: 10,
          car_id: 3,
          start_date: new Date('Dec 10, 2021'),
          end_date: new Date('Dec 17, 2021'),
        },
      ]);
    });
};
