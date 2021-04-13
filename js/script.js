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
    // References
    var plus = $('.task-3 .add'); // Add Plus
    var modal = $('.modal'); // Modal
    var btn = $('.user-form .btn'); // Submit Button
    var input = $('.user-input'); // Input Fields
    var insert = $('.task-3 .students-box .add'); // Print Place

    // Loop on Array
    for(var i = 0; i < students.length; i++){
        // Template
        var obj = $('#template .object').clone();

        // Populate Template
        obj.find('.title').append(i + 1);
        obj.find('.first-name').append(students[i].nome);
        obj.find('.last-name').append(students[i].cognome);
        obj.find('.age').append(students[i].eta);

        // Print in HTML
        insert.before(obj);
    }

    // Click Plus
    plus.click(function() {
        // Show Modal
        modal.show();
    });

    //Click Send Button
    btn.click(function() {
        var status = false;
        
        //Check Validity of Inputs
        input.each(function() {
            if(this.validity.valid){
                status = true;
            } else {
                status = false;
                return false;
            }
        });

        // If all inputs are valid
        if(status){
            // Get Inputs values
            var name = $('#name').val();
            var surname = $('#surname').val();
            var years = $('#years').val();
            
            // Create New Object
            var newStudent = {
                nome: name,
                cognome: surname,
                eta: years
            }

            // Add New Object in Array
            students.push(newStudent);
            
            // Template
            var obj = $('#template .object').clone();
            
            // Populate Template
            obj.find('.title').append(i + 1);
            obj.find('.first-name').append(newStudent.nome);
            obj.find('.last-name').append(newStudent.cognome);
            obj.find('.age').append(newStudent.eta);
            
            // Print in HTML
            insert.before(obj);

            // Increase Counter
            i++;
        
            // Hide Modal
            modal.hide();
        }
    })

    // Task 3 in Console
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