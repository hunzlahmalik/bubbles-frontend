import React from 'react';
import { Button, useModal, Text } from 'bubbles-uikit';
import GifModal from 'components/GifModal';

function Home() {
  const [onPresentShowEggModal] = useModal(
    <GifModal
      gifSrc="https://3961423229-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Mjo_Dop_CQYHP_e6iyh%2Fuploads%2FqHv1OHNpvMwk01oWtdyC%2FPearl-Hatch.gif?alt=media&token=30503f9e-e24c-4da0-b4d3-0a786e06db5e"
      title="Pearl Bubble"
    >
      <Text color="textSubtle">Pearl Bubble</Text>
    </GifModal>,
  );
  return (
    <>
      Testing homepage
      <Button onClick={onPresentShowEggModal}>Test Gif</Button>
    </>
  );
}

export default Home;
