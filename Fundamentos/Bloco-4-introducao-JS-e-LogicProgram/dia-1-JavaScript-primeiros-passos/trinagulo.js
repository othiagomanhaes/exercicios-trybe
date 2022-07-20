const ang1 = 61;
const ang2 = 61;
const ang3 = 58;

let somaAng = ang1 + ang2 + ang3;



if ((ang1 > 0 && ang1 < 180) && (ang2 > 0 && ang2 < 180) && (ang3 > 0 && ang3 < 180)) {
    if (somaAng == 180) {
        console.log('true')
    }
    else {
        console.log('false') 
    }
}
else{
    console.log('false')
}


