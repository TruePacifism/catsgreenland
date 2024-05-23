import styles from './Rules.module.css';
import React from 'react';
import rulesData from '../../utils/rules.json';

const rules = {
  notApprovedTitle: 'Не допускается:',
  notApprovedList: rulesData,
};

export default React.forwardRef(({ editable }, ref) => {
  const ruleParser = (rule, id) => {
    return (
      <li className={styles.rulesListItem} key={id}>
        <p contentEditable={editable} className={styles.title}>
          {rule.title}
        </p>{' '}
        {rule.description}{' '}
        {rule.special && (
          <p contentEditable={editable} className={styles.special}>
            {rule.special}
          </p>
        )}
        <ol className={styles.rulesList}>
          {rule.innerRules.map((innerRule, index) =>
            ruleParser(innerRule, index)
          )}
        </ol>
      </li>
    );
  };
  return (
    <div ref={ref}>
      <h2 contentEditable={editable} className={styles.heading}>
        Правила чата
      </h2>
      <div className={styles.disclaimerBlock}>
        <p contentEditable={editable} className={styles.disclaimer}>
          Не согласны с наказаниями? Попробуйте оспорить их <b>в лс</b>.
        </p>{' '}
        <p contentEditable={editable} className={styles.disclaimer}>
          Предупреждения выдаются <b>на месяц</b> и обжалованию не подлежат.
          Коли вы будете часто нарушать - увы, вам здесь не место.
        </p>{' '}
        <p contentEditable={editable} className={styles.disclaimer}>
          Кратко говоря, <b>запрещён любой негатив</b>. Мы стремимся к
          максимально доброй атмосфере по отношению ко всем, так как обратное вы
          можете увидеть в любой другой беседе.
        </p>
      </div>
      <h3 contentEditable={editable} className={styles.notApprovedHeading}>
        {rules.notApprovedTitle}
      </h3>
      <ol className={styles.rulesList}>
        {rules.notApprovedList.map((rule, index) => ruleParser(rule, index))}
      </ol>
      <div className={styles.PSBlock}>
        <p
          contentEditable={editable}
          className={styles.PS + ' ' + styles.special}
        >
          Просим предупреждать, если вдруг вы пропадете на несколько дней по
          каким-то причинам, но хотите остаться здесь и не отлететь от кика за
          неактив.
        </p>
      </div>
    </div>
  );
});
