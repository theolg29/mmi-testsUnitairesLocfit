const { getAllUsers, getUserByName } = require("../models/user");


// Test de getUserByName
describe("Récupère un user grâce à son name", () => {

    it ("", () => {
        let name = getUserByName("Jean");
        expect(name).toBeDefined();
    });

});


// Test de getAllUsers
describe("Test de récupération de tous les utlisateurs", () => {

    it ("Vérifie si il y a des utilisateurs", () => {
        let name = getAllUsers();
        expect(name).toBeDefined();
        console.log(name);
    });

});