import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/flight-results.scss';
import { useHistory } from 'react-router-dom';

const FlightResultsPage = () => {
  const flightResults = useSelector((state) => state.flightResults);
  const history = useHistory();

  const handleSelectFlight = () => {
    // Seçilen uçuşa göre yolcu bilgileri sayfasına yönlendir
    history.push('/passenger-info');
  };

  return (
    <div className='bg-container'>
    <div className='flight-results-page'>
      <h2>Uçuş Sonuçları</h2>
      {flightResults.length === 0 ? (
        <p>Uçuş Bulunamadı</p>
      ) : (
        <div className='flight-card'>
        <ul>
          {flightResults.map((flight, index) => (
            <li key={index}>
              Kalkış Saati: {flight.depTime}, Varış Saati: {flight.arrTime}, Havayolu: {flight.airline}, Fiyat: {flight.priceDetail.basePrice.amount + " " + flight.priceDetail.basePrice.currency}
            </li>
          ))}
        </ul>
        <button onClick={handleSelectFlight}>Uçuşu Seç</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default FlightResultsPage;