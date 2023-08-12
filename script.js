document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector('.display');
    const calculator = document.querySelector('.calculator');
    const buttons = Array.from(document.querySelectorAll('.button'));

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            handleButtonClick(event);
            shuffleButtons();
        });
    });

    function handleButtonClick(event) {
        const value = event.target.textContent;

        switch (value) {
            case 'C':
                display.textContent = '0';
                break;
            case '=':
                try {
                    display.textContent = eval(display.textContent);
                } catch (error) {
                    display.textContent = 'Error';
                }
                break;
            case '←':
                if (display.textContent.length === 1 || (display.textContent.length === 2 && display.textContent.startsWith('-'))) {
                    display.textContent = '0';
                } else {
                    display.textContent = display.textContent.slice(0, -1);
                }
                break;
            default:
                if (display.textContent === '0' || display.textContent === 'Error') {
                    display.textContent = value;
                } else {
                    display.textContent += value;
                }
                break;
        }
    }

    function shuffleButtons() {
        const shuffledButtons = buttons.sort(() => Math.random() - 0.5);

        // Ensure the display stays at the top
        calculator.appendChild(display);

        // Append the shuffled buttons
        shuffledButtons.forEach(button => calculator.appendChild(button));
    }
});
