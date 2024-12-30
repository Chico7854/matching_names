export class Compatibility {
    name1: string;
    name2: string;
    isPerfectCouple: boolean;

    constructor(name1: string, name2: string) {
        this.name1 = name1;
        this.name2 = name2;

        this.isPerfectCouple = this.checkPerfectCouple();
    }

    randomizeCompatibility(): number {
        return Math.round((Math.random()) * 100);
    }

    checkPerfectCouple(): boolean {
        let isPerfectCouple = false;
        if (this.name1 === "nicolly" || this.name1 === "nic") {
            if (this.name2 === "lucas") {
                isPerfectCouple = true;
            }
        }
        if (this.name2 === "nicolly" || this.name1 === "nic") {
            if (this.name1 === "lucas") {
                isPerfectCouple = true;
            }
        }
        return isPerfectCouple;
    }
}