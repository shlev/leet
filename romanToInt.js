//14
export function romanToInt(s) {
    let result = 0;
    let add;
    for (let i=0; i<s.length; i++) {
        let letter = s.charAt(i);
        let next = i+1<s.length ? s.charAt(i+1) : ''; 
        switch (letter) {
            case 'M': 
                add = 1000;
                break;
            case 'D': 
                add = 500;
                break;
            case 'C':
                add = next=='M' ? 900 : next=='D' ? 400: 100;
                if ( add !=100) i++;
                break;
            case 'L':
                add = '50'
                break;
            case 'X':
                add = next=='C' ? 90 : next=='L' ? 40: 10;
                if ( add !=10) i++;
                break;
            case 'V':
                add = 5;
                break;
            case 'I':
                add = (next=='X') ? 9 : (next=='V') ? 4: 1;
                if ( add !=1) i++;
                break;
        }
        result +=add;
    }
    
    return result;
};