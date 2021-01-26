import styled from 'styled-components';
import CustomStyled from './CustomStyled';

const Header = styled.h2`
  color: turquoise;
`;

const Paragraph = styled.p`
  color: purple;
  font-size: 24px;
  text-decoration: underline;
`;

const Electric = styled.h3`
  color: ${(props) => props.funky ? 'yellow' : 'darkgrey'};
  background: ${props => props.funky ? 'purple' : 'white'};
`;

const WrappedCustomComponent = styled(CustomStyled)`
  color: chocolate;
  font-weight: bold;
`;


const MyStyled = () => {
  return (
    <div>
      <h2>Styled Components!</h2>
      <Header>How do I look?</Header>
      <Header>Also me?</Header>
      <Paragraph>Lots of information about me</Paragraph>
      <Electric secondary>Is this electric?</Electric>
      <Electric funky otherThing>This one looks better!</Electric>

      <WrappedCustomComponent/>
    </div>
  );
};

export default MyStyled;
