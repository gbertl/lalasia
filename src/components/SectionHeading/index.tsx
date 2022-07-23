import './style.scss';

interface Props {
  subheading: string;
  heading: string;
  bodyText: string;
}

const SectionHeading = ({ subheading, heading, bodyText }: Props) => {
  return (
    <div className="section-heading mb-5 mb-lg-6 d-lg-grid justify-content-lg-between">
      <h2 className="w-75 w-md-auto h6 fs-lg-5 text-secondary">{subheading}</h2>
      <h3 className="h4 fs-lg-1 mb-3 mb-lg-0">{heading}</h3>
      <p className="mb-0">{bodyText}</p>
    </div>
  );
};

export default SectionHeading;
