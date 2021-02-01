export class Quote {

    showQuote?:boolean;

    constructor (
        public name?: string,
        public quote?: string,
        public author?: string,
        public datePosted?: Date,
    )
    {
        this.showQuote=false;
    }
}
