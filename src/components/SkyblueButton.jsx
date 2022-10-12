import React from 'react';
import Button from './Button';

function SkyblueButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="#7EDCFA"
      subColor="#3A82E0"
      hoverColor="#CFECF2"
    />
  );
}

export default SkyblueButton;