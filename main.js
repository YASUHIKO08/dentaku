function clickbutton(calc) {
    let result = document.getElementById('result');//HTMLのリザルトを取得
    let calc_value = calc.innerHTML;//変数の引数を取得
    let last_calc = result.innerHTML.slice(-1);//リザルトの右端を取得
    let opr = calc_value == '+' || calc_value == '-' || calc_value == '/' || calc_value == '*' ||calc_value == '.';//演算子が入力された時
    let last_opr = last_calc == '+' || last_calc == '-' || last_calc == '/' || last_calc == '*' || last_calc == '.'; //リザルトの右端が演算子の時
        if (calc_value == 'AC') {
        result.innerHTML = '0';
        } else if (calc_value == '='){
        result.innerHTML = eval(result.innerHTML);
        } else {
            if (result.innerHTML == '0' && calc_value !='.'){
            result.innerHTML = calc_value;
            } else if(opr && last_opr){
            let calc_opr = result.innerHTML.slice(0,-1);
            result.innerHTML = calc_opr + calc_value;
            } else {
            result.innerHTML += calc_value;
            }
        }
    }
