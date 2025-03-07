import styled from 'styled-components';
import Noise from './Animations/Noise';
import Waves from './Animations/Waves';

const SeparatorContainer = styled.div`
  height: 30vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #101010;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionSeparator = () => {
  return (
    <SeparatorContainer>
      <Waves 
        lineColor="#C0C0C0"
        backgroundColor="transparent"
        waveSpeedX={0.0125}
        waveSpeedY={0.005}
        waveAmpX={20}
        waveAmpY={10}
        xGap={15}
        yGap={40}
      />
      <Noise 
        patternSize={200}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={4}
        patternAlpha={12}
      />
    </SeparatorContainer>
  );
};

export default SectionSeparator;

