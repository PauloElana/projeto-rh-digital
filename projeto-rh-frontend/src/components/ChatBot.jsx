import React, { useState } from 'react';
import AvatarRH from './AvatarRH';

const ChatBot = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const questions = [
    { key: 'name', text: 'Qual é o seu nome completo?' },
    { key: 'email', text: 'Qual é o seu e-mail?' },
    { key: 'area', text: 'Qual sua área de interesse profissional?' },
    { key: 'experience', text: 'Qual seu nível de experiência?' },
    { key: 'jobSearch', text: 'Você está buscando oportunidades de trabalho atualmente?' },
  ];

  const handleAnswer = (e) => {
    e.preventDefault();
    const input = e.target.elements.userInput.value;
    const currentKey = questions[step].key;

    const updatedAnswers = { ...answers, [currentKey]: input };
    setAnswers(updatedAnswers);
    e.target.reset();

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      fetch('http://localhost:5000/api/respostas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedAnswers)
      })
        .then(res => res.json())
        .then(data => {
          console.log("Salvo no backend:", data);
          setFinished(true);
        })
        .catch(err => console.error("Erro ao salvar:", err));
    }
  };

  return (
    <div>
      <AvatarRH />
      {!finished ? (
        <form onSubmit={handleAnswer}>
          <p>{questions[step].text}</p>
          <input name="userInput" required autoFocus />
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <p>Obrigado! Suas respostas foram enviadas com sucesso. ✅</p>
      )}
    </div>
  );
};

export default ChatBot;
