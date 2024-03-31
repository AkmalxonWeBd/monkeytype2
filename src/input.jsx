import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file for styling

const RandomWordInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [placeholderWord, setPlaceholderWord] = useState('');
  const randomWords = ['uyqu', 'hidoyat', 'mumkin', 'kechikish', 'boshqaruv', 'tozalash',
    'davlat', 'tiklash', 'audit', 'ruxsat',
    'manzil', 'amaliyot', 'kurashmoq', "o'pish", "o'rindiq", 'trikotaj', 'yuklamoq', 'telefon', 'o\'z oladi', 'qovur', 'sass', 'uchun qilmoq', 'retch',
    'toshib ketish', 'sass', 'davo', 'sass', 'saralash', 'yig\'lamoq', 'davolash', 'topildi',
    'o\'rindiq', 'skrab', 'yuk', 'eymoq', 'parchalash', 'xum', 'jumla', 'mos', 'majburlamoq',
    'maqtanmoq', 'masala', 'mew', 'qon ketish', 'qo\'yish', 'shoshqaloqlik', 'singdirmoq',
    'tarqatish', 'musobaqa', 'keyin', 'qarang', 'jazolash', 'tozalash', 'boshqaruv', 'belgi',
    'qo\'rqitmoq', 'shaxsiy', 'go\'zallashtirmoq', 'masala', 'nozik', 'xum', 'yutish', 'yo\'l',
    'kashf qiling', 'egallash', 'hew', 'qaror', 'adashgan', 'yig\'ish', 'o\'ynash', 'quruq',
    'ofset', 'unut', 'almashtiring', 'taqillatish', 'aqlli', 'xafa', 'ta\'mi', 'topildi',
    'ko\'tarmoq', 'o\'tish', 'yugur'];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * randomWords.length);
    setPlaceholderWord(randomWords[randomIndex]);
  }, []);

  const handleInput = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === placeholderWord) {
      setInputValue('');
      const randomIndex = Math.floor(Math.random() * randomWords.length);
      setPlaceholderWord(randomWords[randomIndex]);
    } else {
      setInputValue(value);
    }
  };

  return (
    <div className="random-word-input-container">
      <div className="placeholder-container">
        <h1 className="random-word-placeholder">{placeholderWord}</h1>
      </div>
      <textarea
        className="random-word-textarea"
        value={inputValue}
        onChange={handleInput}
        placeholder={placeholderWord} // Placeholder tasodifiy so'zga mos keladi
        rows={12}
        cols={150}
      />
    </div>
  );
};

export default RandomWordInput;
