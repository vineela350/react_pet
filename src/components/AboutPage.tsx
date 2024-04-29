// src/components/AboutPage.tsx
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 20px;
  text-align: center;
`;

const AboutPage = () => {
  return (
    <AboutSection>
      <h1>About This App</h1>
      <p>This is a pet image gallery app.</p>
    </AboutSection>
  );
};

export default AboutPage;
