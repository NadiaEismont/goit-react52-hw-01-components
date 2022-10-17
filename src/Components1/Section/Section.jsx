import { SectionFormate } from './Section.styled';
export const Section = ({ title, children }) => (
  <SectionFormate>
    <h2>{title}</h2>
    {children}
  </SectionFormate>
);
