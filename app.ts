// export {}

let i1 = document.getElementById("i1") as HTMLInputElement;
let i2 = document.getElementById("i2") as HTMLInputElement;
let b = document.getElementById("submit") as HTMLInputElement;
let s1 = document.getElementById("s1") as HTMLSpanElement;
let s2 = document.getElementById("s2") as HTMLSpanElement;

interface ValidationSuccess{
    isValid : true;
    reason : "Success!";
}
interface ValidationFailure{
    isValid : false;
    reason :   "Invalid Email-id" | "Invalid Password";
}
type ValidationResult  = ValidationSuccess | ValidationFailure;
const Result = (result : ValidationResult) => {
     if(result.isValid){
        s2.innerHTML = "";
        s1.innerHTML = "";
        i1.value = "";
        i2.value = "";
        i1.style.border = "2px solid black";
        i2.style.border = "2px solid black";
        confirm(`${result.reason}`); 

     }else{
        switch(result.reason)
        {

        case "Invalid Email-id":
            s2.innerHTML = "";
            s2.style.background = "none";
            s1.innerHTML = `* ${result.reason}`;
            s1.style.color = "red";
            s1.style.marginTop = "5px";
            s1.style.width = "345px";
            s1.style.fontSize = "18px";
            s1.style.background = "rgba(255,0,0,0.1)";
            s1.style.textAlign = "center";
            s1.style.padding = "5px 8px";
            s1.style.borderRadius ="3px";
            i1.style.border = "2px solid red";
            i2.style.border = "2px solid black";
        break;
        case "Invalid Password":
            s1.innerHTML = "";
            s1.style.background = "none";
            s2.innerHTML = `* ${result.reason}`;
            s2.style.color = "red";
            s2.style.marginTop = '5px';
            s2.style.width = "345px";
            s2.style.fontSize = "18px";
            s2.style.background = "rgba(255,0,0,0.1)";
            s2.style.textAlign = "center";
            // s2.style.padding = "5px 8px";
            s2.style.borderRadius ="3px";
            i1.style.border = "2px solid black";
            i2.style.border = "2px solid red";
        break;
        }
            
            


     }

}
const Validate = (v1 : string, v2 : string) => {
 
  const email : RegExp = /^([a-zA-Z0-9\.-])+@([a-zA-Z0-9])+.([a-z]{2,20})(.[a-z]{2,10})?$/;
  const username : RegExp = /^[a-zA-Z]{5,10}$/;
    if(!(email.test(v1))){
            
        Result({isValid : false, reason : "Invalid Email-id"});
    } else if (!(username.test(v2))) {
        Result({isValid : false, reason : "Invalid Password"});
    } else {
        Result({isValid : true, reason : "Success!"});
    }

};

b.addEventListener("click",(e:Event)=>{
   e.preventDefault();
   let v1 : string = i1.value;
   let v2 : string = i2.value;
   Validate(v1,v2);
});