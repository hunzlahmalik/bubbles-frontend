import React from 'react';
import { IconOuter, IconView, AlphaView, InnerView } from './BlindBoxIconStyles';

export interface IconProps {
  backgroundImage: string;
  hoverImage?: string;
  item?: boolean;
}

function Icon({ backgroundImage, hoverImage, item }: IconProps) {
  return (
    <IconOuter>
      <IconView>
        <AlphaView backgroundImage={backgroundImage} item={item} />
        <InnerView backgroundImage={backgroundImage} hoverImage={hoverImage} />
      </IconView>
    </IconOuter>
  );
}

export default Icon;
