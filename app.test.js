test("OOO message contains name", () => {
  const name = "Nikita";
  const msg = `
Hi,
I’ll be out.
Best,
${name}
  `;
  expect(msg).toContain(name);
});