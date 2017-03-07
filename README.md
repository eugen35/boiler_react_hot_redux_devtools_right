Redux DevTools todomvc example

#Автодокументация
npm i -g jsdoc docdash

См. https://eugen35.gitbooks.io/varia/content/auto_doc_generation.html

#Тестирование
##Запуск тестов
npm test
npm test: watch
##Используемые пакеты
jest.
А для assertions пытаюсь использовать chai. Но похоже нужен мостик между ним и jest.
А то не выводится развернутых комментариев в консоль о том, что именно не совпало (например, при сравнении массивов).
##В текущий момент что-то крашится в тестах

#Установка переменных окружения
Как-то на винде у меня не работает указание их в командной строке. А точнее работает, но для серверных скриптов.
А даже сборщик webpack уже не видит эти переменные.
Поэтому ручками меняю их в файле env_gitignored.js (тока нужно в гите раскомментировать гитигнор данного файла).
Сборка в варианте production отключает redux-devtools от правой части экрана.

# Running Example

First, clone the project:

```
git clone https://github.com/gaearon/redux-devtools.git
```

Then install the dependencies in the root folder:

```
cd redux-devtools
npm install
```

Install the dependencies in the example folder:

```
cd examples/todomvc
npm install
```

Finally, run the project:

```
npm start
open http://localhost:3000
```

#Hot reload problems

##Webpack does not watch on Windows and WebStorm
seems Webpack watch doesn't work if the file is not saved directly. Please try turning 'Safe write' option ( Settings | Appearance & Behavior | System Settings | Use "safe write" (save changes to temporary file first)) off

+ если верхнее не помогает, то к нему можно добавить в файл webpack.config.js среди списка опций следующую:
```
...
watchOptions: {
aggregateTimeout: 300, // Delay the rebuilt after the first change. Value is a time in ms.
//poll: true // bool - enable / disable polling or number - polling delay
poll: 1000
}
...
```

