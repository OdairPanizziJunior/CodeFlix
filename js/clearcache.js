// Defina a função para limpar o cache
function clearCache() {
    if ('caches' in window) {
      caches.keys().then(function (cacheNames) {
        cacheNames.forEach(function (cacheName) {
          caches.delete(cacheName);
        });
        console.log('Cache limpo com sucesso.');
      });
    } else {
      console.log('O navegador não suporta a API de Cache.');
    }
  }
  
  // Chame a função clearCache() no evento de carregamento da página
  window.addEventListener('load', function () {
    clearCache();
  });
  