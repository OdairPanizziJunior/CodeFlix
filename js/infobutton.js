  //MODIFICA O FORMATO PADRÃO DOS ALERTAS EM NAVEGADORES
  
  
  // Captura o botão "INFO" pelo seletor de classe e adiciona um evento de clique a ele
  document.querySelector('.botao-info').addEventListener('click', function() {
    // Mostra o modal quando o botão "INFO" for clicado
    document.getElementById('custom-modal').style.display = 'block';
  });

  // Captura o botão de fechar do modal e adiciona um evento de clique para ocultá-lo
  document.querySelector('.close-btn').addEventListener('click', function() {
    // Oculta o modal quando o botão de fechar for clicado
    document.getElementById('custom-modal').style.display = 'none';
  });

