import React from 'react';
import { Button } from '@carbon/react';
import { useNavigate } from 'react-router-dom';

const Forbidden = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '2rem' }}>
      <h1>403 - Forbidden</h1>
      <Button onClick={() => navigate('/')}>Go Home</Button>
    </div>
  );
};

export default Forbidden;
