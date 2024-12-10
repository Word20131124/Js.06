let fruits = ['olma', 'anor', 'shaftoli', 'uzum']

alert(`boshlanishida arrayning uzunligi: ${fruits.length}`)
let pod = confirm('sizning arrayingizdan malumotlarni olib tashlamoqchimiz')
if (pod == true) {
    fruits.pop()
    alert(`arrayning uzunligi ${fruits.length}`)
} else {
    alert(`arrayning uzunligi: ${fruits.length}`)
}

