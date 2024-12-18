const user = require("../models/user");

// La récupération d'un user par son id
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

// La récupération d'un produit par son id
describe("La récupération d'un produit par son id", () => {
  // Cas 1
  it("Regarde si le resultat de la function est definit", () => {
    let a = user.show_productById(1);
    expect(a).toBeDefined();
  });

  // Cas 2
  it("Regarde si c'est le bon id qui est retourné", async function () {
    let a = await user.show_productById(2);
    expect(a.id).toBe(2);
  });

  // Cas 3
  it("Regarde si c'est la bonne marque qui est retourné", async function () {
    let a = await user.show_productById(2);
    expect(a.marque).toBe("Concept2");
  });
});

// Test de getUserByName
describe("Récupère un user grâce à son name", () => {
  it("", () => {
    let name = user.getUserByName("Jean");
    expect(name).toBeDefined();
  });
});

// Test de getAllUsers
describe("Test de récupération de tous les utlisateurs", () => {
  it("Vérifie si il y a des utilisateurs", () => {
    let name = user.getAllUsers();
    expect(name).toBeDefined();
    console.log(name);
  });
});
