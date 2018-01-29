**React Redux HotReload DevTools Boilerplate**

#Автодокументация
npm i -g jsdoc
При этом используем шаблон docdash, который у нас стоит в dev dependencies.

См. https://eugen35.gitbooks.io/varia/content/auto_doc_generation.html

#Сборка пакета и вызова его потом в другом проекте
##Сборка пакета
npm run bundle
npm run bundle:watch - для автоматической пересборке при изменении ресурсных файлов.
Помните, что перед сборкой нужно указать новый номер версии в теге version файла package.json.
Результат сборки как видно из webpack.bundle.config.js, помещается в \dist\bundle.js. Что и указано в теге main файла package.json.
Результат сборки должен быть включён в контроль версий, т.к. именно результат сборки будет позднее отдан тому, кто запрашивает собранный пакет.

То, что вы хотите, чтобы было собрано, должно быть указано в файле index.bundle.js.
Только оно и соберётся, поскольку именно он указан как ключ entry в файле webpack.bundle.config.js.   

//@todo Желательно весь js в папку src закинуть (кроме index.bundle.js - он в корне).
##Вызов собранного пакета в другом проекте
В package.json того кода, где собираемся использовать собранные нами ранее пакеты пишем, например: 
"dependencies": {
    "i18ns_pl_mock": "git://github.com/eugen35/i18ns_pl_mock.git",
    "abac-sync": "git+https://ЛОГИН:ПАРОЛЬ@bitbucket.org/eugen35/abac-sync.git"
}
### Получение новой версии собранного пакета в другом проекте
npm update ИМЯ_ПАКЕТА

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

