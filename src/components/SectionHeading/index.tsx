import './style.scss';

interface Props {
  subheading: string;
  heading: string;
  bodyText: string;
  centered?: boolean;
}

const SectionHeading = ({ subheading, heading, bodyText, centered }: Props) => {
  let sectionHeadingCls = 'section-heading mb-5 mb-lg-6';
  if (centered)
    sectionHeadingCls += ' text-center section-heading--centered mx-auto';
  if (!centered) sectionHeadingCls += ' d-lg-grid justify-content-lg-between';

  let subheadingCls = 'w-75 w-md-auto h6 fs-lg-5 text-secondary';
  if (centered) subheadingCls += ' mx-auto';

  let headingCls = 'h4 fs-lg-1 mb-3';
  if (!centered) headingCls += ' mb-lg-0';

  return (
    <div className={sectionHeadingCls}>
      <h2 className={subheadingCls}>{subheading}</h2>
      <h3 className={headingCls}>{heading}</h3>
      <p className="mb-0">{bodyText}</p>
    </div>
  );
};

export default SectionHeading;
