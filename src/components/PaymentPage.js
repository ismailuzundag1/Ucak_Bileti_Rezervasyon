import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/payment.scss';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const history = useHistory();

  const handlePayment = () => {
    // Burada ödeme işlemleri gerçekleştirilecek.

    // Onay sayfasına yönlendir.
    history.push('/confirmation');
  };

  return (
    <div className='py-bg-container'>
    <div  className='py-container'>
      <h2>Ödeme Bilgileri</h2>
      <input
        type="text"
        placeholder="Kredi Kartı Numarası"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Son Kullanma Tarihi (AA/YY)"
        value={expirationDate}
        onChange={(e) => setExpirationDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="CVV"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
      />
      <button onClick={handlePayment}>Ödeme Yap</button>
    </div>
    </div>
  );
};

export default PaymentPage;