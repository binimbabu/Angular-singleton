export class Singleton {
    private static instance: Singleton;
    private data!: string;
    private constructor() {

    }
    public static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    setData(message: string) {
        this.data = message;
    }
    getData(){
        return this.data;
    }
}