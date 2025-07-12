import { useState, useEffect } from 'react';

import './AnimatedText.scss';

const FADE_INTERVAL_MS = 1000;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
const WORDS_TO_ANIMATE = ['הודעה 1 ', 'הודעה 2 ', 'הודעה 3 ', 'הודעה 4 '];

export const AnimatedText = () => {
    const [fadeProp, setFadeProp] = useState({ fade: 'fade-in' });
    const [wordOrder, setWordOrder] = useState(0);

    useEffect(() => {
        const fadeTimeout = setInterval(() => {
            fadeProp.fade === 'fade-in'
                ? setFadeProp({ fade: 'fade-out' })
                : setFadeProp({ fade: 'fade-in' });
        }, FADE_INTERVAL_MS);

        return () => clearInterval(fadeTimeout);
    }, [fadeProp]);

    useEffect(() => {
        const wordTimeout = setInterval(() => {
            setWordOrder(
                prevWordOrder => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length,
            );
        }, WORD_CHANGE_INTERVAL_MS);
        return () => clearInterval(wordTimeout);
    }, []);

    return (
        <div className="animatedText">
            <span className={fadeProp.fade}>{WORDS_TO_ANIMATE[wordOrder]}</span>
        </div>
    );
};
