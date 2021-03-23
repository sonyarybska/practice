
  /*1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
    При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.*/

    /*
    str='Привет';
    num=123;
    flag=true;
    txt='true';
    console.log(typeof str);
    console.log(typeof num);
    console.log(typeof flag);
    console.log(typeof txt);
    */


    /*2. Создайте переменные a1, a2, a3, a4, a5.
    При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:*/
    /*
    let a1, a2, a3, a4, a5;
    a1=5+3;
    a2=5-3;
    a3=5*3;
    a4=5/3;
    a5=5%3;
    console.log(`${a1}\n ${a2}\n ${a3}\n ${a4}\n ${a5}`);
    */
    /*3. Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:*/
    /*
    let a6,a7,a8,a9,a10;
    a6= 5 % 3;
    a7=3 % 5;
    a8=5 + '3';
    a9='5' - 3;
    a10=75 + 'кг';
    console.log(`${a6}\n ${a7}\n ${a8}\n ${a9}\n ${a10}`);
    */

    /*4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
    шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.*/
    /*
    let height=23;
    let width=10;
    let s=height*width;
    console.log(s);
    */

    /*5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
    результат поместите в переменную v.*/
    /*
    heightC=10;
    let dC=4;
    let v=Math.PI*(dC**2/4)*heightC;
    console.log(v);
    */

    /*. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень)
    или оператор возведения в степень ** ). */
    /*
    let n=3;
    let m=4;
    let k=Math.sqrt(3**2+4**2);
    console.log(k);
    */
    /* 7. Напишите скрипт, который выводит "Hello world", создавши переменную
    str и выводить спомощью document.write, alert и console.log*/
    /*
    let str='Hello world';
    document.write('<h3>' + str +'</h3>');
    alert(str);
    console.log(str);
    */
    /*8. Вывести в окно браузера при помощи метода alert() следующие данные:
    Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).*/
    /*
    let lastname = prompt('Lastname');
    let name = prompt('name');
    let surname = prompt('surname');
    alert(`${lastname}\n ${name}\n ${surname}`);
    */

    /*9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
    Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
    Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
    Вывести в документ содержимое переменной concatenation спомощью document.write*/
    /*
    let str1 = 'Кто';
    let str2 = 'ты';
    let str3 = 'такой?'
    let concatenation = str1 + ' ' + str2 + ' ' + str3;
    document.write(concatenation);
    */

    /*10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?/*/
    /*
    let str = "20";
    let a = 5;
    document.write(str + a + "<br/>");205
    document.write(str - a + "<br/>");15
    document.write(str * "2" + "<br/>");40
    document.write(str / 2 + "<br/>");10
    */

    /*11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
    parseInt("3.14") 3
    parseInt("-7.875") -7
    parseInt("435") 435
    parseInt("Вася") nan
    */
    /*12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
    let str = prompt("Enter something", "ho-ho")
    console.log(str); */
    /*13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert*/
    /*
    let a=+prompt('1-st number');
    let b=+prompt('2-d number');
    let c=a+b;
    alert(c);
    */
    /*14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
    Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert*/
    /*
    let name = prompt('name');
    let lastname = prompt('Lastname');
    let age=prompt('Age')
    let str=`${'Доброго вечера'} ${name} ${lastname} ${'мои поздравления что вам'} ${age}`;
    alert(str);
    */
    /*  Три різних числа вводяться через prompt().
    За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)*/
    /*
    a= +prompt();
    b= +prompt();
    c= +prompt();
    if (a>b && a>c && b>c ){
    console.log(c,b,a);
}
    else if(a>b && a>c && b<c){
    console.log(b,c,a);
    }
    else if (b>a && b>c && a>c){
    console.log(c,a,b);
}
    else if (b>a && b>c && a<c){
    console.log(a,c,b);
    }
    else if (c>a && c>b && b>a){
    console.log(a,b,c);
}
    else if(c>a && c>b && b<a){
    console.log(b,a,c);
    }
    */

/*Все параматры получаем с клавиатуры!!!!
  Имитируем поведение пешехода на перекстке.
  Если светофор зеленый - вывести "иди".
  Если светофор желтый - вывести "подожди".
  Если светофор красный - вывести "стой".
  Если светофор в аварийном режиме вывести "делай что хочешь"!*/

/* color = prompt('Color');
 if (color === 'green'){
     alert('Go!')}
 else if (color === 'yellow'){
     alert('Wait!')}
 else if (color === 'red'){
     alert('Stay!')}
 else if (color === 'error'){
     alert('Do what you want!');
     }
   */
/*
color = prompt('Color')
switch (color) {
    case 'green':
        alert('Go!');
        break;
    case 'yellow':
        alert('Wait!');
        break;
    case 'red':
        alert('Stay!');
        break;
    case 'error':
        alert('Do what you want!');
        break;
}*/

/*Все параметры получаем с клавиатуры!!!!(prompt , confirm)
  Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
  Улучшаем предыдущее задание.
  Если светофор зеленый и машин нет - вывести "иди".
  Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
  Если светофор желтый и машины есть - вывести "жди".
  Если светофор желтый и машин нет - вывести "все рано жди".
  Если светофор красный и машин нет- вывести "стой все рано".
  Если светофор красный - и машины есть вывести "стой и жди".
  Если светофор в аварийном режиме вывести "делай что хочешь"!*/
/*
  color = prompt('Color');
  IsRoadClear = confirm("Car");
  if (color === 'green' && !IsRoadClear) {
      alert('Go!')
  } else if (color === 'green' && IsRoadClear)
      alert("Wait until the violators pass!")
  else if (color === 'yellow' && IsRoadClear) {
      alert('Wait!')
  } else if (color === 'yellow' && !IsRoadClear) {
      alert('Wait anyway!')
  } else if (color === 'red' && !IsRoadClear) {
      alert('Stay anyway!')
  } else if (color === 'red' && IsRoadClear) {
      alert('Stay and wait!')
  } else if (color === 'error') {
      alert('Do what you want!')
  }

 */