ОГРОМНАЯ ПРОСЬБА - пропустите мимо глаз мои коммиты.<br>
Из-за того что приходилось тестировать сразу на сервисе свой бал по перфонасу - постоянно менял по мелочи и пушил, что бы сразу видеть результат тестирования ( иногда тесты не проходили).<br>
Коммиты - чисто для смеха над моими мучениями.

На текущий момент наивысшый мой бал - 542.

* Перым делом избавился от точно ненужного кода (все что связанно с react, нарисованный ключ в css)
* Оптимизировал изображения.
* В какой-то момент пересжал изображения и тесты не проходили.
* Из-за пересжатых изображений думал что это из-за 20к+ строк ненужного js и бутсрапа. ( кеш на gh-p походу не успел обновиться и при пересжатых изображениях тест проходил ) => долго искал что нужное из бутрапе надо оставить (оказалось ничего).
* Хотел перевести svg в спрайты + dataurl, но тест в таком случае не проходил =( <br>
Долго мучался со шрифтами, хотел через fontLoader API ( не получилось сделать так как в примере документации, а разбираться в падлу было) решил через прелоад (очков по перфомансу было больше, но при аудите devtools показывало меньше эффективности чем пользы от этого).
* Подгрузка через async показала себя лучше чем defer.
* Убрал вообще картику baner.
* Так как загрузка шрифтов - главная проблема -> хотел кешировать их через SW. (баллы значительно уменьшились) <br>
Нашел шрифты, которые меньше весят. ЕЕЕ, нашел эти шрифты в формат woff2.

* Еще в какой-то момент хотел сжать css (тест не проходил =( )
* Решил воспользоваться inline css.
* Пришла в голову асинхронная загрузка стилей, но инлайны показывали хороший результат. Решил даже не пробовать - так как это все равно запрос к серверу.

* Сжатие brotli - не играет никакй роли ( не знаю как им пользоваться, всм вот у меня есть сжатый файл scripts.bundle.js.br, и что с ним делать? ) <br>

* Хотел минифицировать html - тест не проходит =(

* Без прелоадов - сам перфоманс лучше получается, но очков меньше походу.
* Решил js тоже заинлайнить.

* C фавиконкой чутка схитрил. =)

P.S.
В js файле думаю можно что-то найти, как минимум почему-то после всей загрузки (примерно на 1000мс) начинается опять какой-то процес связанный с js (похож на GC).
