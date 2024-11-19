window.addEventListener('load', function () {
    const toplamUcret = parseFloat(document.getElementById('toplam-ucret').textContent.replace('₺', ''));

    // Yük bilgilerini frontend'e geçirme
    const yükTipi = localStorage.getItem('yükTipi') || 'Acil Yük';
    const açıklama = localStorage.getItem('açıklama') || 'Yük ekleme işlemi tamamlandı';
    const ücret = localStorage.getItem('ucret') || '₺0.00';

    document.getElementById('yük-tip').textContent = yükTipi;
    document.getElementById('yük-aciklama').textContent = açıklama;
    document.getElementById('toplam-ucret').textContent = ücret;

    // İyzico ödeme işlemi başlatılacak buton
    document.getElementById('iyzico-payment-btn').addEventListener('click', function () {
        if (toplamUcret > 0) {
            const cardNumber = document.getElementById('cardNumber').value;
            const expiryDate = document.getElementById('expiryDate').value;
            const cvc = document.getElementById('cvc').value;

            if (cardNumber && expiryDate && cvc) {
                // Backend'ten ödeme formu token'ını al
                fetch('https://your-backend-endpoint.com/create_payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        amount: toplamUcret * 100, // Iyzico için kuruş cinsinden ücret gönderiyoruz
                        currency: 'TRY',
                        basketId: '1', // İhtiyaca göre ayarlanabilir
                        paymentGroup: 'PRODUCT', // Ürün tipi
                        buyerEmail: 'customer@example.com', // Müşteri bilgileri
                        cardNumber: cardNumber,
                        expiryDate: expiryDate,
                        cvc: cvc
                    })
                })
                    .then(response => response.json())
                    .then(paymentData => {
                        // İyzico Checkout formunu başlat
                        const iyzico = new Iyzipos();
                        iyzico.createPayment(paymentData).then(function (paymentResult) {
                            if (paymentResult.status === 'success') {
                                alert('Ödeme başarılı!');
                            } else {
                                alert('Ödeme işlemi başarısız oldu.');
                            }
                        });
                    })
                    .catch(error => {
                        console.error('Ödeme işlemi hatası:', error);
                    });
            } else {
                alert('Lütfen kart bilgilerinizi eksiksiz girin.');
            }
        } else {
            alert("Bu işlem ücretsizdir, ödeme gerekmiyor.");
        }
    });
});
