import React from 'react';
import { Button, useModal, ButtonProps } from 'bubbles-uikit';
import { useTranslation } from 'contexts/Localization';
import styled from 'styled-components';
import BuyEggModal from '../BuyEggModel';

interface BuyEggButtonProps extends ButtonProps {
  disabled?: boolean;
}

const StyledBuyButton = styled(Button)`
  width: 350px;
  height: 40px;
  margin: 0 10px;
  border-radius: 10px;
  padding: 0;
  position: 'relative';
  @media screen and (max-width: 760px) {
    margin-bottom: 30px;
  }
`;

const BuyEggButton: React.FC<BuyEggButtonProps> = ({ disabled, ...props }) => {
  const { t } = useTranslation();
  const [onPresentBuyEggModal] = useModal(<BuyEggModal />);

  const getBuyButtonText = () => {
    return t('Buy Egg');
  };

  return (
    <StyledBuyButton {...props} disabled={disabled} onClick={onPresentBuyEggModal}>
      {getBuyButtonText()}
    </StyledBuyButton>
  );
};

export default BuyEggButton;
