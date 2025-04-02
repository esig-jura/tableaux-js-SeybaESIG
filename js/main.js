/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

const personnes = [
    {
        nom: 'Doe',
        prenom: 'John',
        age: 25,
        localite: 'New York',
    },
    {
        nom: 'Doe',
        prenom: 'Jane',
        age: 30,
        localite: 'Los Angeles',
    },
    {
        nom: 'Doe',
        prenom: 'Jack',
        age: 28,
        localite: 'Chicago',
    },
    {
        nom: 'Doe',
        prenom: 'Jill',
        age: 35,
        localite: 'Miami',
    },
    {
        nom: 'Doe',
        prenom: 'Jim',
        age: 40,
        localite: 'San Francisco',
    }
];

const tableBody = document.querySelector("tbody");
console.log(tableBody);

// 1. Afficher le nombre de personnes dans le tableau
function affichePersonnes() {
    tableBody.innerHTML = '';
    for (let person of personnes) {
        tableBody.innerHTML +=
            `<tr>
                <td>${person.prenom}</td>
                <td>${person.nom}</td>
                <td>${person.age}</td>
                <td>${person.localite}</td>
             </tr>`;
    }
}

window.addEventListener('load', affichePersonnes);

