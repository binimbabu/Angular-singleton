Singleton.ts


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



Creating one instance using singleton and using every components globally this instance.




App.component.html


<input type="text" [(ngModel)] = "data"/>
<button (click)="sendData()">Send Data</button>
<app-child></app-child>




app.component.ts

data : string = '';
sendData(){
Singleton.getInstance().setData(this.data);
}



Here ‘   Singleton.getInstance().setData("Bini");   ’  cretates a Singleton instnace using Singleton.getInstnace() and sets the value to Bini.






Child.component.ts


value: string = '';
getInstnaceData(){
this.value = Singleton.getInstance().getData();
}



Here in the child.ts file (   Singleton.getInstance().getData();  )  the Singleton.getInstance() will not create another instance since its the second call and the first call of creating instance is called in app.component.ts file ( where instance was created) . In child.ts it passes the reference of singleton created.


Here singleton is acting as a bridge between transporting data from one class to another class. Singleton is acting as a global state. Singleton instance is only for a period of time because when we refresh the browser then the value is erased.
