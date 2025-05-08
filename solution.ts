function formatString(input: string, toUpper?: boolean): string{
    
    const typeOfToUpper = toUpper??toUpper; 
    
    if(typeOfToUpper === undefined || typeOfToUpper === true)return input.toUpperCase();
    return input.toLowerCase();
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(item=>item.rating>=4);
}
function concatenateArrays<T>(...arrays: T[][]): T[]{
    const returnArray:T[]=[];
    arrays.map(array=>array.map(ele=>returnArray.push(ele))) 
    return returnArray;
}
class Vehicle{
    private _make:string; 
    public year:number;
    constructor(make:string,year:number){
        this._make=make;
        this.year=year;
    }
    public getInfo(){
        console.log(`Make: ${this._make}, Year: ${this.year}`);
    }
}

class Car extends Vehicle{
    private _model:string;
    constructor(make:string,year:number,model:string){
        super(make,year); 
        this._model = model; 
    }
    public getModel(){
        console.log(`Model: ${this._model}`);
    }

}
function processValue(value: string | number): number{
    return typeof value === 'string'?value.length:value<<1;
}
interface Product {
    name: string;
    price: number;
  }
  
function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0)return null;
    return products.sort((a,b)=>b.price-a.price)[0];
    
}
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day == 6)return "Weekend";
    else return "Weekday"
  }
  async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(n>=0)
                resolve(n*n);
            
            else
                reject("Error: Negative number not allowed");
        },1000)
    })
  }


  

