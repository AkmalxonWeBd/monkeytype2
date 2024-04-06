import React, { useState, useEffect } from 'react';
import './App.css'; // Styling uchun CSS faylini import qiling

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
    const randomIndex = Math.floor(Math.random() * (randomWords.length - 15)); // 15 ta yoki undan ko'p so'z tanlash uchun
    const selectedWords = randomWords.slice(randomIndex, randomIndex + 15); // Tanlangan so'zlar
    const placeholder = addPunctuation(selectedWords); // Add punctuation to selected words
    setPlaceholderWord(placeholder);
  }, []);

  const addPunctuation = (words) => {
    const punctuations = [',', '.', '!', '?'];
    const punctuatedWords = words.map(() => {
      const randomIndex = Math.floor(Math.random() * punctuations.length);
      return punctuations[randomIndex];
    });
    return words.map((word, index) => {
      return index === Math.floor(Math.random() * words.length) ? word + punctuatedWords[index] : word;
    }).join(' ');
  };

  const handleInput = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === placeholderWord) {
      setInputValue('');
      const randomIndex = Math.floor(Math.random() * (randomWords.length - 15));
      const selectedWords = randomWords.slice(randomIndex, randomIndex + 15);
      const placeholder = addPunctuation(selectedWords); // Add punctuation to selected words
      setPlaceholderWord(placeholder);
    } else {
      setInputValue(value);
    }
  };

  return (
    <div className="random-word-input-container">
      <div className="placeholder-container">
        <h1 className={inputValue === placeholderWord ? "random-word-placeholder-red" : "random-word-placeholder"}>{placeholderWord}</h1>
      </div>
      <textarea
        className="random-word-textarea"
        value={inputValue}
        onChange={handleInput}
        placeholder={placeholderWord}
        rows={12}
        cols={150}
      />
    </div>
  );
};

export default RandomWordInput;
