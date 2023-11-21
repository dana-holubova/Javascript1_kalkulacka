# Javascript1_kalkulacka

*Napište funkci, která spočítá výsledek výpočtu.*

Představte si úplně obyčejnou kalkulačku pouze s tlačítky pro čísla, čtyřmi základními operacemi a tlačítkem pro rovná se. Pokud na takové kalkulačce chcete spočítat něco velmi jednoduchého, například 2 + 3, musíme stisknout tlačíko `2`, poté `+`, pak 3 a pak `=`. Kalkulačka tedy nespočítá náš výsledek ve chvíli, kdy mačkáme +, ale až ve chvíli, kdy mačkáme `=`. Musí si tedy zapamatovat, co jsme namačkali, a všecho spočítat až ve chvíli, kdy stiskneme `=`.

Napište funkci `calculate` se třemi parametry `number1`, `operation` a `number2`, které představují první zadané číslo, zadanou operaci jako řetězec a druhé zadané číslo. Operace může být `'+'`, `'-'`, `'*'` nebo `'/'`. Funkce vrátí výsledek výpočtu pro zadanou operaci.

Příklad použití

```
document.body.innerHTML += `2 + 3 = ${calculate(2, '+', 3)}<br>`; // vypíše výsledek 5
document.body.innerHTML += `3 * 7 = ${calculate(3, '*', 7)}<br>`; // vypíše výsledek 21
document.body.innerHTML += `10 / 4 = ${calculate(10, '/', 4)}<br>`; // vypíše výsledek 2.5
```
