jQuery(document).ready(($) => {
    $('#myForm').on('input', () => {
        $('#myForm').val(
            $('#myForm').val()
                .replace(/^[^\-|^\d]/g, '') // on remplace par vide si ne commence pas par nombre ou un moins
                .replace(/^-+/g, '-') // si on trouve 2 moins au début on le remplace par un seul
                .replace(/\.+/g, '.') // si on trouve plusieurs moins au mileu d'un nombre, on l'efface
                .replace(/(^[-]?[\d]{2})[\d]/g, '$1') // pas plus de 2 nombre avant le point
                .replace(/(\.[\d]{7})./g, '$1') // pas plus de 7 chiffres après le point
                .replace(/[^\d|\.|-]/g, '') // enléve tous les caractères différents de . - et nombre
                .replace(/(\.)[^\d]/g, '$1') // enléve tous les caratères après un point sauf un nombre
                .replace(/([\d])-/g, '$1') // enléve le moins après un chiffre
        );
    });
})