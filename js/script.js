$(document).ready(function () {
    /*********
     * OGGETTI STUDENTI
     * 
     * 1.Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
     * 2.Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
     * 3.Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array. 
     *********/

    //1.
    // Template
    var obj = $('#template .object').clone();
    
    // Create Object
    var student = {
        nome: 'Paolo',
        cognome: 'Duzioni',
        eta: 39
    };

    // Populate Template
    obj.find('.first-name').append(student.nome);
    obj.find('.last-name').append(student.cognome);
    obj.find('.age').append(student.eta);
    
    // Print in HMTL
    $('.task-1 .students-box').append(obj);
    
    // Print in Console
    for(var key in student){
        console.log(key + ': ' + student[key]);
    }

    //2.
    // Create Array of Objects
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

    // Loop on Array
    for(var i = 0; i < students.length; i++){
        // Template
        var obj = $('#template .object').clone();

        // Populate Template
        obj.find('.title').append(i + 1);
        obj.find('.first-name').append(students[i].nome);
        obj.find('.last-name').append(students[i].cognome);
        obj.find('.age').text('');

        // Print in HTML
        $('.task-2 .students-box').append(obj);

        // Print in Console
        console.log('Student ' + (i + 1) + '\n\t' + 
        'Nome: ' + students[i].nome + '\n\t' + 
        'Cognome: ' + students[i].cognome);
    }

    //3.
    // var newStudent = {
    //     nome: prompt('Enter your first name').trim(),
    //     cognome: prompt('Enter your last name').trim(),
    //     eta: parseInt(prompt('Enter your age').trim())
    // }

    // students.push(newStudent);
    
    // for(var i = 0; i < students.length; i++){
    //     console.log('Student ' + (i + 1) + '\n\t' + 
    //     'Nome: ' + students[i].nome + '\n\t' + 
    //     'Cognome: ' + students[i].cognome + '\n\t' +
    //     'Età: ' + students[i].eta);
    // }
    //End Doc Ready
});