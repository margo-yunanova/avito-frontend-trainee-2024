Пример README

# Музыкальный плеер

Данное приложение разработано в рамках выполнения профильного задания - Фронтенд-разработчик на стажировку в VK-Музыка.


## Ссылка на деплой приложения

Storybook задеплоен на сайте, чтобы можно было просматривать и тестировать все доступные компоненты в одном месте. 

https://vk-music-audio-widget.netlify.app/



## Сборка и запуск проекта

### Запуск Storybook

```bash
npm install
npm run storybook
```

Откройте http://localhost:6006, чтобы посмотреть результат в браузере.

### Запуск в режиме разработки

```bash
npm install
npm run dev
```

Откройте http://localhost:5173, чтобы посмотреть результат в браузере.

### Локальное тестирование приложения

```bash
$ npm run build
$ npm run preview
```


## Стек технологий

Фронтенд написан на React + TypeScript со сборщиком Vite

|Пакеты|Назначение|
|:----|:----|
|[VKUI](https://vkcom.github.io/VKUI/#/About)|Библиотека компонентов для создания интерфейсов на Material Design System от Google|
|[Storybook](https://storybook.js.org/)|Библиотека для разработки, тестирования и документации компонентов UI.|
|[react-use-audio-player](https://github.com/E-Kuerschner/useAudioPlayer)|Библиотека React, предоставляющая хук для управления аудиоплеером в приложениях.|

## Техническое задание

Необходимо реализовать виджет для воспроизведения аудиозаписи по макету.  
  
Макет в Figma: [https://www.figma.com/design/9d3ErSuSrLY1qCuSRPk80C/AudioCell?m=dev&node-id=0-1&t=iqVcRzScrwfGr94t-1](https://www.figma.com/design/9d3ErSuSrLY1qCuSRPk80C/AudioCell?m=dev&node-id=0-1&t=iqVcRzScrwfGr94t-1)  
  
В качестве аудиозаписи можно использовать любую аудиозапись (как загруженную в репозиторий, так и из внешнего ресурса, на ваш выбор).

#### Условия:

*   Минимальные версии браузеров [https://caniuse.com/es6-module](https://caniuse.com/es6-module).
*   Использовать React и mobx.
*   Использовать VK UI (можно найти тут [https://vkcom.github.io/VKUI/](https://vkcom.github.io/VKUI/)).

#### Рекомендации:

*   Можно использовать готовые шаблоны приложений.
*   Можно использовать библиотеки из npm.
*   Стоит уделить внимание принципам проектирования: KISS, SOLID и др.

  

## License

| Название                         | Автор      | Ссылка                                    | Лицензия           |   |
|----------------------------------|------------|-------------------------------------------|--------------------|---|
| Whip Crack 01.wav                | CGEffex    | https://freesound.org/s/93100/            | Attribution 4.0    |   |
| Cartoon Pop (Clean)              | unfa       | https://freesound.org/s/245645/           | Creative Commons 0 |   |
| Bubble Pop                       | elmasmalo1 | https://freesound.org/s/376968            | Attribution 3.0    |   |
| Thunder, Very Close, Rain, A.wav | InspectorJ | https://freesound.org/s/360328/           | Attribution 4.0    |   |
| SoundHelix                       |            | https://www.soundhelix.com/audio-examples | GNU GPLv3          |   |
| Картинки                         |            | https://ru.freepik.com/                   |                    |   |
