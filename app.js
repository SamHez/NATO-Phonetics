new Vue({
  el: '#app',
  data: {
    input: '',
    },
    computed: {
     result() {
       return this.input.split('').map(el => nato(el)).join(' ');
   }
 },
 methods: {
    clear() {
      this.input = '';
    },
  }
})

const nato = letter => {
  const re = /[a-zA-Z0-9]/g;
  letter = letter.toLowerCase();
  const cases = {
    'a': 'Alpha',
    'b': 'Bravo',
    'c': 'Charlie',
    'd': 'Delta',
    'e': 'Echo',
    'f': 'Foxtrot',
    'g': 'Golf',
    'h': 'Hotel',
    'i': 'India',
    'j': 'Juliette',
    'k': 'Kilo',
    'l': 'Lima',
    'm': 'Mike',
    'n': 'November',
    'o': 'Oscar',
    'p': 'Papa',
    'q': 'Quebec',
    'r': 'Romeo',
    's': 'Sierra',
    't': 'Tango',
    'u': 'Uniform',
    'v': 'Victor',
    'w': 'Whiskey',
    'x': 'Xray',
    'y': 'Yankee',
    'z': 'Zulu',
    '0': 'Zero',
    '1': 'Won',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': '7',
    '8': 'Eight',
    '9': 'Niner',
    ' ': ' • '
  };
  if (cases[letter]) {
    return cases[letter];
  } else if (letter.search(re) === -1) {
    return '';
  }
};