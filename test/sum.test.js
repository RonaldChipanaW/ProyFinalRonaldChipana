import { describe, it, expect } from 'vitest';
import { sum } from '../src/sum.js';

describe('sum', () => {
  it('suma dos números', () => {
    expect(sum(2, 3)).toBe(5);
  });
  it('suma mas cero', () => {
    expect(sum(4, 0)).toBe(4);
  });
});
