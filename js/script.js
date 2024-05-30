function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        //alert('Texto copiado al portapapeles: ' + text);
    }, function(err) {
        console.error('Error al copiar al portapapeles: ', err);
    });
}