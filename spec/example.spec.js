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


// ------------------------------


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


// ------------------------------


// Test de getUserByName
describe("Récupère tous les users grâce au Name", () => {
  it("Vérifie si la fonction est définit", async function () {
    let a = await user.getUserByName("Jean");
    expect(a).toBeDefined();
  });
});


// ------------------------------


// Test de getAllUsers
describe("Test de récupération de tous les utlisateurs", () => {
  
  it("Vérifie si la fonction est definit", async function () {
    let a = await user.getAllUsers();
    expect(a).toBeDefined();
  });

  it("Vérifie si le premier utilisateur a le bon name", async function () {
    let a = await user.getAllUsers();
    expect(a[0].prenom).toBe("Sophie");
  });

});


// ------------------------------


// Fonction du calcul du prix total
describe("Fonction du calcul du prix total", () => {
  // Cas 1
  it("Regarde si le resultat de la function est definit", () => {
    let a = user.calculateTotalPrice(1, 10);
    expect(a).toBeDefined();
  });

  // Cas 2
  it("Vérifie que la valeur renvoyé est supérieur à 1", async function () {
    let a = await user.calculateTotalPrice(1, 10);
    expect(a).toBeGreaterThan(1);
  });


  // Cas 3.1
  it("Vérifie pour une période supérieur à 7 jours", async function () {
    days = 8;
    price = 10;
    totalPrice = 0;

    if (days <= 3) {
      totalPrice = price; // les 3 premiers jours sont égaux au prix de base de location
    } else if (days > 3 && days <= 7) {
      totalPrice = price + price * 0.04 * (days - 3);
    } else if (days > 7 && days <= 14) {
      totalPrice = price + price * 0.04 * 4 + price * 0.02 * (days - 7);
    } else if (days > 14 && days <= 30) {
      totalPrice = price + price * 0.04 * 4 + price * 0.02 * 7 + price * 0.01 * (days - 14);
    }

    // Si plus de 7 jours, enlever 10%
    if (days > 7) {
      totalPrice *= 0.9;
    }

    // Si plus de 30 jours, rajouter 20%
    if (days > 30) {
      totalPrice += price * 0.2;
    }

    let a = await user.calculateTotalPrice(days, price);
    expect(a).toBe(totalPrice);
  });

  // Cas 3.2
  it("Vérifie pour une période supérieur à 7 jours", async function () {
    days = 31;
    price = 10;
    totalPrice = 0;

    if (days <= 3) {
      totalPrice = price; // les 3 premiers jours sont égaux au prix de base de location
    } else if (days > 3 && days <= 7) {
      totalPrice = price + price * 0.04 * (days - 3);
    } else if (days > 7 && days <= 14) {
      totalPrice = price + price * 0.04 * 4 + price * 0.02 * (days - 7);
    } else if (days > 14 && days <= 30) {
      totalPrice = price + price * 0.04 * 4 + price * 0.02 * 7 + price * 0.01 * (days - 14);
    }

    // Si plus de 7 jours, enlever 10%
    if (days > 7) {
      totalPrice *= 0.9;
    }

    // Si plus de 30 jours, rajouter 20%
    if (days > 30) {
      totalPrice += price * 0.2;
    }

    let a = await user.calculateTotalPrice(days, price);
    expect(a).toBe(totalPrice);
  });


});


// ------------------------------