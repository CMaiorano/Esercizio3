const user = {
  url: 'www.fabiobiondi.io',
  author: 'Fabio Biondi',
};

/**
 * ESERCIZIO
 *
 * Utilizza il destructuring per estrarre le proprietà
 * url e author dall'oggetto user.
 *
 * GOAL:
 * Visualizza in console la seguente stringa utilizzando i template literals
 * "My name is Fabio Biondi (www.fabiobiondi.io)"
 */

// TIP 1: const { prop } = obj:
// TIP 2: Use template strings to concat them

const {url:u, author:a} = user;
export const result = `My name is ${a} (${u})`; // <== MODIFICA QUESTA LINEA

console.log(result);
console.log(user.author)
document.querySelector('#output').innerHTML = result;
