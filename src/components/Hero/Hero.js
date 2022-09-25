import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello I'M <br />
          Austin
        </SectionTitle>
        <SectionText>
        I am a passionate, solution-oriented full-stack developer with a background in sales and multi-site management. 
        </SectionText>
        <Button><a href="mailto:aussymo@gmail.com" >Contact</a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;