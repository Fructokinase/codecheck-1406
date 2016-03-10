export class Cipher {

  encrypt(str) { return str;}
  decrypt(str) { return str;}

}

export class CaesarCipher extends Cipher {
    constructor(shift){

        var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
                     'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        super();
        this.shift = shift;

        this.encrypt = function(str){
            return str.split("").map(function(char){
                if (alpha.indexOf(char) === -1) {
                    return char;
                } else {
                    return alpha[(alpha.indexOf(char) + shift)%26];
                };
                
            }).join("");
        }
        this.decrypt = function(str){
            return str.split("").map(function(char){
                if (alpha.indexOf(char) === -1) {
                    return char;
                } else {
                    if (alpha.indexOf(char) - shift%26 >= 0){
                        var index = alpha.indexOf(char) - shift%26;
                    } else {
                        var index = alpha.indexOf(char) - shift%26  + 26;
                    }
                    return alpha[index];
                };
                
            }).join("");
        }
    }

}

