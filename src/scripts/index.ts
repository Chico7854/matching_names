import "../styles/styles.css";
import "../styles/reset.css";
import { Compatibility } from "./compatibility";

class App {
    static init() {
        const name1Element = document.querySelector("input[name='your-name']") as HTMLInputElement;
        const name2Element = document.querySelector("input[name='their-name']") as HTMLInputElement;
        const checkCompatibilityButton = document.querySelector("button") as HTMLButtonElement;

        checkCompatibilityButton.addEventListener("click", () => {
            const name1 = name1Element.value;
            const name2 = name2Element.value;
            name1Element.value = "";
            name2Element.value = "";

            const compatibility = new Compatibility(name1, name2);

            if (compatibility.isPerfectCouple) {
                this.updateResult(100000000000000000000000);
            } else {
                const result = compatibility.randomizeCompatibility();
                this.updateResult(result);
            }
        });
    }

    static updateResult(result: number): void {
        const resultElement = document.getElementById("result")!;
        
        const totalAnimationTime = 2000;
        const individualNumberAnimationTime = totalAnimationTime / result;
        let currentNumber = 0;

        const animation = setInterval(() => {
            resultElement.textContent = currentNumber + "%";
            currentNumber++;
            if (currentNumber === result) {
                clearInterval(animation);
            }
        }, individualNumberAnimationTime);
    }
}

App.init();