import "../styles/reset.css";
import "../styles/styles.css";

import { Compatibility } from "./compatibility";

class App {
    static name1Element = document.querySelector("input[name='your-name']") as HTMLInputElement;
    static name2Element = document.querySelector("input[name='their-name']") as HTMLInputElement;

    static init() {
        const checkCompatibilityButton = document.querySelector("button") as HTMLButtonElement;

        checkCompatibilityButton.addEventListener("click", App.calculateCompatibilityHandler);
        document.addEventListener("keyup", event => {
            if (event.key === "Enter") {
                App.calculateCompatibilityHandler();
            }
        })
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

    static checkInput(): boolean {
        if (App.name1Element.value === "" || App.name2Element.value === "") {
            alert("Preencha os nomes por favor.");
            return false;
        } else {
            return true;
        }
    }

    static filterName(name: string): string {
        let firstName = name.split(" ")[0];
        firstName = firstName.toLowerCase();
        return firstName;
    }

    static calculateCompatibilityHandler() {
        if (!App.checkInput()) return;

        const name1 = App.filterName(App.name1Element.value);
        const name2 = App.filterName(App.name2Element.value);
        App.name1Element.value = "";
        App.name2Element.value = "";   

        const compatibility = new Compatibility(name1, name2);

        if (compatibility.isPerfectCouple) {
            App.updateResult(100000000000000000000000);
        } else {
            const result = compatibility.randomizeCompatibility();
            App.updateResult(result);
        }
    }
}

App.init();