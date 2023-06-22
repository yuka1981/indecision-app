const add = (a, b) => a + b;
const generateGretting = (name = "Anonymous") => `Hello, ${name}!`;

test("should add two numvers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("should return correct string", () => {
  const result = generateGretting("Reid");
  expect(result).toBe("Hello, Reid!");
});

test("should return with Anonymous word", () => {
  const result = generateGretting();
  expect(result).toBe("Hello, Anonymous!");
});
