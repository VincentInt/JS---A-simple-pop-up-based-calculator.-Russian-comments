function CheckPrompt() {//Проверяет переменные на пустоту или false
  
  if (OneNumber == false) {
    return alert("Ты не ввел число")
  }
  else if (TwoNumber == false) {
    return alert("Ты не ввел число")
} return CheckPromptTotal = true //Вернет true для работы дальнейшего кода
}

function TotalNumberMove() {//Дает выбор действий с помощью окна
  if(CheckPromptTotal == true){
  if (confirm("Вы хотите сложить число(+)")) {
    return TotalNum = OneNumber + TwoNumber
  }
  else if (confirm("Вы хотите вычесть число(-)")) {
    return TotalNum = OneNumber - TwoNumber
  }
  else if (confirm("Вы хотите умножить число(*)")) {
    return TotalNum = OneNumber * TwoNumber
  }
  else if (confirm("Вы хотите разделить число(/)")) {
    return TotalNum = OneNumber / TwoNumber
  }
}return TotalNum = false// confirm в случае отказа выдаст false
}

function FinallCheckNum() {//Проверяет на ошибки или на присутствие букв алфавита
  if(TotalNum !== false){//Если вы отказались выберать действия в TotalNumberMove(), то эта функция у вас не заработает
  if (TotalNum !== NaN) {
  return  alert("Ты конченный идиот, нахуя ты прописал букву...")
  }
  return alert(TotalNum)
}return alert("Ты долбаеб")
}


function PromptNumberFunc() {//Получает нужные данные и вызывает функции
One = prompt("Введите первое число","2")
Two = prompt("Введите второе число","2")
OneNumber = Number(One)
TwoNumber = Number(Two)

      CheckPrompt()//Вызывает проверку на наличее содержимого в составе переменных
      TotalNumberMove()//Дает выбор действий, умножение, деление и тд
      FinallCheckNum()//финальная проверка на ошибки или Nan
}

PromptNumberFunc()//Начало работы кода
