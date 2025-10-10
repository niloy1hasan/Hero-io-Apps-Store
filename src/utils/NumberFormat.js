export function NumberFormat(number){
    if(number>=1000000000){
        const num = number/1000000000;
        return num+'B';
    }
    else if(number>=1000000){
        const num = number/1000000;
        return num+'M';
    } else if(number>1000){
        const num = number/1000;
        return num+'k';
    } else return number;
}