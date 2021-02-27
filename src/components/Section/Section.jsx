import s from './Section.module.css';

const Section = ({ title, children }) => (
  <section>
    <h1 className={s.title}>{title}</h1>
    {children}
  </section>
);

export default Section;
