import React, { useState, useEffect } from 'react';

function StringResponseComponent() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://172.18.128.1:8080/import/api/welcome'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.text(); // Use .text() for string response
        setMessage(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on component mount

  if (loading) {
    return <div>Loading message...</div>;
  }

  if (error) {
    return <div>Fatal Error: {error}</div>;
  }

  return (
    <div>
      <h2>API String Response:</h2>
      <p>{message}</p>
    </div>
  );
}

export default StringResponseComponent;