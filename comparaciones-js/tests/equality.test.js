// tests/equality.test.js
// Pruebas con el runner nativo de Node 18+: `node --test`

import test from 'node:test';
import assert from 'node:assert/strict';

test('== vs === básicos', () => {
  assert.equal(1 == '1', true);
  assert.equal(1 === '1', false);
  assert.equal(0 == false, true);
  assert.equal(0 === false, false);
  assert.equal(null == undefined, true);
  assert.equal(null === undefined, false);
});

test('coerciones sorpresivas', () => {
  assert.equal(" \t\r\n" == 0, true);
  assert.equal(' ' == 0, true);
  assert.equal([] == '', true);
  assert.equal([] == 0, true);
  assert.equal(true == 1, true);
  assert.equal(false == '0', true);
});

test('buenas prácticas: === y !==', () => {
  const a = 10;
  const b = '10';
  assert.equal(a === b, false);
  assert.equal(a !== b, true);
});
