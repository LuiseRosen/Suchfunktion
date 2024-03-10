let names = ['Alex', 'Bernd', 'Christin', 'Dorian', 'Elian', 'Florian', 'Gorian', 'Horian', 'Irian', 'Jorian', 'Karian', 'Lorian', 'Marian', 'Narian', 'Orian'];

function showNames() {
    let list = document.getElementById('list');

    list.innerHTML = '';

    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        list.innerHTML += `<li>${name}</li>`;
    }
}

function filterNames() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();

    let list = document.getElementById('list');
    list.innerHTML = '';

    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        if (name.toLowerCase().includes(search)) { // falls der Inhalt aus dem Array names, wenn man ihn zu Kleinbuchstaben konvertiert, den Inhalt aus dem Suchfeld enthält (diesen haben wir in der Definition von "search" schon toLowerCase umgewandelt), dann soll das folgende ausgeführt werden
            list.innerHTML += `<li>${name}</li>`;
        }
    }
    console.log(search);

}