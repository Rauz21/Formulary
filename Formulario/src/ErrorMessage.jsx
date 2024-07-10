
import React from 'react';

const ErrorMessage = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#f8d7da',
      color: '#721c24',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: 0,
    },
    message: {
      fontSize: '4rem',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.message}>Error: Por favor entre a su formulario</p>
    </div>
  );
};

export default ErrorMessage;
