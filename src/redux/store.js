import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  bios: [
    {
      number: 5,
      name: 'Xei Remeychenko',
      vkid: 4343,
      text: `Zdarova
Меня зовут Миша, можешь звать Рема, 19 лет
Хочу найти тимейтов для распития пива, в городе Пермь
Учусь, работаю, ем кашу, курю сигареты, пью компот, слушаю рок, пост-панк
Можем сыграть в пд, гартик, джекбокс, помурчать в дисике смотря фильмы
АНЕКДОТ
Ебёт Эйнштейн Ньютона, а тот нарисовал на полу квадрат и ржет. Эйнштейн говорит:
- Чё ржешь? Я тебя в жопу ебу!
- Ты не меня ебёшь, ты ебешь Ньютон на квадратный метр - ты ебёшь Паскаля!

`,
      imagesUrl: [
        'https://sun9-51.userapi.com/impg/QStawGXIyXXOn_nVgs7UKcfrmCfspetH9UsDOQ/llsv2KBoSko.jpg?size=1080x863&quality=96&sign=e0e9e95008ddec987057110ac55792c0&type=album',
      ],
    },
    {
      number: 6,
      name: 'Наталья Губа-Гринландская',
      vkId: 178433478,
      text: `•Меня звать Ната, Таша, Умари или же Лися. Возраст и место жительства спокойно можно посмотреть в профиле, не вижу смысла их озвучивать. Скажу только, что я старше, чем вы можете предположить по моему общению. Описываю себя одним предложением - взрослая тётка, застрявшая в подростковом возрасте, и по всей видимости навсегда.•
•По профессии я кондитер, не особо умелый, но тем не менее, делающий вкусные тортики. Делавший, т.к. ушла с предыдущего места работы и на кухню возвращаться пока желания нет.•
•В основном я геймер, довольно активно интересующийся игровой индустрией, но мы вряд-ли тут сойдёмся, потому что мои вкусы весьма специфичны - я не люблю всё новое и модное, а так же сильно клонюсь в японщину. В равной степени люблю играть сама или смотреть, как играет муж. В последнее время подсели на йоковерс (вселенные Drakengard и NieR). Чаще всего играю в ритм-игры - на мобилочках это Project SEKAI: Colorful Stage (яп и глобал сервера), вот там я прямо жёстко залипаю и не против поиграть вместе; иногда по настроению MuseDash, на консольках - серия Project DIVA. Люблю визуальные новеллы и могу посоветовать что-нибудь, правда в основном мрачное или специфичное (критерий "ну как Бесконечное Лето" не выполню). Основное моё игровое устройство - ныне покойная, но на самом деле живее всех живых PS Vita. Люблю её. За компухтером не сижу из-за больной спины. Балуюсь эмуляторами на телефоне.•
• Люблю литературу по игровым вселенным, да и вообще читать. Из всех книг особо люблю "Дом, в котором". Если для вас тоже всё началось с красных кроссовок, то вы уже завоевали моё сердечко
💙.•
• Увлекаюсь аниме и мангой - предпочитаю серьезные и мрачные вещи, вроде "Берсерк", "Человек-Бензопила", "Дорохедоро", "Сага о Винланде", "Спокойной ночи, Пунпун" и всё в таком духе. Хотя, в последнее время, уже редко что-то смотрю.•
•Могу считать себя отаку, коллекционирую/ем фигурки.•
•Люблю вокалоидов, в частности Хацунэ Мику. Нет, не так. ЛЮБЛЮ ВОКАЛОИДОВ. Вот так. Спасибо мужу за это увлечение.)•
•Абсолютно не агрессивна, очень трудно забайтить и вывести из себя, дружелюбна и за мир во всем мире, ну или хотя бы в пределах конфы.~~•
•Ну что ещё остаётся сказать? Наверное, пару слов об этой беседе. Очень её люблю и привязана, хотя может показаться, что довольно мало здесь нахожусь, обычно залетая на 10 минут "с пинка" и так же внезапно вылетая и, типа, зачем я вообще тут нахожусь. Здесь замечательные и интересные люди, в большинстве своём. Камилла солнышко, я очень ей благодарна за это место, которое без преувеличения могу назвать своим "интернет-домом". :') И, кстати, я не читаю весь чат, пропускаю сообщения, если их больше 200-300. Так что если я вам внезапно понадоблюсь - лучше пинговать (именно пинговать, а не отвечать на соо, ибо иногда эта штука глючит и проматывает в конец)(спасибо Данику, который почти единственный это делает), меня это не раздражает, потому что если я действительно занята, то интернет у меня отключен.•
•Мои любимые цвета - красный и бирюзовый. 😶•
OST с Drakengard 3, просто потому что потому.

`,
      imagesUrl: [
        'https://sun9-44.userapi.com/impg/LLO5PyP1vXmUI5o5XHRZ7QVoRTUetf7OZcxRUw/cn7W8VZ5x8Q.jpg?size=807x646&quality=96&sign=8016e53fe413e64542b45bd8ac83e586&type=album',
      ],
    },
  ],
};
const reducer = createReducer(initialState, builder => {
  builder.addCase(createAction('TEST'), console.log);
});

const store = configureStore({
  reducer,
});

console.log(store);

export default store;
