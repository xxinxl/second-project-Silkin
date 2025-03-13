import { add, subtract, multiply, divide, calculate, getHistory, clearHistory } from '../src/calculator.js';

describe('Базовые операции', () => {
    test('складывает 1 + 2 и получает 3', () => {
      expect(add(1, 2)).toBe(3);
    });
  
    test('вычитает 5 - 3 и получает 2', () => {
      expect(subtract(5, 3)).toBe(2);
    });
  
    test('умножает 4 * 3 и получает 12', () => {
      expect(multiply(4, 3)).toBe(12);
    });
  
    test('делит 10 / 2 и получает 5', () => {
      expect(divide(10, 2)).toBe(5);
    });
  
    test('делит 10 / 0 и получает Infinity', () => {
      expect(divide(10, 0)).toBe(Infinity);
    });
  });
  
  describe('Функция calculate', () => {
    beforeEach(() => {
      clearHistory();
    });
  
    test('вычисляет 2 + 3 и получает 5', () => {
      expect(calculate('+', 2, 3)).toBe(5);
    });
  
    test('вычисляет 5 - 3 и получает 2', () => {
      expect(calculate('-', 5, 3)).toBe(2);
    });
  
    test('вычисляет 4 * 3 и получает 12', () => {
      expect(calculate('*', 4, 3)).toBe(12);
    });
  
    test('вычисляет 10 / 2 и получает 5', () => {
      expect(calculate('/', 10, 2)).toBe(5);
    });
  
    test('возвращает NaN для неверной операции', () => {
      expect(calculate('invalid', 10, 2)).toBeNaN();
    });
  });
  
  describe('Функциональность истории', () => {
    beforeEach(() => {
      clearHistory();
    });
  
    test('добавляет операцию в историю', () => {
      calculate('+', 2, 3);
      const history = getHistory();
      expect(history.length).toBe(1);
      expect(history[0]).toEqual({ operation: '+', a: 2, b: 3, result: 5 });
    });
  
    test('очищает историю', () => {
      calculate('+', 2, 3);
      clearHistory();
      expect(getHistory().length).toBe(0);
    });
  });
  