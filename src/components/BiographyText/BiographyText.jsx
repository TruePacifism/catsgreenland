import React, { Fragment } from 'react';

function BiographyText({ className, text }) {
  const lines = text.split('\n');
  const filteredlines = lines.filter(line => line !== '');
  const html = filteredlines.map((line, i) => (
    <Fragment key={i}>
      {line}
      <br style={{ height: '2em', display: 'block', content: '' }} />
    </Fragment>
  ));
  console.log(html);
  return (
    <>
      {filteredlines.map(line => (
        <p className={className}>{line}</p>
      ))}
    </>
  );
  //   return <p className={className}>{html}</p>;
}

export default BiographyText;
