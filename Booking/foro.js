document.addEventListener('DOMContentLoaded', function () {
    // Obtener el formulario y la lista de comentarios
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');

    // Escuchar el evento de envío del formulario
    commentForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevenir que la página se recargue

        // Obtener los valores del formulario
        const username = document.getElementById('username').value;
        const commentText = document.getElementById('comment').value;

        // Crear un nuevo elemento de comentario
        const newComment = document.createElement('li');
        newComment.innerHTML = `<strong>${username}:</strong> <p>${commentText}</p>`;

        // Agregar el comentario a la lista
        commentList.appendChild(newComment);

        // Limpiar los campos del formulario
        commentForm.reset();
    });
});
