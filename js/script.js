$(document).ready(function () {
    /*********
     * OGGETTI STUDENTI
     * 
     * 1.Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
     * 2.Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
     * 3.Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array. 
     *********/

    //1.
    var student = {
        nome: 'Paolo',
        cognome: 'Duzioni',
        eta: 39
    };
    
    for(var key in student){
        console.log(key + ': ' + student[key]);
    }

    //2.
    var students = [
        {
            nome: 'Luca',
            cognome: 'Rossi',
            eta: 25
        },
        {
            nome: 'Andrea',
            cognome: 'Biaggi',
            eta: 18
        },
        {
            nome: 'Laura',
            cognome: 'Bianchi',
            eta: 30
        }
    ];

    for(var i = 0; i < students.length; i++){
        console.log('Student ' + (i + 1) + '\n\t' + 
        'Nome: ' + students[i].nome + '\n\t' + 
        'Cognome: ' + students[i].cognome);
    }

    //3.
    var newStudent = {
        nome: prompt('Enter your first name').trim(),
        cognome: prompt('Enter your last name').trim(),
        eta: parseInt(prompt('Enter your age').trim())
    }

    students.push(newStudent);
    
    for(var i = 0; i < students.length; i++){
        console.log('Student ' + (i + 1) + '\n\t' + 
        'Nome: ' + students[i].nome + '\n\t' + 
        'Cognome: ' + students[i].cognome + '\n\t' +
        'Età: ' + students[i].eta);
    }
    //End Doc Ready
});