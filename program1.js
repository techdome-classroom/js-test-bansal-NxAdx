/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
        const stack = [];
    
        const openBrackets = ['(', '[', '{'];
        const closeBrackets = [')', ']', '}'];
    
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
    
            if (openBrackets.includes(char)) {
                stack.push(char);
            } else if (closeBrackets.includes(char)) {
                if (stack.length === 0) {
                    return false;
                }
                const lastOpenBracket = stack[stack.length - 1];
                const index = closeBrackets.indexOf(char);
                if (lastOpenBracket !== openBrackets[index]) {
                    return false;
                }
                stack.pop();
            }
        }
    
        return stack.length === 0;
   
};

module.exports = { isValid };
