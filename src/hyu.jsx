import React, { useState, useEffect } from 'react';

function Test() {
    const [randomWords, setRandomWords] = useState('');
    const [currentInput, setCurrentInput] = useState('');
    const [inputError, setInputError] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [gameDuration, setGameDuration] = useState(30);
    const [numWords, setNumWords] = useState(20);
    const [highestWPM, setHighestWPM] = useState(0);

    useEffect(() => {
        if (isStarted && timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 || wordCount === numWords) {
            endGame();
        }
    }, [isStarted, timeLeft, wordCount, numWords]);

    useEffect(() => {
        if (isStarted && wordCount === 0) {
            setStartTime(Date.now());
        }
    }, [wordCount, isStarted]);

    const startGame = () => {
        setIsStarted(true);
        setTimeLeft(gameDuration);
        generateRandomWords();
    };

    const generateRandomWords = () => {
        const wordsArray = "bitta yaxshi real bir maktab emas set ular davlat yuqori hayot haqida o'ylash va kelish emas, balki belgilangan nuqta uchun nima istasa ham bo'lishi mumkin, chunki tartib bilan bola maktab haqida narsa hech qachon tutmang tartibni toping har bir dastur o'rtasida ham tartibni toping ish tugaydi siz uyingiz atrofida esa joy muammosi. oxiri qiziqish boshlanadi esa ommaga yoki qayerda vaqt ko'rgan bo'lsa qiziqish kuchayadi oxirigacha o'ylaysan ikkalasi ham bir bola bir xil ko'z sen oralarida yo'lda kimga yana yaxshi haqiqatga bosh ostidan ko'ra real bo'ladi mumkin ba'zi yozadi lekin har biri bilan kech biladi chunki bu faqat har bir o'zgarish shakli uchun millatni joylashtiramiz, biz dunyo bilan qiziqamiz, shuning uchun tartib yoki ko'proq ochiqroq yugurish uchun katta yozish aylanish hech qachon ochilmaydi har bir o'zgarish hali ham eski ushlab turish kerak ko'rib chiqish satr orqali berish faqat qoldirish kerak bo'lsa, nima o'rnatilgan raqam qismi shakli buyuk qarshi istaydi. muammo bo'lishi mumkin, chunki bosh shunday birinchi bu yerda albatta yordam bo'lardi yil birinchi oxiri istayman ham haqiqat ommaviy uzun so'z pastga ham uzoq uchun yangi burilish qarshi qarshi chunki yozish ko'rinadi chiziq qiziqish qo'ng'iroq emas, agar chiziq narsa nima ish odamlar yo'l eski deb hisoblashi mumkin tark ushlab qolish kerak hayot o'rtasida ko'p joy bo'lishi mumkin, agar kimga kerak bo'lsa shunday dastur, bunda bola tugaydigan odamlardan baland odamlarga o'zgarib turadi, odamlarni topadi, ammo kichik yangi generalga aylanadi, u buni qiladi, bu esa oxirgi marta eskirishi mumkin edi, yana bir qo'lni ko'p ko'zni yaxshi ishlamaydi va lekin bilan. yaxshi bor oxirgi o'ylayman atrofida raqam kabi foydalanish mumkin hech qachon beri dunyoga kerak bo'lgan narsa biz atrofida qism ko'rsatish yangi kelgan ko'rinadi esa ba'zi va hali kichik bo'lgani uchun bu siz umumiy qaysi joylashadi ko'rinadi buyurtma shakli qanday haqida faqat ular holati bilan kech foydalanish ham erta juda olib keladi umumiy ko'rinib turibdiki, agar so'ralsa, bunday qiziqish so'zni to'g'ri his eting, qanday qilib tizim haqida bunday o'rtasida kech istayman haqiqatni ko'rsatish muammosi turish yangi aytmoqchi bo'lgan etakchi kichik bo'lsa-da, katta jamoatchilik tashqarisiga ko'z bilan ko'chiring. beri qiziqish shuning yuz tartib maktab yaxshi eng ko'p emas muammo guruh yugurish u kech boshqa muammo real shakli faqat yuqori hech kim ostida nima faqat yuqori har bir juda oxiri nuqtaga raqam bola orqali beradi, shuning uchun bu katta qarang olish formasini ham barcha o'sha kurs haqida davomida ishlash u hali ham shunday rejalashtirmoqdaki, pastga qaraydi, kim yo'lni rejalashtirayotganiga qaraydi, chunki u dunyo bo'ylab hammaga qarshi keladi, chunki bu juda oz sonli bo'lsa-da, eski yo'ldan katta bo'lgan uyni olib ketishni anglatadi. back own little about he develop of do over help day house stand present another by the few come that down last or use say take every even governround play around some line back under some line u o‘ylaydi, hatto qachongacha maktab o‘rtasida haqiqiy muammoni qilsa ham. hammaga boshqa yaxshiliklardan bo'lishi mumkin dunyo narsa deb atash mumkin hayot burilish u ko'rish so'nggi muammo ko'rsatgandan so'ng istayman kerak eski narsa boshqa davomida yana bo'lish kerak bo'lish hozirdan kelib chiqqan hisobga olish hozir soni aytish hayot qiziqish tizimiga faqat guruh dunyo bir xil davlat maktab bitta muammo o'rtasida uchun navbat bilan juda ko'z qarshi yugurish ikkala hali hammasi borish kerak, shunday qilib o'ynagandan keyin ko'z oz bo'lishi kerak, buning ortidan bu ikkala ko'p uy ham maktab bo'lib, u haqiqiy va haqiqiy soni bilan vaqtni anglatishi mumkin, deb his oxirida so'rang rejasi kel navbat bilan hamma boshi oshirish u hozirgi ko'paytirish foydalanish stenddan keyin ko'rish buyurtma etakchiga qaraganda tizim bu erda so'rang qarash nuqtasi oz ham real qo'lsiz ayting burilish nuqtasi kichik tizimda o'rnatilgan lekin uy bo'lishi ko'rsatish yangi yana pastga tush, chunki shou yuzi bola haqida bilaman odam katta dastur qanday ustidan dunyodan narsa bo'lishi mumkin bo'lgan paytda millat stend qismi yugurib ko'ring ko'p tizimi buyurtma ba'zi bir dastur siz ajoyib yozishingiz mumkin kun, shuningdek, u har qanday joyda bolaning kech yuzi yana yugurib, deb qo'ng'iroq yuqori tomonidan kech oz degani hech qachon boshqa hech qachon tark etmaydi, chunki kunga qarshi ommaviy uzun raqam haqida so'z juda ko'p keyin ham ochiq o'zgartirish kerak".split(" ");
        const selectedWords = [];
        while (selectedWords.length < numWords) {
            const randomIndex = Math.floor(Math.random() * wordsArray.length);
            selectedWords.push(wordsArray[randomIndex]);
            wordsArray.splice(randomIndex, 1);
        }
        setRandomWords(selectedWords.join(" "));
    };

    const handleInputChange = (e) => {
        const input = e.target.value.trim();
        setCurrentInput(input);
    };

    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (currentInput.trim() === '') {
                setInputError(true);
            } else {
                const wordsArray = randomWords.split(' ');
                const firstWord = wordsArray[0];
                if (firstWord === currentInput) {
                    setCurrentInput('');
                    setInputError(false);
                    setWordCount(prevWordCount => prevWordCount + 1);
                    if (wordCount === numWords - 1) {
                        endGame();
                    } else {
                        setRandomWords(wordsArray.slice(1).join(' '));
                    }
                } else {
                    setInputError(true);
                }
            }
        }
    };

    const endGame = () => {
        setIsStarted(false);
        const wpm = calculateWPM();
        if (wpm > highestWPM) {
            setHighestWPM(wpm);
            alert(`Oyin tugadi! Siz toplagan WPM: ${wpm}. Eng yuqori WPM: ${highestWPM}`);
        } else {
            alert(`Oyin tugadi! Siz toplagan WPM: ${wpm}`);
        }
        setCurrentInput('');
        setWordCount(0);
    };

    const handleNewGameClick = () => {
        generateRandomWords();
        setCurrentInput('');
        setWordCount(0);
        setTimeLeft(gameDuration);
    };

    const calculateWPM = () => {
        const elapsedTimeInSeconds = (Date.now() - startTime) / 1000;
        const minutes = elapsedTimeInSeconds / 60;
        const wpm = Math.round(wordCount / minutes);
        return wpm;
    };

    return (
        <main>
            <h1>Type racer</h1>
            <div id="header">
                <div id="info">Kalan Süre: {timeLeft} sn | WPM: {calculateWPM()}</div>
                <div id="buttons">
                    {!isStarted && (
                        <>
                            <button onClick={startGame}>oyin boshlash</button>
                            <span style={{ margin: '0 10px' }}></span>
                            <button onClick={handleNewGameClick}>qaytadan</button>
                        </>
                    )}
                </div>
            </div>
            <div id="game">
                <div id="words">
                    {randomWords.split(' ').map((word, index) => (
                        <span key={index} style={{ color: word === currentInput ? 'red' : 'black' }}>{word} </span>
                    ))}
                </div>
                {inputError && <p style={{ color: 'white' }}>Bu yerda so'z qolmadi iltimos o'yinni qaytadan boshlang <br /> ≡(▔﹏▔)≡</p>}
            </div>
            <input id="cursor" type="text" onChange={handleInputChange} onKeyPress={handleInputKeyPress} value={currentInput} autoFocus />
            <div>
                <label htmlFor="numWords">So'zlar soni:</label>
                <input type="number" id="numWords" value={numWords} onChange={(e) => setNumWords(e.target.value)} />
            </div>
            <div>
                <label htmlFor="gameDuration">O'yin Davomiyligi(sec):</label>
                <input type="number" id="gameDuration" value={gameDuration} onChange={(e) => setGameDuration(e.target.value)} />
            </div>
        </main>
    );
}

export default Test;
