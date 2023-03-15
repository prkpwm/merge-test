import {merge} from './merge';
import { describe, it, expect } from '@jest/globals';


describe('merge function', () => {
  it('should merge two sorted arrays', () => {
    let collection1 = [1, 3, 5, 7];
    let collection2 = [2, 4, 6, 8];
    const result = merge(collection1, collection2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('should merge two arrays with different lengths', () => {
    let collection1 = [1, 3, 5, 7];
    let collection2 = [2, 4];
    const result = merge(collection1, collection2);
    expect(result).toEqual([1, 2, 3, 4, 5, 7]);
  });

  it('should merge two arrays with duplicate values', () => {
    let collection1 = [1, 3, 3, 5, 7];
    let collection2 = [2, 3, 4, 6, 8];
    const result = merge(collection1, collection2);
    expect(result).toEqual([1, 2, 3, 3, 3, 4, 5, 6, 7, 8]);
  });

  it('should merge two empty arrays', () => {
    let collection1 = [];
    let collection2 = [];
    const result = merge(collection1, collection2);
    expect(result).toEqual([]);
  });
});