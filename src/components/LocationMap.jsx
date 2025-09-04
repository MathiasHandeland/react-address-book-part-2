// src/components/ContactMap.js
function LocationMap({ latitude, longitude }) {
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  return (
    <div style={{ width: '100%', height: '300px', margin: '1rem 0' }}>
      <iframe
        title="Contact Location"
        width="100%"
        height="100%"
        src={mapUrl}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default LocationMap;
