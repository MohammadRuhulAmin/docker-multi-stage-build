'use strict';
import { describe, it, expect, vi } from 'vitest';
import { product } from '../../../src/controller/product/product.js';
describe('product', () => {
  it('Test-1#should return the array list', async () => {
    const expectedList = ['cooker', 'washingmaching', 'dish', 'car', 'fridge', 'ac'];
    const req = {};
    const res = {
      json: vi.fn()
    };
    await product(req, res);
    expect(res.json).toHaveBeenCalledWith(expectedList);
  });
  it('Test-2#should return exact count', async ()=>{
    const expectedCount = 6;
    const req = {};
    const res = {
      json:vi.fn()
    };
    await product(req,res);
    // console.log(res.json.mock.calls[0][0])
    expect(res.json.mock.calls[0][0].length).toBe(expectedCount);
  });
  it('Test-3#should return true because the array element can be urbitary',async()=>{
    const randomArray = ['washingmaching', 'car','cooker' ,'fridge', 'ac','dish'];
    const req = {};
    const res = {
      json:vi.fn()
    };
    await product(req,res);
    const resArray = res.json.mock.calls[0][0];
    const allExist = randomArray.every(element => resArray.includes(element));
    expect(allExist).toBe(true);
  });
  it('Test-4#should return false because the array element can be urbitary',async()=>{
    const randomArray = ['washingmaching', 'car','x' ,'fridge', 'ac','dish'];
    const req = {};
    const res = {
      json:vi.fn()
    };
    await product(req,res);
    const resArray = res.json.mock.calls[0][0];
    const allExist = randomArray.every(element => resArray.includes(element));
    expect(allExist).toBe(false);
  });
});
