import { Content } from './content';

test('It should be able to create a notification content', () => {
  const content = new Content('Você recebeu uma solicitação de amizade');

  expect(content).toBeTruthy();
});

test('It should not be able to create a notification content with less than 5 characters', () => {
  expect(() => new Content('aaa')).toThrow();
});

test('It should not be able to create a notification content with more than 240 characters', () => {
  expect(() => new Content('a'.repeat(241))).toThrow();
});
