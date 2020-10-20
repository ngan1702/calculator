function doMath()
{
    var x = Number(frm.firstNum.value);
    var y = Number(frm.secondNum.value);
    var op = frm2.calc.value;
    
    if (op==='+')
    {
        document.getElementById('result').value = x+y;
    }
    if (op==='-')
    {
        document.getElementById('result').value = x-y;
    }
    if (op==='*')
    {
        document.getElementById('result').value = x*y;
    }
    if (op==='/')
    {
        document.getElementById('result').value = x/y;
    }
}

const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (frm.firstNum.value.trim()==='') {
    messages.push('Số thứ nhất không được để trống')
  }
  if (frm.secondNum.value.trim()==='') {
    messages.push('Số thứ hai không được để trống')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
});
