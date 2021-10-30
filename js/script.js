function Book(titre, auteur, annee){
    this.titre = titre;
    this.auteur = auteur;
    this.annee = annee;
}

// USER INTERFACE CONSTRUCTOR 
function UI(){
}

UI.prototype.addBookList = function(book){
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.titre}</td>
    <td>${book.auteur}</td>
    <td>${book.annee}</td>
    <td><a href="#" class="delete">X</a></td>`;
    list.appendChild(row);
}

UI.prototype.showAlert = function(message, className){
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}

UI.prototype.clearFields = function(){
    document.getElementById('titre').value = '';
    document.getElementById('auteur').value = '';
    document.getElementById('annee').value = '';
}


document.getElementById('book-form').addEventListener('submit', function(e){
    const titre = document.getElementById('titre').value;
    const auteur = document.getElementById('auteur').value;
    const annee = document.getElementById('annee').value;
    const book = new Book(titre, auteur, annee);

    const ui = new UI();

    if(titre === '' || auteur === '' || annee === ''){
        ui.showAlert('remplissez les champs', 'error');
    }else{
        ui.addBookList(book); 
        ui.showAlert('Livre ajouté', 'success');
        ui.clearFields();
    }

e.preventDefault();
});

UI.prototype.deleteBook = function(target){
 if(target.className === 'delete'){
     target.parentElement.parentElement.remove();
 }
}

document.getElementById('book-list').addEventListener('click', function(e){

    const ui = new UI();
    ui.deleteBook(e.target); 
    ui.showAlert('Livre supprimé avec succés', 'success');

    e.preventDefault();
})