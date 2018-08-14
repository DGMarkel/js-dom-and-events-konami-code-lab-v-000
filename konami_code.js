const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
        let i = 0
  document.body.addEventListener('keydown', function(e) {
      const key = parseInt(e.which || e.detail);

        console.log(`${key}`)
      if (key === code[i]) {
        if (i < code.length) {
          console.log(`${code[i]}`)
          i++;
        }else if (i === code.length) {
          alert("Congratulations!")
          i = 0;
        }else {
          i = 0
        }


}
})
}
