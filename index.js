const averageAge = (alumni) =>{
   let sum = alumni.reduce((total, alumni) =>  total + alumni.age,0 );
   return Math.round(sum / alumni.length )
}

const orderedAlumni = (alumni) =>{
    return alumni.sort((a,b) => b.age - a.age) 
    
}

const allUseJavaScript = (arrOfObj) =>{
    return arrOfObj.every((alumni) => alumni.language === 'JavaScript')
}

const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:23}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:24}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:23},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:22},
{name:'Carmen', job:'Marcy Lab School',language:'JavaScript', age:21},
{name:'Itzel', job:'Marcy Lab School',language:'JavaScript', age:22},
{name:'Ray', job:'Square Space',language:'JavaScript', age:21},
{name:'Jan', job:'Square Space',language:'JavaScript', age:22},
{name:'Uzma', job:'Thyme Care',language:'JavaScript', age:22}]

// console.log(averageAge(alumni))
// console.log(orderedAlumni(alumni))