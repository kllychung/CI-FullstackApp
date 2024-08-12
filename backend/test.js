const assert = require('assert');
const server = require('./app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('Simple Test', function () {
    it('should always pass', async () => {
        const res = await requestWithSupertest.get('/');
        assert.equal(res.status, 200)
    });
});

