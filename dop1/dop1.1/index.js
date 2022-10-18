let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'

let output = javaScriptDescription.substring(0,Math.floor(javaScriptDescription.length/2))
.replaceAll('a', 'А')
.replaceAll('а', 'А')
.replaceAll(' ', '')
.repeat(3)


let symb = javaScriptDescription.charAt(Math.floor(output.length/2))

console.log(`symbol: ${symb}\nstring: ${output}`)

