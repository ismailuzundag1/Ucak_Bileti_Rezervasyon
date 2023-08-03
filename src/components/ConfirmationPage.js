import React from 'react';
import '../styles/confirmation.scss';

const ConfirmationPage = () => {
  // Burada bilet satın alımının başarıyla tamamlandığına dair bilgiler gösterilebilir.
  return (
    <div className='conf-container'>
    <div className='confirmation-container '>
      <h2>Ödeme Onayı</h2>
      <p>Bilet satın alımı başarıyla tamamlandı.</p>
      <p>Rezervasyon numaranız: 123456789</p>
    </div>
    </div>
  );
};

export default ConfirmationPage;