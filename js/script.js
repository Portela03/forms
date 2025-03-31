document.addEventListener('DOMContentLoaded', function() {

    const mensagemTextarea = document.getElementById('mensagem');
    const contadorCaracteres = document.querySelector('.contador-caracteres');
    
    mensagemTextarea.addEventListener('input', function() {
        const caracteresDigitados = this.value.length;
        const limiteCaracteres = this.getAttribute('maxlength');
        contadorCaracteres.textContent = `${caracteresDigitados}/${limiteCaracteres} caracteres`;
    });
    
 
    const form = document.getElementById('inscricao-form');
    
    form.addEventListener('submit', function(event) {
      
        
        
        const telefone = document.getElementById('telefone').value;
        if (!/^\d{10,11}$/.test(telefone.replace(/\D/g, ''))) {
            alert('Por favor, insira um número de telefone válido (10 ou 11 dígitos)');
            event.preventDefault();
            return;
        }
        

        alert('Formulário enviado com sucesso!');
    });
});