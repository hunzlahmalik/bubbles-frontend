import React from 'react';
import { Box, Flex, Text, NftIcon } from 'bubbles-uikit';
import { useTranslation } from 'contexts/Localization';
import { NftAttribute } from 'state/nftMarket/types';
import ExpandableCard from './ExpandableCard';

interface PropertiesCardProps {
  properties: NftAttribute[];
  rarity: { [key: string]: number };
}

// Map of known traits to human-readable text
const KNOWN_TRAITS_TEXT = {
  bunnyId: 'Bunny ID',
};

const SingleProperty: React.FC<{ title: string; value: string | number; rarity: number; imgSource: string }> = ({
  title,
  value,
  rarity,
  imgSource,
}) => {
  return (
    <Box marginLeft="20px" marginRight="20px" marginTop="20px" marginBottom="20px">
      <Flex alignItems="center">
        <img style={{ height: '30px', width: '30px', marginTop: '10px' }} alt="nothing" src={imgSource} />
        <Text fontSize="14px" color="textSubtle" bold textTransform="uppercase" marginLeft="4px" marginTop="20px">
          {KNOWN_TRAITS_TEXT[title] ?? title}
        </Text>
      </Flex>
      <Flex alignItems="center">
        <Text bold textTransform="uppercase" mr="4px">
          {value}
        </Text>
        {rarity && (
          <Text small color="textSubtle">
            ({rarity.toFixed(2)}%)
          </Text>
        )}
      </Flex>
    </Box>
  );
};

const PropertiesCard: React.FC<PropertiesCardProps> = ({ properties, rarity }) => {
  const { t } = useTranslation();
  const content = (
    <Flex flexWrap="wrap" flexBasis="100%" alignItems="center" justifyContent="center">
      {properties.map((property) => (
        <SingleProperty
          key={property.traitType}
          title={property.traitType}
          value={property.value}
          rarity={rarity[property.traitType]}
          imgSource="https://jojo.fun/img/icon-jojo.dd768e0c.png"
        />
      ))}
    </Flex>
  );
  return <ExpandableCard title={t('Properties')} icon={<NftIcon width="24px" height="24px" />} content={content} />;
};

export default PropertiesCard;
