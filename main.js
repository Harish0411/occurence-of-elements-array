let array = [3,6,7,9,7,10,33,3,12,54,7,23];
array.sort();

let dup;

for(i=0; i<array.length-1; i++){
var k=1;
    for(j=i+1; j<array.length; j++){
	     if(array[i] == array[j]){
		     k++;
		}
		else{
		   break;
		 }
		
     }
	 console.log(`${array[i]} => ${k}`);
		 i+=(k-1);
}
console.log(k);
console.log(array);

