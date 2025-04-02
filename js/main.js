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

/**
 * Afficher les personnes dans le tableau
 **/
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

/**
 * Ajouter une personne au tableau
 * @param {Event} event
 **/
function ajouterPersonne(event){
    event.preventDefault();
    const form = event.target;

    const prenom = form.prenom.value;
    const nom = form.nom.value;
    const age = form.age.value;
    const localite = form.localite.value;

    personnes.push({prenom, nom, age, localite});
    affichePersonnes();
    form.reset();
}

// Event listeners
window.addEventListener('load', affichePersonnes);
window.addEventListener('submit', ajouterPersonne)
