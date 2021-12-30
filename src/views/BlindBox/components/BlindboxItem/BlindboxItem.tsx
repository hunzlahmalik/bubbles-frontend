import styled from 'styled-components';
import { ItemContainer, InnerDiv, Icon, Title, OuterDiv } from './ItemStyles';

const Stats = styled.div`
  text-align: left;
  margin-left: 25px;
  margin-top: 20px;
`;

const StatsInfo = styled.div`
  margin: 3px 0;
  color: #694f4e;
`;

const ValueSpan = styled.span<{ color?: string }>`
  color: ${({ color }) => (color ? color : 'black')};
  font-weight: 800;
  margin-left: 5px;
`;

function BlindboxItem({
  title,
  imgSrc,
  iconSrc,
  stats,
}: {
  title: string;
  imgSrc: string;
  iconSrc: {
    nonHoverImg: string;
    hoverImg: string;
  };
  stasTitles: string[];
  stats: {
    title: string;
    value: string;
    color?: string;
  }[];
}) {
  return (
    <ItemContainer shouldHover>
      <OuterDiv>
        <InnerDiv>
          <div
            style={{
              height: '140px',
              width: '140px',
            }}
          >
            <Icon backgroundImage={iconSrc.nonHoverImg} hoverImage={iconSrc.hoverImg}></Icon>
          </div>
        </InnerDiv>
        <InnerDiv>
          <div
            style={{
              marginLeft: '-40%',
            }}
          >
            <Title fontSize="15px">
              <img
                src={imgSrc}
                alt=""
                style={{
                  verticalAlign: 'middle',
                }}
              />
              <span
                style={{
                  marginLeft: '5px',
                }}
              >
                {title}
              </span>
            </Title>
            <Stats>
              {stats.map((item) => {
                return (
                  <StatsInfo>
                    {item.title}:<ValueSpan color={item.color}>{item.value}</ValueSpan>
                  </StatsInfo>
                );
              })}
            </Stats>
          </div>
        </InnerDiv>
      </OuterDiv>
    </ItemContainer>
  );
}

export default BlindboxItem;
