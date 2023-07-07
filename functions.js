function enviar() {
    var nome = document.getElementById("nomeid");
    var fone = document.getElementById("foneid");
    var email = document.getElementById("emailid");
    var ok = true

    // Validando nome
    if (nome.value == "") {
        alert('Nome não informado')
        ok = false
    }
    // Validando telefone
    var regexFone = /(\(\d{2}\)\s*)?\d{4,5}[-\s]?\d{4}/;
    if (!regexFone.test(fone.value)) {
        alert('Número de telefone inválido')
        ok = false
    }
    // Validando e-mail
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value) && email.value != "") {
        alert('E-mail inválido')
        ok = false
    }

    if (ok) {
        alert('Obrigado, ' + nome.value + '! Retornaremos o quanto antes e estaremos orando por você!');
    }
}

function selecionarVideo() {
    const sv = document.getElementById('selectvideo')
    src = [
        'https://www.youtube.com/embed/imL3BlW_LFs',
        'https://www.youtube.com/embed/UsECakTyYmU',
        'https://www.youtube.com/embed/Fdfk-s2_rjA',
    ]

    var v = document.getElementById('video');
    var url = src[sv.value]
    v.setAttribute("src", url);
}