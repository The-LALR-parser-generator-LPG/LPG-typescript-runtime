export class UnknownStreamType extends Error {
    private static serialVersionUID: number = 1;
    private str: string;
   
    constructor(str: string = null) {
        super();
        if (!str) {
            this.str = "UnknownStreamType";
        } else {
            this.str = str;
        }
    }
    public toString(): string {
        return this.str;
    }
};