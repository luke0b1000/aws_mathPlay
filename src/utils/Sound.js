import correctmp3 from '../sound/correct.mp3';
import incorrectmp3 from '../sound/incorrect.mp3';

export function playcorrect() {
    const correctaudio = new Audio(correctmp3);
    correctaudio.play();
}
export function playincorrect() {
    const incorrectaudio = new Audio(incorrectmp3);
    incorrectaudio.play();
}
