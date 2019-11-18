

exports.seed = function(knex) {

  return knex('restaurants').insert([
    {name: 'The Vegan Joint', street_address: '10438 National Blvd #4664', city: 'Los Angeles', state: 'CA', zip_code: '90034', phone: '(310) 559-1357', hours: 'Monday - Sunday 9am - 9pm'},
    {name: 'Veggie Grill', street_address: '2025 Wilshire Blvd', city: 'Santa Monica', state: 'CA', zip_code: '90403', phone: '(310) 829-1155', hours: 'Monday - Friday 10:30am - 11pm, Saturday - Sunday 11-11'},
    {name: 'Cafe Gratitute', street_address: '512 Rose Ave', city: 'Venice', state: 'CA', zip_code: '90291', phone: '(424) 231-8000', hours: 'Monday - Sunday 8am - 10pm'}
  ]);

};

