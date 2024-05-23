const cheerio = require('cheerio');
const htmlText = `<h2 contenteditable="true" class="Rules_heading__+EKBV">Правила чата</h2><div class="Rules_disclaimerBlock__5lDxT"><p contenteditable="true" class="Rules_disclaimer__j4-b0">Не согласны с наказаниями? Попробуйте оспорить их <b>в лс</b>.</p> <p contenteditable="true" class="Rules_disclaimer__j4-b0">Предупреждения выдаются <b>на месяц</b> и обжалованию не подлежат. Коли вы будете часто нарушать - увы, вам здесь не место.</p> <p contenteditable="true" class="Rules_disclaimer__j4-b0">Кратко говоря, <b>запрещён любой негатив</b>. Мы стремимся к максимально доброй атмосфере по отношению ко всем, так как обратное вы можете увидеть в любой другой беседе.</p></div><h3 contenteditable="true" class="Rules_notApprovedHeading__azNA5">Не допускается:</h3><ol class="Rules_rulesList__5LsWV"><li class="Rules_rulesListItem__nw7xt"><p contenteditable="true" class="Rules_title__08BMK">Спам и флуд в любом виде</p>  <p contenteditable="true" class="Rules_special__0VVCC">(в т.ч. бессмысленное сранье рандомными (мешающими) картинками, репостами, мусорными сообщениями и т.п.).</p><ol class="Rules_rulesList__5LsWV"></ol></li><li class="Rules_rulesListItem__nw7xt"><p contenteditable="true" class="Rules_title__08BMK">Пиар, реклама и попрошайничество в любом виде.</p>  <ol class="Rules_rulesList__5LsWV"></ol></li><li class="Rules_rulesListItem__nw7xt"><p contenteditable="true" class="Rules_title__08BMK">Шок-контент</p>  <p contenteditable="true" class="Rules_special__0VVCC"></p><ol class="Rules_rulesList__5LsWV"><li class="Rules_rulesListItem__nw7xt"><p contenteditable="true" class="Rules_title__08BMK">Контент 18+ в неположенное время.</p> <p contenteditable="true" class="Rules_special__0VVCC">Разрешён с 00:00 до 03:00 по МСК ежедневно.</p><ol class="Rules_rulesList__5LsWV"></ol></li></ol></li><li class="Rules_rulesListItem__nw7xt"><p contenteditable="true" class="Rules_title__08BMK">Токсичность и агрессия.</p>  <p contenteditable="true" class="Rules_special__0VVCC">В виде рофлов также не одобряется.</p><ol class="Rules_rulesList__5LsWV"></ol></li><li class="Rules_rulesListItem__nw7xt"><p contenteditable="true" class="Rules_title__08BMK">Байты и провокации на сранье в чатике, на порчу его атмосферы.</p>  <p contenteditable="true" class="Rules_special__0VVCC">В виде рофлов также не одобряется.</p><ol class="Rules_rulesList__5LsWV"></ol></li><li class="Rules_rulesListItem__nw7xt"><p contenteditable="true" class="Rules_title__08BMK">Развитие различных конфликтов, споров, бесконечных доказываний друг другу чего-либо. Продолжительное выяснение отношений.</p>  <p contenteditable="true" class="Rules_special__0VVCC">В виде рофлов также не одобряется.</p><ol class="Rules_rulesList__5LsWV"></ol></li><li class="Rules_rulesListItem__nw7xt"><p contenteditable="true" class="Rules_title__08BMK">Тема политики и войны.</p>  <p contenteditable="true" class="Rules_special__0VVCC"></p><ol class="Rules_rulesList__5LsWV"></ol></li><li class="Rules_rulesListItem__nw7xt"><p contenteditable="true" class="Rules_title__08BMK">Неактив от 4 дней. И от 3 дней для тех, кто пользуется 4-дневным сроком и/или намеренно не пишет в беседу.</p>  <p contenteditable="true" class="Rules_special__0VVCC">При определенных условиях олдов/ньюфагов чата может не касаться.</p><ol class="Rules_rulesList__5LsWV"><li class="Rules_rulesListItem__nw7xt"><p contenteditable="true" class="Rules_title__08BMK">Незаинтересованность в беседе, что выражается скудной статистикой сообщений за какое-либо время.</p>  <p contenteditable="true" class="Rules_special__0VVCC">При определенных условиях олдов чата может не касаться.</p><ol class="Rules_rulesList__5LsWV"></ol></li><li class="Rules_rulesListItem__nw7xt"><p contenteditable="true" class="Rules_title__08BMK">Абуз правил и нахождение в чате, когда что-то в нём не устраивает, постоянное докапывание до системы и нарушение атмосферы чата.</p>  <p contenteditable="true" class="Rules_special__0VVCC"></p><ol class="Rules_rulesList__5LsWV"></ol></li><li class="Rules_rulesListItem__nw7xt"><p contenteditable="true" class="Rules_title__08BMK">Многократные возвращения, в т. ч. после вылета из-за многократных нарушений.</p>  <p contenteditable="true" class="Rules_special__0VVCC"></p><ol class="Rules_rulesList__5LsWV"></ol></li></ol></li><li class="Rules_rulesListItem__nw7xt"><p contenteditable="true" class="Rules_title__08BMK">Сомнительное раздражающее поведение с игнорированием его закончить, в т.ч. излишняя приставучесть к людям.</p>  <p contenteditable="true" class="Rules_special__0VVCC">Это правило работает только в случае, если кто-либо в чате не нравится многим участникам своим непонятным поведением.;`;

const parsedRules = [];

const $ = cheerio.load(htmlText);
const topLevelRules = $('.Rules_rulesListItem__nw7xt');

function parseRules(ruleElement) {
  const title = $(ruleElement).find('.Rules_title__08BMK').text().trim();
  const special =
    $(ruleElement).find('.Rules_special__0VVCC').text().trim() || '';

  const innerRules = [];
  const innerRuleElements = $(ruleElement).find('.Rules_rulesListItem__nw7xt');

  innerRuleElements.each((idx, innerRule) => {
    innerRules.push(parseRules(innerRule));
  });

  return {
    title,
    description: '',
    special,
    innerRules,
  };
}

topLevelRules.each((idx, rule) => {
  const topLevelRule = parseRules(rule);
  parsedRules.push(topLevelRule);
});

const parsedJson = JSON.stringify(parsedRules, null, 2);
console.log(parsedJson);
