import React from 'react';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
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

interface TabButtonMenuProps {
  data: {
    text: string;
    link: string;
    notificationShow: boolean;
  }[];
  scale?: 'md' | 'xs' | 'sm';
}

const TabButtonMenu: React.FC<TabButtonMenuProps> = ({ data, scale }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const activeIndex = data.findIndex((tab) => tab.link === location.pathname);

  return (
    <Wrapper>
      <ButtonMenu activeIndex={activeIndex} scale={scale || 'md'} variant="primary">
        {data.map((tab) => {
          return (
            <NotificationDot key={tab.text} show={tab.notificationShow}>
              <ButtonMenuItem id="asdasdas" as={Link} to={`${tab.link}`}>
                {t(tab.text)}
              </ButtonMenuItem>
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
