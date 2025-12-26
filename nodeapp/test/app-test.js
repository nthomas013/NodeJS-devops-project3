const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Hello from my DevOps Pipeline!!!');
});

describe('GET /', () => {
  it('should return 200 and correct message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from my DevOps Pipeline!!!');
  });
});
