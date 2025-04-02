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


const tableBody = document.querySelector('tbody');

/**
 * Afficher les personnes dans le tableau
 * @param {Array} listePersonnes
 * returns {void}
 **/
function affichePersonnes(listePersonnes) {
    tableBody.innerHTML = '';
    for (let person of listePersonnes) {
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
 * returns {void}
 **/
function ajouterPersonne(event){
    event.preventDefault();
    const form = event.target;

    const prenom = form.prenom.value;
    const nom = form.nom.value;
    const age = form.age.value;
    const localite = form.localite.value;

    personnes.push({prenom, nom, age, localite});
    affichePersonnes(personnes);
    form.reset();
}


/**
 * Filtrer les personnes en fonction de l'input actif
 * @returns {void}
 */
function filtrerPersonnes() {

    let form = document.querySelector('form');
    let activeTextarea = document.activeElement;

    if (activeTextarea === form.prenom) {
        affichePersonnes(personnes
            .filter(person => person.prenom.toLowerCase()
                .includes(form.prenom.value.toLowerCase())));

    } else if (activeTextarea === form.nom) {
        affichePersonnes(personnes
            .filter(person => person.nom.toLowerCase()
                .includes(form.nom.value.toLowerCase())));

    } else if (activeTextarea === form.age) {
        affichePersonnes(personnes
            .filter(person => person.age == form.age.value));

    } else if (activeTextarea === form.localite) {
        affichePersonnes(personnes
            .filter(person => person.localite.toLowerCase()
                .includes(form.localite.value.toLowerCase())));
    }
}

// Fonction incomplète
function trierPersonnes() {
    personnes.sort((a, b) => a.nom.localeCompare(b.nom));
    affichePersonnes(personnes);
}

// Event listeners
window.addEventListener('load', affichePersonnes(personnes));
window.addEventListener('submit', ajouterPersonne)
window.addEventListener('input', filtrerPersonnes);
// Ajouter event listener pour trier les personnes
