import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonMenu, ButtonMenuItem, NotificationDot } from 'bubbles-uikit';
import { useTranslation } from 'contexts/Localization';

/*
e.g
{
  data: [
    {
      text: 'Kinddom',
      link: 'kingdome',
      notificationShow: true,
    },
    {
      text: 'Lalal',
      link: 'lala',
      notificationShow: true,
    },
    {
      text: 'Orignal',
      link: 'orignal',
      notificationShow: false,
    },
  ],
};
*/

export interface TabButtonProps {
  text: string;
  showDot: boolean;
  link?: string;
}

export interface TabButtonMenuProps {
  data: TabButtonProps[];
  scale?: 'md' | 'xs' | 'sm';
  onClick?: (index: number) => void;
  activeIndex?: number;
}

const TabButtonMenu: React.FC<TabButtonMenuProps> = ({ data, scale, onClick, activeIndex }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <ButtonMenu
        activeIndex={activeIndex}
        // eslint-disable-next-line no-console
        onItemClick={onClick}
        scale={scale || 'md'}
        variant="primary"
      >
        {data.map((tab) => {
          return (
            <NotificationDot key={tab.text} show={tab.showDot}>
              {tab.link ? (
                <ButtonMenuItem id={`${tab.text}`} as={Link} to={`${tab.link}`}>
                  {t(tab.text)}
                </ButtonMenuItem>
              ) : (
                <ButtonMenuItem id={`${tab.text}`}>{t(tab.text)}</ButtonMenuItem>
              )}
            </NotificationDot>
          );
        })}
      </ButtonMenu>
    </Wrapper>
  );
};

export default TabButtonMenu;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 16px;
  }
`;
