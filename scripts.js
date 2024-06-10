document.getElementById('generate-button').addEventListener('click', function() {
  var inputData = document.getElementById('input-data').value;
  if (inputData.trim() !== '') {
      var qrcodeContainer = document.getElementById('qrcode');
      qrcodeContainer.innerHTML = '';
      new QRCode(qrcodeContainer, {
          text: inputData,
          width: 256,
          height: 256
      });
  } else {
      alert('Vui lòng nhập dữ liệu để tạo mã QR.');
  }
});
