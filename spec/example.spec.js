const user = require("../models/user");

// Test 1
describe("La récupération d'un user par son id", () => {
  // Cas 1
  it("Regarde si le resultat de la function est definit", () => {
    let a = user.getUserById(1);
    expect(a).toBeDefined();
  });

  // Cas 2
  it("Regarde si c'est le bon id qui est retourné", async function () {
    let a = await user.getUserById(1);
    expect(a.id).toBe(1);
  });

  // Cas 3
  it("Regarde si c'est le bon login qui est retourné", async function () {
    let a = await user.getUserById(1);
    expect(a.login).toBe("jdupont");
  });
});
