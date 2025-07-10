'strict mode';

export function GetResultMessage(correctCount, totalQuestions) {

    const score = correctCount / totalQuestions;

    if (score === 1) {
        return `🔥 100%?! You’re literally my clone! 😍`;
    } else if (score === 0) {
        return `😅 Ei! You no know me kraa 😭`;
    } else if (score >= 0.8) {
        return `🏆 You really know me! I’m impressed. 🙌🏽`;
    } else if (score >= 0.6) {
        return `👏 Not bad! You know me quite well. 😊`;
    } else if (score >= 0.4) {
        return `🤔 Hmm... We definitely need to hang out more! 😉`;
    } else {
        return `😬 Wow... are we even friends? 😂`;
    }
}
