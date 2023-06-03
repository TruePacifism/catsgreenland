import React, { Fragment } from 'react';

function BiographyText({ className, text }) {
  const lines = text.split('\n');
  const filteredlines = lines.filter(line => line !== '');
  return (
    <>
      {filteredlines.map((line, idx) => (
        <p key={idx} className={className}>
          {line}
        </p>
      ))}
    </>
  );
}

export default BiographyText;
