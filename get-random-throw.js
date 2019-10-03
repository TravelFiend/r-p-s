export const getRandomThrow = () => {
    const randomNumber = Math.round(Math.random() * 2);
    if (randomNumber === 0){
        return 'rock';
    } else if (randomNumber === 1){
        return 'paper';
    }
    return 'scissors';
};

const checkResult = (player, computer) => {
    if (player === computer){
        return 'DRAW';
    } else if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')){
        return 'WIN';
    } else {
        return 'LOSE';
    }
};

export default checkResult;