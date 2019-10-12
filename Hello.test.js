import {addItem} from './Hello'


test('addItem()',()=>{
  let result = addItem();
  expect(result).toBe(!isNaN(result));
})