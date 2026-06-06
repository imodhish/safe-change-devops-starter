import test from 'node:test';
import assert from 'node:assert/strict';
import { route } from '../src/app.js';

test('GET /health returns service status', () => {
  const result = route('GET', '/health');

  assert.equal(result.statusCode, 200);
  assert.deepEqual(result.body, {
    status: 'ok',
    service: 'safe-change-demo'
  });
});
