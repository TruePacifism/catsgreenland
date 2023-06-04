import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import discordPfp from '../images/discord-pfp.jpg';
import botPfp from '../images/bot-pfp.jpg';
import actions from './user-actions';

const initialState = {
  bios: [
    {
      vkId: 731437792,
      text: `здравствуй. думаю что прошла эпоха притворств и траперства детей в интернете поэтому с уверенностью говорю, что я парень. даня, приятно познакомиться. даничка, даня и другие клички принимаются, кроме полного имени (Данил).
Мне вот вот исполнится 16 лет (14.06), живу в Калининградской области (-1 мск.), из музыки предпочитаю все, что приглянулось. определенного жанра нет. из любимых цветов выделяю черный, белый, зелëный. Вполне общительный, как в лс, так и в беседе, хотя из за обстоятельств в жизни пишу меньше. Всегда рад буду, если напишите поболтать. рост кому интересно 172 см.

`,
      imagesUrl: [
        'https://sun9-58.userapi.com/impg/eQcfZZ8MBTkWOM9lGO7cksHyXjA7rha5w1HXYQ/0P2nrr5RHh4.jpg?size=807x670&quality=96&sign=1162419f8fab822909487158102bbaf4&type=album',
      ],
    },
    {
      vkId: 601128888,
      text: `всем приветик!! меня зовут Даша, хотя можно просто Виолетта. мне 19 лет. я отучилась на парикмахера-технолога в этом году. раньше увлекалась танцами, но из-за учебы пришлось бросить. в свободное время я общаюсь в интернете) в реал лайф у меня только два друга, и то один сейчас в другом городе, а с другой я живу, и если выбирать между общением в реал лайф и интернет-другом, то я выберу интернет. мне безумно нравится готовка, поэтому буду рада, если кто-нибудь поделится какими-нибудь крутыми рецептами)) а ещё люблю эстетику женского тела, ведь оно такое прекрасное, емае!! нравится природа.. все эти красивые картиночки, рассветы, закаты, полевые цветочки, а за пионы отдам что угодно....я дружелюбная, конечно, почти со всеми могу найти общий язык, но бывает такое, что хочется с кем-то поругаться, и я начинаю тогда искать себе цель..да, это ужасно на самом деле.. любимый цвет, наверное, всё-таки синий. он такой холодный, дерзкий, но и в этот же момент спокойный... игры я на телефоне/пк я не очень люблю. бывает играю в дурака онлайн. а ещё про фильмы..люблю ужасы (но именно те, где разрезают людей, и игры на выживание, я просто фанатею от этого), детективы, триллеры, ну и немного мелодрамы. не умею поддерживать людей, но всегда готова выслушать, так что добро пожаловать)


`,
      imagesUrl: [],
    },
    {
      vkId: 301865955,
      text: `Простой парень 20-ти лет из Санкт-Петербурга. Зовут Женя, но можете звать меня как угодно, мне не будет обидно. Расскажу о себе побольше, пока есть настроение для этого.
Скромный, застенчивый, неразговорчивый и не привлекающий к себе лишнего внимания. Я - именно тот человек, который в компании может не проронить ни слова за весь день. Поэтому у меня мало друзей, поэтому я и сижу тут. И тем не менее, в беседе я хорошо поддержу разговор.
Я очень чувственный и поэтому переживаю за всех, у кого случилось что-то неприятное или плохое. Мне всегда можно написать - я выслушаю и поддержу. Меня можно считать этакой губкой для негатива.
Сам по себе я очень добрый и дружелюбный, но отношусь ко всем так же, как они общаются со мной. Естественно, поливая меня говном, не ждите ничего хорошего.
Из-за того, что я неразговорчивый, мне достаточно сложно даётся общение 1 на 1. Уже были случаи, когда не мог выдавить из себя ни одну фразу, поэтому при разговоре со мной людям приходится брать инициативу на себя. Люблю и хочу гулять, но не люблю это делать один, из-за чего постоянно дома и не гулял толком уже года 2, кроме одного случая.
Свою отдушину нашёл в играх, красивой музыке и интересных историях. Что касается первого, то это в основном osu!, как ритм игра, и Geometry dash, как музыкальный платформер. Про второе напишу чуть дальше. А насчёт историй - это все, что угодно: игры (их много, для них я даже сделал таблицу - https://clck.ru/32MY5M), аниме-манга (Тетрадь смерти, Агенты времени, Город, в котором меня нет, Нет игры - нет жизни и много чего ещё (для них в скором времени тоже будет табличка)) фильмы, книги и все такое.
Я постоянно в наушниках. Если я долгое время без них, то музыка начинает заедать в голове. Постоянно ищу для себя что-то новое, поэтому в моем плейлисте можно найти много чего интересного. И он всегда открыт - смотрите. Да и в целом на моей странице есть ещё куча информации обо мне, хоть некоторая и устарела.
Кроме того, не так давно, с февраля, я начал учиться играть на пианино. Успехи пока не сказать, что большие, но я стараюсь и мне нравится, хотя сейчас пришлось немного забросить это дело. Выучил пару саундтреков из любимых игр и мне это безумно доставляет. Кроме того пробовал писать свою простенькую электронную музыку, но не прижилось.
Я иногда люблю залипать на твиче, причём на стримах разговорных. Для меня это что-то наподобие подкаста в реальном времени, в котором могу поучаствовать и я сам в какой-то степени. Из крупных стримеров смотрю только HellYeah, из-за которого и пришёл на твич.

Любимый цвет розовый 💞 и фиолетовый 💜


`,
      imagesUrl: [],
    },
    {
      name: 'Галактион Рогозов',
      vkId: 326645965,
      text: `Ку. Я Галактион, который Рогозов. Думаю имя мое а. очень странное, но давай сделаем вид, что оно настоящее. Меня можно звать еще Гал или иные производные от имени. Люблю зеленый цвет.
Живу в Кемерово. Я студент вуза, поэтому уже большой мальчик. Фанат разных игр, конкретно сейчас перепрохожу КиберПунк, играю в геншины, фортинайты иногда доты, но сейчас ухожу от этого, ибо сжирает слишком много времени. Могу также смотреть аниме/фильмы/сериалы, зависит от настроения.
Умею собирать кубик Рубика, жонглировать и еще куча бесполезных навыков о которых лучше молчать.
Тут должно быть что-то еще, может потом добавлю. Пока пусть тут будет анекдот.

Мужик заходит в Барбершоп:
— Сколько стоит подстричься?
— 2000
— А если без минета?


`,
      imagesUrl: [],
    },
    {
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
        'https://sun9-44.userapi.com/impg/LLO5PyP1vXmUI5o5XHRZ7QVoRTUetf7OZcxRUw/cn7W8VZ5x8Q.jpg?size=1280x1024&quality=96&sign=ac1c63ca324e27bb1111f7bb3f569a6c&type=album',
      ],
    },
    {
      name: 'Сергей Губа',
      vkId: 117445846,
      text: `Hi, my name is, СерГЕЙ? My name is, Енот?
My name is, chka-chka, эээ... Nyase.
Короче, меня зовут Сергей, Енот или Nyase. Всем привет. 👋 Я живу в непризнанной южной столице России – Таганроге. Где-то там же живёт и моя жена. Дед.

• В плане хобби активный ретро-геймер и пассивный модерн-геймер. Не люблю ММО и многопользовательские, а также АААААААА-экшены от Сони, кроме старых GoW и пары других. Люблю японские ролевухи различных поджанров (олдскульная Phantasy Star ⭐, финалки, Wild ARMs, Shining Force и другие), платформеры, файтинги (Guilty Gear, MK, Tekken, Street Fighter, KOF и другое), геймплейные новеллы Danganronpa с Ace Attorney и ритм-игры, в особенности Hatsune Miku: Project DIVA и Cytus. Не без удовольствия играю в Project SEKAI и Guitar Hero.
Увлекаюсь коллекционированием сопутствующих вещей.

• Искренне люблю Вокалоид-культуру и посильно занимаюсь её популяризацией через свои паблики, посвящённые Хацунэ Мику (как ни странно) – моей главной любимице, в числе которых и одноимённый канал на Ютубе, где занимался написанием сценариев и монтажом. Публикуюсь с новостями по мере сил на сайте о воках. В комьюнити знаменит тем, что аккаунт группы в Твиттере, которому было уже более 6 лет, умудрился ваншотнуть баном в один клик, указав в качестве даты рождения владельца аккаунта (типо меня) дату основания группы, таким образом заявив что мне 6 лет и словил автобан за нарушение правил пользования сразу после клика и безуспешно пытаюсь его восстановить. (P.S.: Там можно заводить аккаунт только лицам от 13 лет) (P.P.S.: На самом деле не знаменит, просто хотел поплакаться какой я лошара.)
Что-то пытался калякать в Вокалоид-эдиторе, но у меня лапки.
В общем, подсадил на это увлечение всех своих знакомых.

• Работаю на авиазаводе ремонтником по оборудованию, поднимаю авиацию.

• Говорю обычно что люблю Японию и японскую культуру, хотя по-сути обычный виабушник. ._. Из этого вытекает увлечение аниме, мангой и всяким таким.
Люблю изучать культуры других стран и народов мира.

• В плане музыки меломан и обычно хорошим треком не брезгую, независимо от жанра. Но тяготею к металлу, японщине и чип-тьюну.
Люблю читать, предпочитаю грустную научную фантастику, вроде «451° по Фаренгейту», «О, дивный новый мир» и «Незнайки на луне».
По фильмам, ну хз, долго перечислять. Что-то вроде «Назад в будущее», «Убойный футбол», работы Сатоси Кона и Тарантино ииии много чего ещё. Смотрел немало.

• Да, у меня на аве аниме и я дегрод. Сразу разберёмся с этим.

• Недостатки: Касательно общения вспыльчив, излишне прямолинеен, могу накидать хуёв и жалеть об этом. Если вы считаете меня хорошим человеком, то вам показалось.
Преимущества: Это съедобно?

• Если захотите ко мне обратиться, то возьмите парацетамола и запейте святой водой. Должно отпустить. Если не помогло, то тегайте, пожалуйста, через @, иначе скорее всего не увижу. Чаты я целиком не читаю, могу пробежаться по десятку последних сообщений, а уведомления не всегда корректно могут работать.

• Крайне самокритичен к тому, что делаю и всегда этим недоволен. Даже написанным био уже недоволен, могло быть и лучше.

• 100% забыл что-то упомянуть, но буду уповать на возможность дополнить или отредактировать в будущем. Как-то так, надеюсь поладить со всеми.

Любимые цвета красный и чёрный, в идеале сочетание. Не брезгую розовым и бирюзовым. Вообще люблю яркие цвета. А ещё я тот чувак что приходит на вечеринки и портит всем настроение.


`,
      imagesUrl: [
        'https://sun9-75.userapi.com/impg/HaVKHCHjy4SiCnLO16KcRltkb9ISKdZXrhvTjA/_8stnXrG-Ek.jpg?size=1280x720&quality=96&sign=b68d9a621242e9b1569e88144c3fe156&type=album',
      ],
    },
    {
      name: 'Элинор Гринландская',
      vkId: 673124862,
      text: `Элинор, Эли, в принципе как угодно. возраст не секрет можно посмотреть в профиле конечно же, да. не учусь! потому что в прошлом таки не решила на кого собственно хочу учиться. очень лениво работаю, да и вообще я живу как содержанка. в свободное время рисую пальцем на 10 Айфоне, да. не считаю себя художником, я недовольна своим скиллом абсолютно, хотя постоянно пытаюсь как-то совершенствоваться. (если есть желание, могу конечно же нарисовать что-то для вас за символическую плату)). я не переношу подробные рассказы о каких либо травмах и в принципе, мне противно от всего, что с этим связано, поэтому если я попросила вас не говорить об этом в чате, пожалуйста по возможности постарайтесь перенести диалог в личные сообщения(речь идёт о физических травмах если что, не нужно мне в красках описывать, как вы до мяса разодрали вчера ногу)) а так я в принципе няшка, не люблю споры и жёсткие срачи в принципе по любым темам, но если вопрос касается меня непосредственно, я все же не останусь в стороне. в принципе стараюсь наладить отношения со всеми и если вчера мы с вами собачились, не значит что сегодня я вспомню как вы вчера мне насолили. я просто не злопамятная и в принципе могу простить что угодно наверное да. иногда я могу пропасть и не появляться в чате неделями. нет, это не значит что у меня куча дел, работы, долгов и тд. я просто устала и не пишите короче мне лишний раз. больше ничего о себе я сказать не могу. че там в конце пишут ээ...я люблю Леву


`,
      imagesUrl: [
        'https://sun9-19.userapi.com/impg/NruYuCq9YbTrlXpFMJes2Wf5r4U5NpU1YrdPGw/FOOXsSW7FjM.jpg?size=665x581&quality=96&sign=bb4b323f65e245197c9c131ced5ebf50&type=album',
      ],
    },
    {
      name: 'Левиафан Рогозов-Гринландский',
      vkId: 679832305,
      text: `начну пожалуй с того, что мне было очень трудно писать рассказ. я довольно категоричен и строг, как к себе, так и к другим. пожалуй для этого текста сделал исключение и не запаривался даже о запятых. меня зовут Левиафан и да, это мое настоящее имя. в принципе принимаю любые сокращения имени кроме типичного "Лев", не надо так называть меня, это раздражает. лучше Лёва, Лефи и все в таком роде..живу я в Кирове. в чате появляюсь достаточно редко, много работаю и учусь. работаю я в ночную смену, так что если появляюсь в чате ночью, в этом нет ничего удивительного. учусь я на психолога на 3 курсе. чаще всего у меня пары очно и интернет в аудитории ловит отвратительно, так что до 6 часов вечера мне писать бесполезно абсолютно. ну конечно я занят не только работой и учебой. я люблю писать. почти все свои мысли я выражаю через текст, чаще всего конечно пишу от руки. заполняю личные дневники, записываю случайные воспоминания, в принципе ничего особо интересного. иногда играю в игры, любимых нет, занимаюсь этим редко. на данный момент играю только в геншин и скулгерлс. в основном потому что хочу быть в теме и иметь общие темы для обсуждения, хотя в геншин играю уже год больше даже из личного интереса. хм, что же ещё стоит упомянуть здесь? я не очень люблю говорить о себе, редко делаю это. но всегда готов выслушать человека 1 на 1. не бойтесь писать мне в ЛС, я не кусаюсь без причины. могу показаться холодным человеком возможно, но я не совсем такой. честно, я могу быть не только серьезным)
наверное это все что мне хотелось бы сказать о себе. ммм любимого цвета наверное нет, я люблю Славу.


`,
      imagesUrl: [
        'https://sun9-80.userapi.com/impg/aN_G7BOi7wxvlPOoUQYfSjkvF3JLOS5rB1aHMQ/V-YAT0bET0A.jpg?size=1080x619&quality=96&sign=92ed391223ce149654661e7c00313061&type=album',
      ],
    },
    {
      name: 'Марат Айнулин',
      vkId: 48806562,
      text: `Так вот, с чего бы начать. Зовут меня... ну, вы уже знаете, но в основном ко мне обращаются по нику Дост, ибо по соционике я Достоевский, да, так уж вышло. Живу я в городе Пенза. На момент написания этого рассказика мне уже целых 28 лет, а в марте стукнет целых 29, да, вот такой я дед)) Я практически самый обычный человек, но слишком активный, занимаюсь акробатикой и почти уже 10 лет волейболом (я просто обожаю этот вид спорта). Люблю посмотреть фильмы и сериалы. Ещё больше люблю поиграть в различные видеоигры (иногда даже постримить на твиче, ЭТО НЕ РЕКЛАМА, не люблю рекламу)), в основном файтинги, ритм игру Осу и StarCraft II, но и командными играми тоже не брезгую. Сейчас изучаю три языка, японский, древнегреческий (господи, какой же он сложный) и английский (на английском могу более менее сносно разговаривать, спасибо онлайн играм)) А ещё учу язык программирования Javascript. Сам по себе человек я общительный, спокойный, но могу быть и жёстким. Мой любимый цвет красный и только красный, моё любимое число 5 (не знаю почему, вот 5 и всё тут))


`,
      imagesUrl: [],
    },
    {
      name: 'Иван Иванов',
      vkId: 591214241,
      text: `Здравствуй.
-Меня зовут Иван(не люблю когда называют уменьшительно-ласкательными), на момент написания мне 16 лет, живу в городе Чебоксары, учусь я на мед.брата.
-Из хобби у меня: видеоигры: предпочитаю выживачи и шутеры.
Музыка: в основном электроника и OST из игр. Но так же слушаю единичные треки из других жанров.
Аниме: смотрю всё подряд.
Готовка и спорт. Также являюсь фанатом Madness Combat. Ещё я начал активно играть и интересоваться DnD.
-Есть некоторые проблемы с общением в реальном мире. В плане, мне не очень уютно свободно общаться с незнакомыми людьми ( меня это бесит ) поэтому я довольно молчалив(но в интернете нет). Так же меня очень трогает когда говорят о моем лице, росте и телосложении.
любимые цвета: черный и тёмно-красный, чуть меньше синий и зелёный.



`,
      imagesUrl: [
        'https://sun9-37.userapi.com/impg/Ieb0cpghpTDltC7JYDZM6UaIMDc7DV0RjJiIEA/HwYF6CeA5Ds.jpg?size=373x210&quality=96&sign=47a2df211adcda7192bc75f979844b0c&type=album',
      ],
    },
    {
      vkId: 769263531,
      text: `Привет 👋
Я - совершеннолетний человечек, который обожает аристократию (если быть точнее, то «аристократов» и их поведение);
Особо нечего о себе рассказать, так что пройдусь по поверхности:
Во-первых, увлечения. Ранее меня интересовало программирование тем, что это как магия, можно сделать очень многое, не вставая с кресла; дело заброшено, но не забыто. Увлекает чтение (книги, манга, ранобэ); фильмы/сериалы/аниме смотрю очень редко (раз в две-четыре недели). Также увлекаюсь написанием что-то вроде текстов для песен.
Во-вторых, вкусы/предпочтения. Люблю весну за ее «послезимнюю» атмосферу, нехолодную и нежаркую погоду (конечно, когда высыхает грязь). Любимого блюда нет, но есть «уровни» - не очень отношусь к самым обыкновенным блюдам и обожаю интересные рецепты; касается как готовки, так и принятия в пищу. Обожаю различные необычные прически, но негативно отношусь к коротким волосам. Люблю ночь за тишину и покой, но не люблю за то, что 90-99% живности исчезает (по большей части касается магазинов, пожалуй). Не люблю свою страну (Россию), но и не стремлюсь куда-либо переезжать, так как везде свои приколы, и знаний о других странах у меня маловато. Любимое аниме - «Невеста чародея»; манга - «Я опаснее тебя»; ранобэ - «Тетрадь смерти: Другая тетрадь».
Любимых исполнителей писать не желаю, так как время идет и они могут меняться.
Любимые цвета - белый, бежевый, персидский синий (6600FF), пастельно-розовый (FFD1DC).
`,
      imagesUrl: [
        'https://sun9-9.userapi.com/impg/Qu7KR6Jl_Zikpf9h2G1PNtgTZxxfBg2EowgrvA/v07USPk7kps.jpg?size=1428x2048&quality=96&sign=e9369e68ab46012c0033f8dc27cb81c8&type=album',
      ],
    },
    {
      name: 'Ксения Ленская',
      vkId: 463284975,
      text: `Меня зовут Ксюша, можно звать как угодно, но не Оксана и не Ксения (от последнего такое чувство, будто у меня щас будут проблемы). Мне 21 год, рост ± 170, родилась и живу в Москве, выучилась на воспитателя в дет.сад для особых детей. Волей судьбы случилось так, что я работаю почти по профессии, хотя клялась, что с меня хватит. Уже 4 месяца я работаю в сервисе 'Няня особого назначения'. Сказать что я влюблена в это дело - ничего не сказать. По интересам: раньше я была жутким книжным червем, сейчас, конечно, времени поменьше на это дело, но я все также не могу представить жизнь без книг. Ещё иногда поигрываю в Геншин. Музыка: весь рок, но чаще играет в ушах, панк/поп/хард/металл/Пауэр металл рок. Относительно недавно открыла в себе общительность, очень люблю это все, почти как второе дыхание открылось. Влюблена в природу, город и людей вокруг. Мой любимый цвет - голубой и фиолетовый! 💙💜🤓


`,
      imagesUrl: [],
    },
    {
      name: 'Камилла Гринландская',
      vkId: 373718115,
      text: `Я принимаю любые сокращения и "клички" (но не коверканья) кроме Кама и Камила. Возраст раскрывать не буду, считаю это пустой цифрой, которая вам почти ничего не даст. Место жительства тоже ненужная ерунда, диалоги со мной не коснутся этой темы. Из чисел любимое 13, которое является для многих несчастливым, однако для меня наоборот. Также симпатизирует число 3. В целом не нравятся четные числа, нечетные привлекают. Читала, что эта особенность моего знака зодиака, но я в любом случае не верю в эту ерунду, однако как забавный факт или совпадение имеет место быть.

Сижу в беседах много, онлайн часто. Поэтому стараюсь по максимуму обращать внимание на всех своих участников.
Раньше мы были частью сетки цветных бесед, где нужно было выбрать цвет. Я выбрала зелёный, потому что он мой любимый. Смайлик сердечко зеленого цвета тоже нравится. Токсичный, кислотный цвет — что может быть лучше?

Имею пустую страницу, пушто мне так комфортнее. Аватарки меняла бы очень часто, поэтому пришла к выводу что лучше их вообще не ставить. Любые другие фото или картинки на странице не вижу смысла держать, только если это не рисунки Славы. Ничего на страницу не публикую - не вижу в этом нужды и желания. Статус тоже не имеет смысла существовать на моей странице. В друзьях оставляю тех, с кем поддерживаю общение, остальных могу спокойно убрать. Хотя, заимев эту беседу, оставляю еще ребяток оттуда до их исчезновения.

Редко занимаюсь чем-то другим. Если и занимаюсь, это может быть просмотр чего-либо, вязание, учеба. Еще любила срисовывать, но в последнее время ленюсь ужасно, даже если хочу. Из музыки нравятся песни на грустный мотив, любимые исполнители - Пиро и ему подобные.

Из любимого можно выделить котиков, люблю их как никого и ничто. В одежде предпочитаю любые цвета кроме темных — надоели, и кроме белого — пачкается быстро.
К сладкому потеряла вкус, не очень люблю его.
Я маленькая во всех возможных и пришедших тебе в голову смыслах. Фотками или голосовыми сообщениями делюсь лишь в очень крайних случаях. Сама никогда не отправляю.

Люблю слушать голоса, люблю фоточки. Люблю самые разные украшения, чем больше, тем лучше. И без разницы, на мне они или на другом человеке, это прекрасно. А вот безделушки не люблю — хлам. Чего не скажешь о разных сувенирах — это я тоже очень люблю.


`,
      imagesUrl: [
        'https://sun9-25.userapi.com/impg/kjJlfJ42YpusldV_CyznxDezoyYNp8LvIRNUgA/Z9SE6YcN1U8.jpg?size=1200x750&quality=96&sign=d8ceb0d8ce123bb84a2c8b60c8b5478a&type=album',
      ],
    },
    {
      name: 'Даня Абуталипов',
      vkId: 565581204,
      text: `Короче. Звать Даня, Данька, Дынька,Данон,Абу
20 лет. В этом году(2023) в армию, надеюсь с беседы не кикнут за время службы. Увлекаюсь электроникой, фотографирую для себя, делюсь фотками с другими. Люблю тратить деньги. Смотрю аниме и иногда дорамы.
Человек порой стеснительный, часто глупенький, меломан.
Невысокий человечек со своими тараканами в голове. Очень обожаю женский пол :)
Люблю вкусно поесть


`,
      imagesUrl: [],
    },
    {
      name: 'Vsp Pyro',
      vkId: 644064237,
      text: `Никита
20 лет
Социофоб и Любитель накатить
Живу в тверской области близ лихославля
Обожаю играть в world of tanks и благодаря этому в своё время вёл 3 роты
Отношения? В пизду... все сложно но надежды увести не теряю
Спокойный но максимально чудной


`,
      imagesUrl: [],
    },
    {
      name: 'Сергей Андреев',
      vkId: 529988459,
      text: `Ну что же, я обитаю в мелком городе Ишиме, за Уралом (МСК+2 часа). В жизни малообщительный хикка, который постоянно витает в облаках. В интернете, естественно, я более открытый и общительный. Обращайтесь ко мне как пожелаете.
Характер у меня немного разносторонний - могу быть разным, но можно выделить общие черты: дружелюбный, прямолинейный, доверчивый, искренний. По большей части спокойный, но если раззадорить, то я стану незатыкаемым Голлумом. Не очень люблю конфликты и конфронтации.
Если подытожить информацию о личности, то являюсь довольно уязвимым человеком, которому со своим наивным характером и неправильном представлением о социальном взаимодействии опасно общаться в интернете, но готовый рискнуть.
Обладаю не хилым воображением, артистическим интересом и широкими взглядами. Не прочь поговорить на сложные темы, к которым, зачастую, не готов, поэтому не могу нормально расписать свою позицию. Ценю, когда можно полностью ладить с людьми, но не против поболтать с отличающимися личностями.
Я не очень активный, но чаще тыкайте меня палкой, чтобы заставить шевелиться. Но только в общении один на один можно увидеть меня настоящего, и то если повезёт. Самая частая тема разговора для меня - это о самом себе. Иногда слишком гиперболизирую какие-то мысли.
Пытаюсь в писательство, также работаю с 3D графикой, в качестве творческого хобби, но уделяю этому непростительно мало времени. Но плодов моего творчества скопилось не очень уж и много, зато куча всего интересного хранится в черепушке, и буду рад обсудить свои необычные идеи и концепты.
Очень сильно горжусь своим умением объединять самые разные несовместимые идеи и получать необычные коктейли. Возьмём внешность глубоководного костюма из «Calamity» мода, большого папочку из «Bioshock» и чуть-чуть от антагониста из первой «Кунг-фу Панды», и вуаля! Получился персонаж.
Являюсь заядлым меломаном, практически живу в наушниках. Обращайтесь, если хотите получить рекомендации от меня, потому что много всякого храниться в моём плейлисте. Начиная от русского треш-металла (который давно не слушаю) и заканчивая музыкой для медитации. Самый главный жанр выделить сложно, но больше всего у меня металла.
На счёт игр. В последнее время я стал от них сильно уходить, хотя до этого очень много играл. Предпочтения широкие, но мне не нравятся многопользовательские/онлайновые, соревновательные и файтинги, а так почти в любую игру буду готов пойти. Самые такие любимые игры у меня: Terraria, Bullet Per Minute, The Binding of Isaac, 7 days to die, Deep Rock Galactic, Stardew Valley, It Takes Two, серия Borderlands, Forest и так до бесконечности. Ретро-геймером себя бы не назвал, но вся эта тема со старыми консолями и играми выглядит для меня интересно.
Интересы и вкусы могут выглядеть сшитыми из противоположностей. Например: обожаю хорроры, особенно Body-хорроры, но также не брезгаю приторной милотой. Фильмы, аниме и сериалы смотрел крайне мало, что не сказать про мультфильмы. Большую часть свободного времени залипаю в Ютабчике. Но абсолютно все интересы мне лень вспоминать и расписывать.
Думаю это важно будет здесь подметить. Состою в фандоме фурри, а также бесконечно коллекционирую арты, связанные с ними.
Любимые цвета у меня такие: белый, чёрный, фиолетовый, изумрудный.


`,
      imagesUrl: [
        'https://sun9-77.userapi.com/impg/-2Jzk7HxCHcDt0EKtcUzTNwvVmBn7mLJjfXVWQ/VoenTMtYPNg.jpg?size=1280x1280&quality=96&sign=9da3ec436a4d7ebd2e420c45463f947f&type=album',
      ],
    },
    {
      name: 'Александр Казачинский',
      vkId: 517359736,
      text: `Всем привет, Я Александр, или Саша!
20 лет
Молодой управленец, начинающий организатор производства и общественно-политический деятель!
В последнее время я начал увлекаться самолетами (даже летную школу начал активно искать)
Также увлекаюсь проектированием, чтением, политологией, и играю в собственную версию Мафии (от классической она сильно отличается)
В свободное время либо я что-то проектирую, смотрю фильмы и слушаю музыку
К животным, как и к людям отношение - нормальное


`,
      imagesUrl: [],
    },
    {
      name: 'Владислав Орлов',
      vkId: 443945422,
      text: `Ну что же, опишу о себе за кружечкой чая.
Зовут меня Владислав, мне 22 года, рост 175 см, живу в городе Кемерово. Работаю, учусь заочно, в свободное время либо хожу на прогулку, либо сижу дома.
Не особо привередлив в общении, могу поддержать в чем-то, могу просто поддержать общение, если человек на то хочет. Сам по себе, человек-настроения. Могу из-за какой-нибудь мелочи обидется и через какое-то время быть как ни в чем не бывало. Одно из моих плохих черт.
Из увлечений: нравятся сингл-игры, в мультиплеерные играю редко, но если кто желает, могу собраться вместе. По жанрам - Экшн-РПГ (привет Обливион), шутеры старой школы (RTCW), Визуальные новеллы (правда в них я сейчас толком не играю, но читал такие произведения как: БЛ, KS, Danganronpa, Ace Attorney, Milk inside a bag of milk inside a bag of milk, Steins;Gate)
Любимый цвет — фиолетовый, правда в детстве очень любил синий цвет. Из еды предпочитаю макаронные изделия, обожаю гречку, ненавижу перловку.
Из напитков пью чай, по кофе фанатизма не имею, точно так же, как к энергетикам.
Из музыки, у меня нет таких отдельных поджанров, которые бы выделялись на фоне других.

`,
      imagesUrl: [],
    },
    {
      name: 'Дана Корочинская',
      vkId: 169249508,
      text: `Предпочитаю чтобы меня называли Владой)
21 год, работаю, живу жизнь, иногда радостно, иногда не очень.
Старательно пытаюсь найти "то самое" хобби для себя, но пока безуспешно. Берусь за все - ухожу ни с чем.
Учусь на парикмахера-стилиста сейчас.
Люблю всякое медицинское, красивое, странное и дурацкие песенки.
Очень люблю мемы, потому что это буквально лучшее что создало человечество.
Шалом!

`,
      imagesUrl: [],
    },
    {
      name: 'Akio Hanabi',
      vkId: 803325615,
      text: `Парень(из-за ника многие не могут разобрать)
Мне 24 года
Работаю
Конкретные увлечения выделить не могу из тех которыми занимаюсь давно, гитара(бас, электро, акустика), посещение всевозможных поэтических мероприятий, будь то конкурс чтецов или обычный квартирник, очевидно культура Азии меня привлекает очень сильно, даже К-ПОП в моем сердце.
Меломан, но больше предпочтение отдаю math-rock, heavy metal и джазу. Может у кого-то вопросы будут, отвечу на любые🙃😉


`,
      imagesUrl: [],
    },
    {
      name: 'Katerina Sedova',
      vkId: 195043705,
      text: `приветствую.) звать меня катя. мне 17. учусь в 10 классе, с профессией не определилась еще. эх.
ам, живу в Марий Эл, йошкар-ола.
люблю кушать, спать и деньги. глубокая любовь к котикам. увлекалась раньше достаточно много аниме, сейчас же, дай бог, серию за полгода посмотреть. мда. люблю читать, в основном мангу и фанфики, из жанров предпочитаю разные. романтику, эротику, драма, ужасы, боевик и конечно же гейскую порнуху. живу на ней.
из игр частично шарю за геншин(дальше 40 уровня не прошла, так как проблемки с техникой)
очень нравятся хоррор игры и побеги всякие, в основном зависаю на телефоне, иногда смотрю прохождения в ютубе.
ну, карты конечно люблю и какие-нибудь легкие игры.
ну дальше, музыка. я меломан. люблю все абсолютно, хотя возможно больше уделяю внимание року и репу. с недавнего времени перешла на k-pop. мда. зачастую сижу в наушниках, ну потому что без них никак.
из цветов так то нравятся все, но всё же предпочитаю голубой, бирюзовый, фиолетовый и конечно же ярко салатовый.)


`,
      imagesUrl: [
        'https://sun9-55.userapi.com/impg/zx4Caz4sYFtcomHlUQm7IWBCtVSUmTFf9Y8GPA/euyc6FX9rhc.jpg?size=736x962&quality=96&sign=dc7713cd7695022b3e699b0553f77b91&type=album',
      ],
    },
    {
      name: 'Dead-Dead-Dead Dead-Dead',
      vkId: 564576352,
      text: `Ну-с начнём
Мне 20 лет
Проживаю в Москве
Сейчас вот пишу диплом
Занимаюсь всем на свете начиная с кубика Рубика и заканчивая велосипедными походами. Пью, курю, особо не матюкаюсь. У вас тут в игрушки играют, я вот в фазмофобию, Раст и КС играю. Но это я делаю редко, так как учусь на дизигнера и по учебным делам постоянно в компе сижу, это утомляет. Люблю кошечек, собачек, всех животных, людей тоже. Что ещё написать...



`,
      imagesUrl: [],
    },
  ],
  currentUser: {},
  chats: [
    {
      name: 'Беседа ботов',
      link: 'https://vk.me/join/Ok_fO1yDQe9HhtMcKuSd7CQgxgIJ2DBpjqE=',
      image: botPfp,
      serviceName: 'ВК',
      text: 'Беседа ботов для игр и их дрюка без спама в основной беседе',
    },
    {
      name: 'Дискорд сервер',
      link: '',
      image: discordPfp,
      serviceName: 'Discord',
      text: 'Сервер для посиделок в войсе и совместных игр',
    },
    {
      name: 'Телеграм чат',
      link: 'https://t.me/+PCMV87p-lbJhYzgy',
      image: discordPfp,
      serviceName: 'Телеграм',
      text: 'Чат для времен, когда вк нестабилен и вот-вот развалится на части',
    },
  ],
};
const authAction = createAction('AUTH');
const reducer = createReducer(initialState, builder => {
  builder
    .addCase(authAction, (state, action) => {
      localStorage.setItem('loggedUser', JSON.stringify(action.payload));
      return {
        ...state,
        currentUser: action.payload,
      };
    })
    .addCase(actions.updateUsers, (state, action) => {
      return {
        ...state,
        bios: state.bios.map((bio, idx) => {
          return {
            ...bio,
            ...action.payload[idx],
          };
        }),
      };
    });
});

const store = configureStore({
  reducer,
});

export default store;

export const auth = authAction;
