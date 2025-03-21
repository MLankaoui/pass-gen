const password = document.querySelector("#password");
const passLength = document.querySelector("#pass-length");

const passElements = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'
];


const generateRandomNumber = () => {
    return Math.floor(Math.random() * passElements.length);
}

const createPassword = () => {
    const password = [];
    for (let i = 0; i < passLength.value; i++) {
        password[i] = passElements[generateRandomNumber()];
    }

    return password.join("");
}

const givePassword = () => {
    password.textContent = createPassword();
    passLength.value = "";
}