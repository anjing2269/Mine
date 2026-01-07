'use strict';

(() => {
  const copyButton = document.getElementById('copy-button');
  const copyTargetInput = document.getElementById('result-text');

  copyButton.addEventListener('click', copyToClipboard);

  function copyToClipboard() {
    const copyTarget = copyTargetInput.value;

    navigator.clipboard.writeText(copyTarget).then(
      () => {
        copyButton.innerText = 'コピーしました';
        setTimeout(copyTimer, 2000);
      },
      () => {
        console.log('コピーに失敗しました');
      }
    );
  }

  function copyTimer() {
    copyButton.innerText = 'テキストをコピー';
  }
})();