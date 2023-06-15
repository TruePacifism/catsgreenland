import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import discordPfp from '../images/discord-pfp.jpg';
import botPfp from '../images/bot-pfp.jpg';
import telegramPfp from '../images/telegram-pfp.jpg';
import actions from './user-actions';
import colors from './colors-enum';
import games from './games-enum';
import hobbies from './hobbies-enum';

function importMusic() {
  const context = require.context('../music/', true, /\.mp3$/);
  const musicFiles = context.keys().reduce((files, filePath) => {
    const pathParts = filePath.split('/');
    const vkId = pathParts[1];
    const fileNameFull = pathParts[pathParts.length - 1];
    const fileName = fileNameFull.substring(0, fileNameFull.length - 4);
    const musicFile = context(filePath);
    const fileObject = { name: fileName, path: filePath, music: musicFile };
    if (!files[vkId]) {
      files[vkId] = [fileObject];
    } else {
      if (!filePath.startsWith('music')) {
        files[vkId].push(fileObject);
      }
    }
    return files;
  }, {});

  return musicFiles;
}

const hobbyStatus = {
  FORBIDDEN: 'Заброшено',
  NOT_SERIOUS: 'Не что-то серьезное',
  ON_GOING: 'Развивается',
  MONEYTISED: 'Зарабатывает',
  PROFESSIONAL: 'Профессионал',
};
const gameStatus = {
  COMPLETED: 'Пройдено',
  ON_GOING: 'Активно играется',
  FORBIDDEN: 'Заброшено',
  RARELY: 'Иногда играется',
};
const gender = {
  MALE: 'Мужской',
  FEMALE: 'Женский',
};

const musicFiles = importMusic();
// const musicFiles = importAll(require.context('../music', false, /\.mp3$/));

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
      games: [
        {
          ...games.GENSHIN,
          rating: '??',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.HONKAI,
          rating: '??',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.SEKAI,
          rating: '??',
          status: gameStatus.ON_GOING,
        },
      ],
      age: 15,
      gender: gender.MALE,
      colors: [colors.BLACK, colors.WHITE, colors.GREEN],
    },
    {
      vkId: 601128888,
      text: `всем приветик!! меня зовут Даша, хотя можно просто Виолетта. мне 19 лет. я отучилась на парикмахера-технолога в этом году. раньше увлекалась танцами, но из-за учебы пришлось бросить. в свободное время я общаюсь в интернете) в реал лайф у меня только два друга, и то один сейчас в другом городе, а с другой я живу, и если выбирать между общением в реал лайф и интернет-другом, то я выберу интернет. мне безумно нравится готовка, поэтому буду рада, если кто-нибудь поделится какими-нибудь крутыми рецептами)) а ещё люблю эстетику женского тела, ведь оно такое прекрасное, емае!! нравится природа.. все эти красивые картиночки, рассветы, закаты, полевые цветочки, а за пионы отдам что угодно....я дружелюбная, конечно, почти со всеми могу найти общий язык, но бывает такое, что хочется с кем-то поругаться, и я начинаю тогда искать себе цель..да, это ужасно на самом деле.. любимый цвет, наверное, всё-таки синий. он такой холодный, дерзкий, но и в этот же момент спокойный... игры я на телефоне/пк я не очень люблю. бывает играю в дурака онлайн. а ещё про фильмы..люблю ужасы (но именно те, где разрезают людей, и игры на выживание, я просто фанатею от этого), детективы, триллеры, ну и немного мелодрамы. не умею поддерживать людей, но всегда готова выслушать, так что добро пожаловать)


`,
      colors: [colors.BLUE],
      hobbies: [
        {
          name: hobbies.DANCING,
          status: hobbyStatus.FORBIDDEN,
        },
        {
          name: hobbies.COOKING,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.NATURE,
          status: hobbyStatus.NOT_SERIOUS,
        },
        {
          name: hobbies.MOVIES,
          status: hobbyStatus.NOT_SERIOUS,
        },
      ],
      games: [
        {
          ...games.FOOL_ONLINE,
          rating: '-',
          status: gameStatus.RARELY,
        },
      ],
      age: 19,
      gender: gender.FEMALE,
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
      colors: [colors.PINK, colors.PURPLE],
      hobbies: [
        {
          name: hobbies.GAMES,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.PROGRAMMING,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.MUSIC_PLAYING,
          status: hobbyStatus.FORBIDDEN,
        },
        {
          name: hobbies.MUSIC_LISTENERS,
          status: hobbyStatus.NOT_SERIOUS,
        },
        {
          name: hobbies.ANIME,
          status: hobbyStatus.NOT_SERIOUS,
        },
        {
          name: hobbies.MANGA_COMICS,
          status: hobbyStatus.NOT_SERIOUS,
        },
        {
          name: hobbies.MOVIES,
          status: hobbyStatus.NOT_SERIOUS,
        },
        {
          name: hobbies.LITERATURE,
          status: hobbyStatus.FORBIDDEN,
        },
        {
          name: hobbies.MUSIC_COMPOSITORS,
          status: hobbyStatus.FORBIDDEN,
        },
        {
          name: hobbies.STREAMS,
          status: hobbyStatus.NOT_SERIOUS,
        },
      ],
      games: [
        {
          ...games.OSU,
          rating: '2100 pp',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.BULLETS_PER_MINUTE,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.NOT_FOR_BROADCAST,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.COUNT_LUCANOR,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.JACKBOX_PARTY_PACK,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.DIABLO,
          rating: '',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.ISAAC,
          rating: 'Dead God',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.MINECRAFT,
          rating: '-',
          status: gameStatus.RARELY,
        },
        {
          ...games.HOLLOW_KNIGHT,
          rating: '112%',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DETROIT,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.RHYTHM_DOCTOR,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.UNDERTALE,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.TO_THE_MOON,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.ATOMIC_HEART,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.BIOSHOCK,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DELTARUNE,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.ADOFAI,
          rating: '',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.TINY_BUNNY,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.FAR_CRY,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.PORTAL,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.GEOMETRY_DASH,
          rating: 'Хардест Future Funk',
          status: gameStatus.RARELY,
        },
        {
          ...games.WARCRAFT,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DDLC,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.MUSEDASH,
          rating: '150+ уровень',
          status: gameStatus.RARELY,
        },
        {
          ...games.CELESTE,
          rating:
            'Все стороны А,Б,В (кроме 8В), все красные клубники, лунная клубника',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.ASSASSINS_CREED,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DEPONIA,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.JUST_SHAPES_AND_BEATS,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.GTA,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.INSCRYPTION,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.AMONG_US,
          rating: '',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.SLAY_THE_SPIRE,
          rating: '',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.SUPER_MARIO_BROS,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SIMS,
          rating: '',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.UNTITLED_GOOSE_GAME,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.HALF_LIFE,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.PLANTS_VS_ZOMBIES,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.NEED_FOR_SPEED,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.PLAGUE_INC,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.THERE_IS_NO_GAME,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SUPERLIMINAL,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.ROCK_OF_AGES,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.YUPPIE_PSYCHO,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SPIDER_MAN_WEB_OF_SHADOWS,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.ROAD_96,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.YES_YOUR_GRACE,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.LOST_IN_PLAY,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.FIFA,
          rating: '',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.I_RULE,
          rating: '',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.THE_HENRY_STICKMIN,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.TWELVE_MINUTES,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SPIDER_MAN_3,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.CRYPT_OF_THE_NECRODANCER,
          rating: '',
          status: gameStatus.RARELY,
        },
        {
          ...games.PROTOTYPE,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.I_HATE_THIS_GAME,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.CS_1_6,
          rating: '',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.MARVEL_ULTIMATE_ALLIANCE,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.X_MEN_LEGENDS_2,
          rating: '',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.GETTING_OVER_IT,
          rating: '',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.SPIDER_MAN_2000,
          rating: '',
          status: gameStatus.COMPLETED,
        },
      ],
      age: 20,
      gender: gender.MALE,
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
      colors: [colors.GREEN],
      games: [
        {
          ...games.DOTA,
          rating: 'Кастомки',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.CYBERPUNK,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.GENSHIN,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.FORTNITE,
          rating: '???',
          status: gameStatus.RARELY,
        },
      ],
      hobbies: [
        {
          name: hobbies.GAMES,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.ANIME,
          status: hobbyStatus.NOT_SERIOUS,
        },
        {
          name: hobbies.MOVIES,
          status: hobbyStatus.NOT_SERIOUS,
        },
        {
          name: hobbies.RUBIKS_CUBE,
          status: hobbyStatus.NOT_SERIOUS,
        },
      ],
      gender: gender.MALE,
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
      colors: [colors.RED, colors.CYAN],
      games: [
        {
          ...games.SEKAI,
          rating: '???',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.MINECRAFT,
          rating: '???',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.GTA,
          rating: '???',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.DIVA,
          rating: '???',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.MUSEDASH,
          rating: '???',
          status: gameStatus.RARELY,
        },
      ],
      hobbies: [
        {
          name: hobbies.COOKING,
          status: hobbyStatus.FORBIDDEN,
        },
        {
          name: hobbies.GAMES,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.LITERATURE,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.ANIME,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.MANGA_COMICS,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.COLLECTIONNING,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.VOCALOIDS,
          status: hobbyStatus.ON_GOING,
        },
      ],
      age: 26,
      gender: gender.FEMALE,
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
      colors: [colors.RED, colors.BLACK],
      games: [
        {
          ...games.GOD_OF_WAR,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.PHANTASY_STAR,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.FINAL_FANTASY,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.WILD_ARMS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SHINING_FORCE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.GUILTY_GEAR,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.MORTAL_KOMBAT,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DANGANRONPA,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.ACE_ATTORNEY,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DIVA,
          rating: '???',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.SEKAI,
          rating: '???',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.GUITAR_HERO,
          rating: '???',
          status: gameStatus.ON_GOING,
        },
      ],
      hobbies: [
        {
          name: hobbies.GAMES,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.ANIME,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.MANGA_COMICS,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.COLLECTIONNING,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.VOCALOIDS,
          status: hobbyStatus.ON_GOING,
        },
      ],
      gender: gender.MALE,
      imagesUrl: [
        'https://sun9-75.userapi.com/impg/HaVKHCHjy4SiCnLO16KcRltkb9ISKdZXrhvTjA/_8stnXrG-Ek.jpg?size=1280x720&quality=96&sign=b68d9a621242e9b1569e88144c3fe156&type=album',
      ],
    },
    {
      name: 'Элинор Гринландская',
      vkId: 673124862,
      text: `Элинор, Эли, в принципе как угодно. возраст не секрет можно посмотреть в профиле конечно же, да. не учусь! потому что в прошлом таки не решила на кого собственно хочу учиться. очень лениво работаю, да и вообще я живу как содержанка. в свободное время рисую пальцем на 10 Айфоне, да. не считаю себя художником, я недовольна своим скиллом абсолютно, хотя постоянно пытаюсь как-то совершенствоваться. (если есть желание, могу конечно же нарисовать что-то для вас за символическую плату)). я не переношу подробные рассказы о каких либо травмах и в принципе, мне противно от всего, что с этим связано, поэтому если я попросила вас не говорить об этом в чате, пожалуйста по возможности постарайтесь перенести диалог в личные сообщения(речь идёт о физических травмах если что, не нужно мне в красках описывать, как вы до мяса разодрали вчера ногу)) а так я в принципе няшка, не люблю споры и жёсткие срачи в принципе по любым темам, но если вопрос касается меня непосредственно, я все же не останусь в стороне. в принципе стараюсь наладить отношения со всеми и если вчера мы с вами собачились, не значит что сегодня я вспомню как вы вчера мне насолили. я просто не злопамятная и в принципе могу простить что угодно наверное да. иногда я могу пропасть и не появляться в чате неделями. нет, это не значит что у меня куча дел, работы, долгов и тд. я просто устала и не пишите короче мне лишний раз. больше ничего о себе я сказать не могу. че там в конце пишут ээ...я люблю Леву


`,
      hobbies: [
        {
          name: hobbies.WRITING,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.DRAWING,
          status: hobbyStatus.ON_GOING,
        },
      ],
      gender: gender.MALE,
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
      gender: gender.MALE,
      hobbies: [
        {
          name: hobbies.GAMES,
          status: hobbyStatus.NOT_SERIOUS,
        },
      ],
      games: [
        {
          ...games.GENSHIN,
          rating: '???',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.SKULL_GIRLS,
          rating: '???',
          status: gameStatus.ON_GOING,
        },
      ],
      imagesUrl: [
        'https://sun9-80.userapi.com/impg/aN_G7BOi7wxvlPOoUQYfSjkvF3JLOS5rB1aHMQ/V-YAT0bET0A.jpg?size=1080x619&quality=96&sign=92ed391223ce149654661e7c00313061&type=album',
      ],
    },
    {
      name: 'Марат Айнулин',
      vkId: 48806562,
      text: `Так вот, с чего бы начать. Зовут меня... ну, вы уже знаете, но в основном ко мне обращаются по нику Дост, ибо по соционике я Достоевский, да, так уж вышло. Живу я в городе Пенза. На момент написания этого рассказика мне уже целых 28 лет, а в марте стукнет целых 29, да, вот такой я дед)) Я практически самый обычный человек, но слишком активный, занимаюсь акробатикой и почти уже 10 лет волейболом (я просто обожаю этот вид спорта). Люблю посмотреть фильмы и сериалы. Ещё больше люблю поиграть в различные видеоигры (иногда даже постримить на твиче, ЭТО НЕ РЕКЛАМА, не люблю рекламу)), в основном файтинги, ритм игру Осу и StarCraft II, но и командными играми тоже не брезгую. Сейчас изучаю три языка, японский, древнегреческий (господи, какой же он сложный) и английский (на английском могу более менее сносно разговаривать, спасибо онлайн играм)) А ещё учу язык программирования Javascript. Сам по себе человек я общительный, спокойный, но могу быть и жёстким. Мой любимый цвет красный и только красный, моё любимое число 5 (не знаю почему, вот 5 и всё тут))


`,
      age: 29,
      gender: gender.MALE,
      hobbies: [
        {
          name: hobbies.SPORT,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.MOVIES,
          status: hobbyStatus.NOT_SERIOUS,
        },
        {
          name: hobbies.GAMES,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.STREAMER,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.PROGRAMMING,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.LANGUAGES,
          status: hobbyStatus.ON_GOING,
        },
      ],
      games: [
        {
          ...games.GUILTY_GEAR_STRIVE,
          rating: '???',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.COD_WARZONE_II,
          rating: '???',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.RAINBOW_SIX,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.RESIDENT_EVIL,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SILENT_HILL,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SIGNALIS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.AMNESIA,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.OUTLAST,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.PARASITE_EVE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DINO_CRISIS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.BEYOND_TWO_SOULS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.HEAVY_RAIN,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SIFU,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.REMEMBER_ME,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.OBSCURE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.BIOSHOCK,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.PORTAL,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.ATOMIC_HEART,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.REPUBLIQUE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.WITCHER,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.HITMAN,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DISHONORED,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.METAL_GEAR_SOLID,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SEKIRO,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.METAL_GEAR_RISING,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DOTA,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
      ],
      colors: [colors.RED],
      imagesUrl: [],
    },
    {
      name: 'Иван Иванов',
      vkId: 591214241,
      text: `Здравствуй.
-Меня зовут Иван(не люблю когда называют уменьшительно-ласкательными и когда моё имя начитают с буквы В: Ваня и т.п), на момент написания мне 16 лет, живу в городе Чебоксары, учусь я на мед.брата.
-Из хобби у меня: видеоигры: предпочитаю выживачи и шутеры.
Музыка: в основном электроника и OST из игр. Но так же слушаю единичные треки из других жанров.
Аниме: смотрю всё подряд.
Готовка и спорт. Также являюсь фанатом Madness Combat. Ещё я начал активно играть и интересоваться DnD.
-Есть некоторые проблемы с общением в реальном мире. В плане, мне не очень уютно свободно общаться с незнакомыми людьми ( меня это бесит ) поэтому я довольно молчалив(но в интернете нет). Так же меня очень трогает когда говорят о моем лице, росте и телосложении.
любимые цвета: черный и тёмно-красный, чуть меньше синий и зелёный.
`,
      colors: [colors.RED, colors.BLACK],
      age: 16,
      gender: gender.MALE,
      games: [
        {
          ...games.DND,
          rating: '???',
        },
      ],
      hobbies: [
        {
          name: hobbies.GAMES,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.MUSIC_LISTENERS,
          status: hobbyStatus.NOT_SERIOUS,
        },
        {
          name: hobbies.ANIME,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.COOKING,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.SPORT,
          status: hobbyStatus.ON_GOING,
        },
      ],
      imagesUrl: [
        'https://sun9-73.userapi.com/impg/K5UXS9S-lCTJS6Rbdf_5e8HfMVuU_poeAm2fIA/LwtmFjoUcMQ.jpg?size=720x720&quality=95&sign=ec5c97578bc3e64fe9235fe1da5c2784&type=album',
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
      colors: [colors.WHITE, colors.BLUE, colors.PINK],
      gender: gender.FEMALE,
      hobbies: [
        {
          name: hobbies.PROGRAMMING,
          status: hobbyStatus.FORBIDDEN,
        },
        {
          name: hobbies.LITERATURE,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.MANGA_COMICS,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.ANIME,
          status: hobbyStatus.NOT_SERIOUS,
        },
        {
          name: hobbies.MOVIES,
          status: hobbyStatus.NOT_SERIOUS,
        },
        {
          name: hobbies.MUSIC_WRITERS,
          status: hobbyStatus.ON_GOING,
        },
      ],
      imagesUrl: [
        'https://sun9-9.userapi.com/impg/Qu7KR6Jl_Zikpf9h2G1PNtgTZxxfBg2EowgrvA/v07USPk7kps.jpg?size=1428x2048&quality=96&sign=e9369e68ab46012c0033f8dc27cb81c8&type=album',
      ],
    },
    {
      name: 'Ксения Ленская',
      vkId: 463284975,
      text: `Меня зовут Ксюша, можно звать как угодно, но не Оксана и не Ксения (от последнего такое чувство, будто у меня щас будут проблемы). Мне 21 год, рост ± 170, родилась и живу в Москве, выучилась на воспитателя в дет.сад для особых детей. Волей судьбы случилось так, что я работаю почти по профессии, хотя клялась, что с меня хватит. Уже 4 месяца я работаю в сервисе 'Няня особого назначения'. Сказать что я влюблена в это дело - ничего не сказать. По интересам: раньше я была жутким книжным червем, сейчас, конечно, времени поменьше на это дело, но я все также не могу представить жизнь без книг. Ещё иногда поигрываю в Геншин. Музыка: весь рок, но чаще играет в ушах, панк/поп/хард/металл/Пауэр металл рок. Относительно недавно открыла в себе общительность, очень люблю это все, почти как второе дыхание открылось. Влюблена в природу, город и людей вокруг. Мой любимый цвет - голубой и фиолетовый! 💙💜🤓


`,
      colors: [colors.LIGHT_BLUE, colors.PURPLE],
      hobbies: [
        {
          name: hobbies.NURSING,
          status: hobbyStatus.PROFESSIONAL,
        },
        {
          name: hobbies.LITERATURE,
          status: hobbyStatus.ON_GOING,
        },
      ],
      age: 21,
      gender: gender.FEMALE,
      games: [
        {
          ...games.GENSHIN,
          rating: '???',
          status: gameStatus.RARELY,
        },
      ],
      imagesUrl: [],
    },
    {
      name: 'Камилла Гринландская',
      vkId: 373718115,
      text: `Я принимаю любые сокращения и "клички" (но не коверканья) кроме Кама и Камила. Также попрошу не тегать меня без особо веских причин. Я всегда читаю абсолютно все сообщения в беседе и с легкостью увижу что-то важное в любом случае. А если нужно что-то срочное, то тег не поможет либо я итак буду онлайн и также все рассмотрю.
Ну и постарайтесь не шутить несмешные шутки в мою сторону, а также в шутку гнать. Мне это не понравится.

А вообще, я много общаюсь и часто онлайн, поэтому стараюсь по максимуму обращать внимание на всех своих участников.
Раньше мы были частью сетки цветных бесед, где нужно было выбрать цвет. Я выбрала зелёный, потому что он мой любимый. Котиков мы полюбили всем чатом, поэтому название тоже содержит их.

Имею пустую страницу пушто мне так комфортно, но я не фейк. Аватарки меняла бы очень часто, поэтому пришла к выводу что лучше их вообще не ставить. Любые другие фото или картинки на странице не вижу смысла держать, только если это не рисунки Славы. Ничего на страницу не публикую - не вижу в этом нужды и желания. Статус тоже не имеет смысла существовать на моей странице. В «друзьях» оставляю тех, с кем поддерживаю общение, остальных могу спокойно убрать. Хотя, заимев эту беседу, оставляю еще ребяток оттуда до их исчезновения.

Кратковременными занятиями помимо вечного общения могут послужить просмотр чего-либо, вязание, учеба, изучение информации. Еще любила срисовывать, но в последнее время ленюсь ужасно, даже если хочу. Из музыки нравятся песни на грустный мотив, любимые исполнители - Пиро и ему подобные.

`,
      colors: [colors.GREEN],
      hobbies: [
        {
          name: hobbies.KNITTING,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.DRAWING,
          status: hobbyStatus.NOT_SERIOUS,
        },
      ],
      gender: gender.FEMALE,
      imagesUrl: [
        'https://sun9-25.userapi.com/impg/kjJlfJ42YpusldV_CyznxDezoyYNp8LvIRNUgA/Z9SE6YcN1U8.jpg?size=1200x750&quality=96&sign=d8ceb0d8ce123bb84a2c8b60c8b5478a&type=album',
      ],
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
      age: 20,
      gender: gender.MALE,
      games: [
        {
          ...games.WORLD_OF_TANKS,
          rating: '???',
          status: gameStatus.ON_GOING,
        },
      ],
      imagesUrl: [],
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
      age: 20,
      hobbies: [
        {
          name: hobbies.PLANES,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.PROJECTS,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.LITERATURE,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.POLITICS,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.MOVIES,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.MUSIC_LISTENERS,
          status: hobbyStatus.ON_GOING,
        },
      ],
      gender: gender.MALE,
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
      colors: [colors.WHITE, colors.BLACK, colors.PURPLE, colors.GREEN],
      gender: gender.MALE,
      games: [
        {
          ...games.BULLETS_PER_MINUTE,
          rating: '???',
        },
        {
          ...games.YUPPIE_PSYCHO,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.JACKBOX_PARTY_PACK,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.DEAD_RISING,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SOUTH_PARK_STICK_OF_TRUTH,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.COUNT_LUCANOR,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DO_NOT_FEED_THE_MONKEYS,
          rating: '???',
        },
        {
          ...games.ALAWAR,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.G_FORCE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.NEIGHBOUR_FROM_HELL,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SONIC,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.GHOSTBUSTERS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.HARD_RESET,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.CRYSIS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DOOM,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.FREEDOOM,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.BORDERLANDS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.MINECRAFT_STORY_MODE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.MINECRAFT,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.SAINTS_ROW,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.NOITA,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.CARMAGEDDON,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SOUL_KNIGHT,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.FEAR,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.FAR_CRY,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.JUST_CAUSE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.POKEMONS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SLIME_RANCHER,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.EARN_TO_DIE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.TERRARIA,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.DANGANRONPA,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.ACE_ATTORNEY,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.CROSSOUT,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.WORLD_OF_TANKS,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.FOREST,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SONS_OF_THE_FOREST,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.JUST_SHAPES_AND_BEATS,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.TRICKY_TOWERS,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.CASTLE_CRASHERS,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.LOBOTOMY_CORPORATION,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DATA_WING,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SEVEN_DAYS_TO_DIE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.ISAAC,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.DEEP_ROCK_GALACTIC,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.PORTAL,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SCRAP_MECHANIC,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.LEGO,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.BEAMNG_DRIVE,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.AS_DUSK_FALLS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.INSCRYPTION,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.TEARDOWN,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.VISCERA_CLEANUP,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.VRCHAT,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.RAYMAN,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.GENSHIN,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.AMONG_US,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.DIG_OR_DIE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.BIOSHOCK,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.PILLARS_OF_ETERNITY,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.DISHONORED,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.NEXOMON,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.ENTER_THE_GUNGEON,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.MONSTER_TRAIN,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.SLAY_THE_SPIRE,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.FALL_GUYS,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.DETROIT,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.FALLOUT,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.JUST_DANCE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.KERBAL_SPACE_PROGRAM,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.METRO,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.OVERCOOKED,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.MUDRUNNER,
          rating: '???',
        },
        {
          ...games.DESPOTISM_3K,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.RAGE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.STRANDED_DEEP,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.STICK_FIGHT,
          rating: '???',
        },
        {
          ...games.SUPRALAND,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.THE_ESCAPISTS,
          rating: '???',
        },
        {
          ...games.THE_LONG_DARK,
          rating: '???',
        },
        {
          ...games.PAPERS_PLEASE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.HAT_IN_TIME,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.MARIO_3D,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.MARIO_CART,
          rating: '???',
        },
        {
          ...games.WOOLLY_YOSHIS_WORLD,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SUPER_MARIO_BROS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.IT_TAKES_TWO,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.WOBBLE_DOGS,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.ASTRONEER,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SIMS,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.GTA,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.GOAT_SIMULATOR,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.STICK_IT_TO_THE_MAN,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.I_AM_BREAD,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.VAMPIRE_SURVIVORS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.UNDERTALE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DELTARUNE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.UNTITLED_GOOSE_GAME,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.STARDEW_VALLEY,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SALLY_FACE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.OCTODAD_DADLIEST_CATCH,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.ROBLOX,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.SACKBOY_A_BIG_ADVENTURE,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.SPORE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SKYRIM,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.HALF_LIFE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.HOUSE_FLIPPER,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.CRAFT_THE_WORLD,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.THEY_ARE_BILLIONS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DICEY_DUNGEON,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.TABS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.HOTLINE_MIAMI,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.DESTROY_ALL_HUMANS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DUCKTALES,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.TONY_HAWK_PRO_SKATER,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.CONTRA,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.SUBNAUTICA,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.BROFORCE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SPIDERMAN_SHATTERED_DIMENSIONS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.PLANTS_VS_ZOMBIES,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DONT_STARVE,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.RAFT,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.STARBOUND,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.TAZ_WANTED,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.NEED_FOR_SPEED,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.MAD_MAX,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.THE_OUTER_WORLDS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.PLAGUE_INC,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SNIPER_ELITE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.HEAVENLY_BODIES,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.PEACE_DEATH,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.PONY_ISLAND,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.EDNA_AND_HARVEY,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.MAFIA,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.HELLO_NEIGHBOUR,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.STANLEY_PARABLE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.TO_THE_MOON,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.FRAN_BOW,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.LITTLE_MISFORTUNE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.THE_DARK_PICTURES,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.AI_DUNGEON,
          rating: '???',
          status: gameStatus.RARELY,
        },
        {
          ...games.EVERLASTING_SUMMER,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.LOVE_MONEY_ROCKNROLL,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SAKURA_SPIRITS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.TINY_BUNNY,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
      ],
      hobbies: [
        {
          name: hobbies.WRITING,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies._3D_GRAPHICS,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.MUSIC_LISTENERS,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.GAMES,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.MOVIES,
          status: hobbyStatus.NOT_SERIOUS,
        },
        {
          name: hobbies.ANIME,
          status: hobbyStatus.NOT_SERIOUS,
        },
        {
          name: hobbies.YOUTUBE_WATCHER,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.FURRY,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.COLLECTIONNING,
          status: hobbyStatus.ON_GOING,
        },
      ],
      imagesUrl: [
        'https://sun9-77.userapi.com/impg/-2Jzk7HxCHcDt0EKtcUzTNwvVmBn7mLJjfXVWQ/VoenTMtYPNg.jpg?size=1280x1280&quality=96&sign=9da3ec436a4d7ebd2e420c45463f947f&type=album',
      ],
    },
    {
      name: 'Вера Белка',
      vkId: 559110911,
      text: `Всем привет, с вами Верочка белочка. Это не потому что у меня белка, а потому что мама в детстве так назвала.
Мне 16, но надеюсь я не буду слишком шестнадцатилетней для вас. Я из Москвы, но родной город Пенза . от туда кстати Егор Крид. Ну вот теперь и думайте совпадение ли что 2 легенды родились в одном городе?
Могу рассказать свой любимый анекдот, но лучше расскажу почему я могу иногда пропадать из чата и надеюсь меня пойдут. У меня есть болезнь с головой, название которой я предпочитаю не называть. И как раз из-за неё меня может выключить из социума на дня 3-6. Всегда по разному. Буду стараться не отставать и стану вам хорошим другом :)

`,
      age: 16,
      gender: gender.FEMALE,
      imagesUrl: [],
    },
    {
      name: 'Кирилл Мейбибейбиков',
      vkId: 339098349,
      text: `Вообщем да, доброй ночи мальчики и девочки, я Кирилл, мне 20 лет, закончил грубо говоря 2 дня назад поварской техникум, и имею 3 разряд повара)
увлекаюсь игрой в доту, люблю смотреть баскетбольные ассоциации и в частности выходить на площадку и самому играть)
Пробовал себя в профессиональном баскетболе и в киберспорте, ни там ни там не получилось, но и все равно, продолжаю играть)`,
      age: 20,
      gender: gender.MALE,
      games: [
        {
          ...games.DOTA,
          rating: '???',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.HENTAI_GAMES,
          rating: '80 LVL',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.WITCHER,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.ADVENTURES_OF_HOOL,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.NOT_FOR_BROADCAST,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.ALBION_ONLINE,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.ALIEN_SWARM,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.APERTURE_DESK_JOB,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.APEX,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.ARK,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.ARMA,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.BATTLE_RANCH,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.BATTLEFIELD,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.BOOM_BAHH,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.BORDERLANDS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.BRUTAL_LEGEND,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.COD_MODERN_WARFARE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.CITIES_SKYLINES,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.COUNTER_STRIKE_ZERO,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.CS_1_6,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.CS_GO,
          rating: '???',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.CS_SOURCE,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.DAY_OF_DEFEAT,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DEFY_GRAVITY,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DONT_STARVE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.TES_ONLINE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SKYRIM,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.EVERLASTING_SUMMER,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.FALSE_FRONT,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.FARTHEST_FRONTIERS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.FATHERS_DAY,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.FOR_HONOR,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.FROSTPUNK,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.GARRYS_MOD,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.GHOST_EXILE,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.HARD_TRUCK_APOCALYPSE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.HOUSE_OF_CARAVAN,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.I_HATE_THIS_GAME,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.INSURGENCY,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.JUST_CAUSE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.LEFT_4_DEAD,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.LEGO,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.LIFE_IS_STRANGE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.MAGICKA,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.MARAUDER,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.MARBLE_DUEL,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.MEN_OF_WAR,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.METRO,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.MORTAL_KOMBAT,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.NARUTO_TO_BORUTO,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.NASH_RACING,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.PALADINS,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.PARAGON_THE_OVERPRIME,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.PAYDAY,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.PHASMOPHOBIA,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.PIXELMAN,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.PORTAL,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.RAFT,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.RED_LAKE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.THE_RED_SOLSTICE,
          rating: '???',
          status: gameStatus.FORBIDDEN,
        },
        {
          ...games.RISE_OF_THE_ANCIENTS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.RUST,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SEPTEMBER_7TH,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SHADOW_WARRIOR,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.CIVILIZATION,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SLEDGEHAMMER,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SOULWORKER,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SPOOKYS_JUMP_SCARE_MANSION,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.STALKER,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.STONEHEARTH,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.STRANGE_NIGHT,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.STRONGHOLD,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SUMMER_OF_58,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.TERRARIA,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.VISCERA_CLEANUP,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.WILD_WEST_ROGUE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.FORTNITE,
          rating: '???',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.UNRAILED,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.SHADOW_TACTICS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.ALIEN_ISOLATION,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.AMNESIA,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.ASSASSINS_CREED,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.BLAIR_WITCH,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.CONTROL,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.CYBERPUNK,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DAEMON_X_MACHINA,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DEATH_STRANDING,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.DYING_LIGHT,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.GODFALL,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.GTA,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.HAND_OF_FATE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.HITMAN,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.IN_SOUND_MIND,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.KEN_FOLLETS_THE_PILLARS_OF_THE_EARTH,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.KILLING_FLOOR,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.LAYERS_OF_FEAR,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.NBA,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.OBDUCTION,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.RAGE,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.RELICTA,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.VALORANT,
          rating: '???',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.VAMPYR,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.VERDUN,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.WATCH_DOGS,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.HOGWARTS_LEGACY,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.ATOMIC_HEART,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.COD_WARZONE_II,
          rating: '???',
          status: gameStatus.COMPLETED,
        },
        {
          ...games.MINECRAFT,
          rating: '???',
          status: gameStatus.ON_GOING,
        },
      ],
      hobbies: [
        {
          name: hobbies.COOKING,
          status: hobbyStatus.PROFESSIONAL,
        },
        {
          name: hobbies.GAMES,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.SPORT,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.CYBER_SPORT,
          status: hobbyStatus.FORBIDDEN,
        },
      ],
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
      colors: [colors.LIGHT_BLUE, colors.CYAN, colors.PURPLE, colors.GREEN],
      age: 17,
      gender: gender.FEMALE,
      games: [
        {
          ...games.GENSHIN,
          rating: '40 уровень',
        },
      ],
      hobbies: [
        {
          name: hobbies.ANIME,
          status: hobbyStatus.FORBIDDEN,
        },
        {
          name: hobbies.LITERATURE,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.MANGA_COMICS,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.FANFICS,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.GAMES,
          status: hobbyStatus.NOT_SERIOUS,
        },
        {
          name: hobbies.MUSIC_LISTENERS,
          status: hobbyStatus.ON_GOING,
        },
      ],
      imagesUrl: [
        'https://sun9-55.userapi.com/impg/zx4Caz4sYFtcomHlUQm7IWBCtVSUmTFf9Y8GPA/euyc6FX9rhc.jpg?size=736x962&quality=96&sign=dc7713cd7695022b3e699b0553f77b91&type=album',
      ],
    },
    {
      name: 'オレチカ チャン',
      vkId: 805069363,
      text: `Здравствуйте :D.
•Меня зовут Оля, можно называть меня Оля, Олечка, Оленька, хоть клички или как там давать, но не Ольга (неприятно.. Такое чувство будто-то обращаются к женщине) .
•обо мне : я родилась и живу в России в Тюменской области (мск+2).Мне ПОЧТИ 13 лет (день рождения - 09.19) . Мой рост составляет 1.51 и поэтому обычно люди которые меня окружают в реальности называют карликом.. Но я даже можно сказать не против.Я перехожу в 7 класс.Мой знак зодиака Дева как вы поняли по дню рождению.Я играю в одну онлайн игру и это Neverland. Я сначала скачала эту игру по приколу но потом меня втянуло в неё. Люблю очень животных. У меня есть кот и его зовут Борис, он серо-белой окраски, и даже немного серо-голубоватой. Ему уже 2 года. Мои любимые цвета это синий, чёрный, фиолетовый и сиреневый. Немножечко люблю рисовать,по большей части читаю манхвы и немного смотрю аниме. Люблю слушать музыку. Я слушаю разную музыку, то есть я можно сказать меломан. Люблю гулять зимой вечером , либо вообще люблю гулять под дождём. Из реальности я знакома со множеством людей но общаюсь можно сказать не с кем, тк я не умею поддерживать диалог, если только у меня с этим человеком найдутся общие вкусы. В интернете у меня есть немного друзей, но так я сильно не с кем не общаюсь, хоть и зависаю 24/7 в сети. Ну я решила исправить эту мою необщительность и я хочу стать более общительным и открытым человеком, но всё равно что-то мешает мне это Сделать. Из еды,мне нравятся пельмешки и очень люблю морские продукты.
`,
      colors: [colors.BLUE, colors.BLACK, colors.PURPLE],
      age: 12,
      alert: 'new',
      gender: gender.FEMALE,
      hobbies: [
        {
          name: hobbies.ANIMALS,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.DRAWING,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.MANGA_COMICS,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.ANIME,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.MUSIC_LISTENERS,
          status: hobbyStatus.NOT_SERIOUS,
        },
        {
          name: hobbies.WALKING,
          status: hobbyStatus.NOT_SERIOUS,
        },
      ],
      games: [
        {
          ...games.NEVERLAND,
          status: gameStatus.ON_GOING,
        },
      ],
      imagesUrl: [
        'https://sun9-19.userapi.com/impg/MgoPWEhpdm7GR_cPcFcWRSoXWxA7wZbsBGiPOQ/lRxJFHt5cys.jpg?size=736x982&quality=95&sign=7f400485c14f6dcadfd5892fee79eb6d&type=album',
      ],
    },
    {
      name: '당신-것 여우',
      vkId: 776454642,
      text: `О себе
Екатерина
ДР: 14.06.2005.
Дорамщик, к-попер, тик токер, веду ТГ каналы, шарю за корейцев и вселенную Гарри Поттера.
Есть только лучшая подруга, не имею ни парня, ни друга, что немного радует.
Легко ранимая , одновременно веселая, но и закрытая девочка.
`,
      age: 18,
      alert: 'new',
      gender: gender.FEMALE,
      hobbies: [
        {
          name: hobbies.DORAMAS,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.TIKTOKER,
          status: hobbyStatus.ON_GOING,
        },
      ],
      imagesUrl: [],
    },
    {
      name: 'Ilya Wieliczko',
      alert: 'new',
      vkId: 712497882,
      text: `Характер скверный. Не женат.

Илья. Клички или прозвища нет. Родом from Transnistria, оно же Приднестровье, оно же ПМР. Живу в Бендерах. Рост ± 183. Работал в сфере киберразведки. Сейчас в той или иной степени до сих пор занимаюсь этим. В свободное время занимаюсь историей, психологией, собой. Люблю разную музыку, но в основном предпочтение падает на что-то тяжёлое. Своей страстью считаю оружие и сигареты. До жути люблю кошек, по возможности фотографирую каждую встречную или чьи-то домашние кисы. Нравится так же запечатлять на камеру рассветы, закаты или просто погодные состояния, небо. Из алкоголя люблю бурбон. Терпеть не могу вина и коньяки.
`,
      gender: gender.MALE,
      colors: [colors.GRAY],
      hobbies: [
        {
          name: hobbies.WEAPONS,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.ANIME,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.MUSIC_LISTENERS,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.AUTO,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.HUNTING,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.WEAPONS,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.WEAPONS,
          status: hobbyStatus.ON_GOING,
        },
      ],
      games: [
        {
          ...games.COMPANY_OF_HEROES,
          rating: '',
          status: gameStatus.RARELY,
        },
        {
          ...games.LEAGUE_OF_LEGENDS,
          rating: '',
          status: gameStatus.ON_GOING,
        },
        {
          ...games.MINECRAFT,
          rating: '',
          status: gameStatus.RARELY,
        },
        {
          ...games.TERRARIA,
          rating: '',
          status: gameStatus.RARELY,
        },
        {
          ...games.WORLD_OF_TANKS,
          rating: '',
          status: gameStatus.ON_GOING,
        },
      ],
      imagesUrl: [],
    },
    {
      name: 'Серёжа Воронцов',
      alert: 'new',
      vkId: 221702211,
      text: `Серёжа 21 год
Живу на данный момент в Ростове
Учусь и работаю
Живу один
Предпочтения как у большинства парней в моем возрастном диапазоне,это поковыряться в машине,отдохнуть от рабочей недели
Рост 188
`,
      age: 21,
      gender: gender.MALE,
      hobbies: [
        {
          name: hobbies.AUTO,
          status: hobbyStatus.ON_GOING,
        },
      ],
      imagesUrl: [],
    },
    {
      name: 'Алексей Васильев',
      vkId: 7401525,
      alert: 'new',
      text: `Я родом из маленького города Вязьма, в Смоленской области. Три года назад переехал к девушке в Питер и завис тут насовсем, купил участок в Ленобласти, строю дом, редиску вот посадил)
Работаю кладовщиком и водителем складской техники в онлайн магазине "ОнлайнТрейд" .
В свободное время читаю книги, чиню автопром свой, воспитываю собаню, играю на гитаре и пишу музыку. 10 лет до Питера занимался театром.
`,
      gender: gender.MALE,
      hobbies: [
        {
          name: hobbies.LITERATURE,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.MUSIC_PLAYING,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.MUSIC_COMPOSITORS,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.THEATER,
          status: hobbyStatus.ON_GOING,
        },
      ],
      imagesUrl: [],
    },
    {
      name: 'Show Men',
      vkId: 476653623,
      text: `Меня зовут Эльдар. Мне 20 лет. Я живу в Казахстане в городе Атырау, Я окончил 5 курс Прикладного бакалавриата Прикаспийского современного высшего колледжа. Слушаю любимую музыку и смотрю любимые фильмы и кино. А также я люблю играть в компьютерные игры.
`,
      colors: [colors.LIGHT_BLUE, colors.CYAN, colors.PURPLE, colors.GREEN],
      alert: 'new',
      age: 20,
      hobbies: [
        {
          name: hobbies.MUSIC_LISTENERS,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.MOVIES,
          status: hobbyStatus.ON_GOING,
        },
        {
          name: hobbies.GAMES,
          status: hobbyStatus.ON_GOING,
        },
      ],
      gender: gender.MALE,
      imagesUrl: [],
    },
    {
      name: 'Даня Рябцев',
      vkId: 414046636,
      text: `Что же, что то о себе ._.
Нус, 21 годик, отучился на специалиста в области информационной безопасности «полная херь, если уж честно»
Играю в Rust, DayZ, иногда в Valorant
На этом наверное все :/`,
      alert: 'new',
      hobbies: [
        {
          name: hobbies.GAMES,
          status: hobbyStatus.ON_GOING,
        },
      ],
      gender: gender.MALE,
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
      image: telegramPfp,
      serviceName: 'Телеграм',
      text: 'Чат для времен, когда вк нестабилен и вот-вот развалится на части',
    },
  ],
  bioMusic: musicFiles,
  isBurgerOpen: false,
  isDarkTheme: false,
};
const authAction = createAction('AUTH');
const reducer = createReducer(initialState, builder => {
  builder
    .addCase(authAction, (state, action) => {
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
    })
    .addCase(actions.toggleTheme, state => {
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    })
    .addCase(actions.setOpenBurger, (state, action) => {
      return {
        ...state,
        isBurgerOpen: action.payload,
      };
    });
});

const store = configureStore({
  reducer,
});

export default store;

export const auth = authAction;
