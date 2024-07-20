let names=["shari","aqsa","momina","areeba","dua","shiza nazeer ","shahreen","ansa","aneesa","tahmeena","maryam","arfa","mubeen","iqra","asma",]
let namestoDelete = prompt("Enter a name to delete from the array ")
let index = names.indexOf(namestoDelete);
if (index !== -1){
    names.splice(index,1);
    console.log('{namestodelete} has been deleted .');
}else{
    console.log('namestodelete is not in the array,' );
}
console.log("uploaded array of names :",names);