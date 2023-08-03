import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/passenger-info.scss';

const PassengerInfoPage = () => {
  const [passengers, setPassengers] = useState([{ name: '', birthDate: '', contact: '' }]);

  const history = useHistory();

  const handleAddPassenger = () => {
    setPassengers([...passengers, { name: '', birthDate: '', contact: '' }]);
  };

  const handleContinue = () => {
    // Burada yolcu bilgilerini işleme veya API'ye gönderme işlemleri gerçekleştirilecek.

    // Ödeme sayfasına yönlendir.
    history.push('/payment');
  };

  return (
    <div className='bg-pass-container'>
    <div className='pas-container'>
      <h2>Yolcu Bilgileri</h2>
      {passengers.map((passenger, index) => (
        <div className='passenger-input-group' key={index}>
          <label>Ad Soyad</label>
          <input
            type="text"
            placeholder="Ad Soyad"
            value={passenger.name}
            onChange={(e) =>
              setPassengers(
                passengers.map((p, i) =>
                  i === index ? { ...p, name: e.target.value } : p
                )
              )
            }
          />
          <label>Doğum Tarihi</label>
          <input
            type="date"
            value={passenger.birthDate}
            onChange={(e) =>
              setPassengers(
                passengers.map((p, i) =>
                  i === index ? { ...p, birthDate: e.target.value } : p
                )
              )
            }
          />
          <label>İletişim Bilgisi</label>
          <input
            type="text"
            placeholder="İletişim Bilgisi"
            value={passenger.contact}
            onChange={(e) =>
              setPassengers(
                passengers.map((p, i) =>
                  i === index ? { ...p, contact: e.target.value } : p
                )
              )
            }
          />
        </div>
      ))}
      <button onClick={handleAddPassenger}>Yolcu Ekle</button>
      <button onClick={handleContinue}>Devam Et</button>
    </div>
    </div>
  );
};

export default PassengerInfoPage;