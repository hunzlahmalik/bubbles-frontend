import React from 'react';
import { useTranslation } from 'contexts/Localization';
import styled from 'styled-components';
import useTheme from 'hooks/useTheme';
import { Modal, ModalProps, Text, Flex } from 'bubbles-uikit';

const StyledModal = styled(Modal)`
  min-width: 350px;
  max-width: 500px;
`;

const GifContainer = styled.div`
  min-width: 350px;
  max-width: 500px;
`;

interface GifModalProps extends ModalProps {
  title: string;
  gifSrc: string;
}

const GifModal: React.FC<GifModalProps> = ({ onDismiss, title, gifSrc, children }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <StyledModal title={t(title)} onDismiss={onDismiss} headerBackground={theme.colors.gradients.cardHeader}>
      <Flex flexDirection="column">
        <GifContainer>
          <img src={gifSrc} alt={t(title)} />
        </GifContainer>
        {typeof children === 'string' ? <Text as="p">{children}</Text> : children}
      </Flex>
    </StyledModal>
  );
};

export default GifModal;
