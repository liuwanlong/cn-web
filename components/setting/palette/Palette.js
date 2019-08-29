import React from 'react';
import ColorCheck from "../color_check/ColorCheck";

export default function Palette({ colors, value, onColorChecked }) {

  return (
    <div>
      {
        colors.map((color, index) => (
          <ColorCheck
            key={index}
            checked={value === color}
            onColorChecked={onColorChecked}
            color={color}/>
        ))
      }
    </div>
  );

}