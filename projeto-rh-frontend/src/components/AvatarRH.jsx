import React, { useEffect } from 'react';

const AvatarRH = () => {
  useEffect(() => {
    const msg = new SpeechSynthesisUtterance("Olá! Vamos começar?");
    speechSynthesis.speak(msg);
  }, []);

  return (
    <div>
      <img src="https://i.ibb.co/XkdYMgZ/avatar-rh.png" alt="Avatar RH" style={{ width: 200 }} />
    </div>
  );
};

export default AvatarRH;
