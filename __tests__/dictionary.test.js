const request = require('supertest')
const axios = require('axios')
const app = require('../app')

let dictionary = {}

describe("It creates a new dictionary", () => {
  test("Create a new dictionary", async () => {
    dictionary = await request(app)
      .post("/api/dictionary")
      .send({0: "test"})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)

    // make sure we add it correctly
    expect(dictionary).toHaveProperty('status', 201);
    expect(dictionary).toHaveProperty('body')
    expect(dictionary.body).toHaveProperty('id')
  });
});

describe("It creates a new key in the dictionary and updates", () => {
  test('Create an key value with the given value', async () => {
    const id = dictionary.body.id
    const entry = await request(app)
      .post(`/api/dictionary/${id}?key=0`)
      .send({ value: 'a' })
      .set('Accept', 'application/json')

    expect(entry).toHaveProperty('status', 200);
    expect(entry).toHaveProperty('body', '');
  });

  test('Update an existing key value pair', async () => {
    const id = dictionary.body.id
    const entry = await request(app)
      .post(`/api/dictionary/${id}?key=0`)
      .send({ value: 'A' })
      .set('Accept', 'application/json')

    expect(entry).toHaveProperty('status', 200);
    expect(entry).toHaveProperty('body', '');
  });

  test('Check the updated key', async () => {
    const id = dictionary.body.id
    const entry = await request(app)
      .get(`/api/dictionary/${id}/key?key=0`)
      .set('Accept', 'application/json')

    expect(entry).toHaveProperty('status', 200);
    expect(entry).toHaveProperty('body', {value: 'A'});
  });

  test('Check with wrong dictionary id', async () => {
    const id = dictionary.body.id
    const entry = await request(app)
      .get(`/api/dictionary/random_id_123/key?key=0`)
      .set('Accept', 'application/json')

    expect(entry).toHaveProperty('status', 404);
    expect(entry).toHaveProperty('body', '');
  });
});

describe("It deletes the dictionary successfully", () => {
  test('Delete a dictionary', async () => {
    const id = dictionary.body.id
    const deleted = await request(app)
      .delete(`/api/dictionary/${id}`)
      .set('Accept', 'application/json')

    expect(deleted).toHaveProperty('status', 204); // TO DO: Should it be 200?
    expect(deleted).toHaveProperty('body', {});
  });

  test('dictionary keys should be empty', async () => {
    const id = dictionary.body.id
    const entry = await request(app)
      .get(`/api/dictionary/${id}/key?key=0`)
      .set('Accept', 'application/json')

    expect(entry).toHaveProperty('status', 200);
    // expect(entry).toHaveProperty('body', {}); // TO DO: Should be empty
  });
});
