import styles from './Rules.module.css';

const rules = {
  notApprovedTitle: 'Не допускается:',
  notApprovedList: [
    {
      title: 'Спам и флуд в любом виде',
      description: `(в т.ч. бессмысленное сранье рандомными (мешающими) картинками, репостами, мусорными сообщениями и т.п.).`,
      special: ``,
      innerRules: [],
    },
    {
      title: 'Пиар, реклама и попрошайничество в любом виде.',
      description: ``,
      special: ``,
      innerRules: [],
    },
    {
      title: 'Шок-контент',
      description: ``,
      special: ``,
      innerRules: [
        {
          title: 'Контент 18+ в неположенное время.',
          description: ``,
          special: `Разрешён с 00:00 до 03:00 по МСК ежедневно.`,
          innerRules: [],
        },
      ],
    },
    {
      title: 'Токсичность и агрессия.',
      description: ``,
      special: `В виде рофлов также не одобряется.`,
      innerRules: [],
    },
    {
      title: 'Байты и провокации на сранье в чатике, на порчу его атмосферы.',
      description: ``,
      special: `В виде рофлов также не одобряется.`,
      innerRules: [],
    },
    {
      title:
        'Развитие различных конфликтов, споров, бесконечных доказываний друг другу чего-либо. Продолжительное выяснение отношений.',
      description: ``,
      special: `В виде рофлов также не одобряется.`,
      innerRules: [],
    },
    {
      title: 'Тема политики и войны.',
      description: ``,
      special: ``,
      innerRules: [],
    },
    {
      title:
        'Неактив от 4 дней. И от 3 дней для тех, кто пользуется 4-дневным сроком и/или намеренно не пишет в беседу.',
      description: ``,
      special: `При определенных условиях олдов/ньюфагов чата может не касаться.`,
      innerRules: [
        {
          title:
            'Незаинтересованность в беседе, что выражается скудной статистикой сообщений за какое-либо время.',
          description: ``,
          special: `При определенных условиях олдов чата может не касаться.`,
          innerRules: [],
        },
        {
          title:
            'Абуз правил и нахождение в чате, когда что-то в нём не устраивает, постоянное докапывание до системы и нарушение атмосферы чата.',
          description: ``,
          special: ``,
          innerRules: [],
        },
        {
          title:
            'Многократные возвращения, в т. ч. после вылета из-за многократных нарушений.',
          description: ``,
          special: ``,
          innerRules: [],
        },
      ],
    },
    {
      title:
        'Сомнительное раздражающее поведение с игнорированием его закончить, в т.ч. излишняя приставучесть к людям.',
      description: ``,
      special: `Это правило работает только в случае, если кто-либо в чате не нравится многим участникам своим непонятным поведением.
              Так как это тоже влияет на атмосферу, такие люди будут подвергаться голосованию за бан либо сразу кикаться, если и без голосования всё понятно.`,
      innerRules: [],
    },
  ],
};

const ruleParser = (rule, id) => {
  return (
    <li className={styles.rulesListItem} key={id}>
      <p className={styles.title}>{rule.title}</p> {rule.description}{' '}
      {rule.special && <p className={styles.special}>{rule.special}</p>}
      <ol className={styles.rulesList}>
        {rule.innerRules.map((innerRule, index) =>
          ruleParser(innerRule, index)
        )}
      </ol>
    </li>
  );
};

export default function Rules() {
  return (
    <>
      <h2 className={styles.heading}>Правила чата</h2>
      <div className={styles.disclaimerBlock}>
        <p className={styles.disclaimer}>
          Не согласны с наказаниями? Попробуйте оспорить их в лс.
        </p>{' '}
        <p className={styles.disclaimer}>
          Предупреждения выдаются на месяц и обжалованию не подлежат. Коли вы
          будете часто нарушать - увы, вам здесь не место.
        </p>{' '}
        <p className={styles.disclaimer}>
          Кратко говоря, запрещён любой негатив. Мы стремимся к максимально
          доброй атмосфере по отношению ко всем, так как обратное вы можете
          увидеть в любой другой беседе.
        </p>
      </div>
      <h3 className={styles.notApprovedHeading}>{rules.notApprovedTitle}</h3>
      <ol className={styles.rulesList}>
        {rules.notApprovedList.map((rule, index) => ruleParser(rule, index))}
      </ol>
    </>
  );
}
