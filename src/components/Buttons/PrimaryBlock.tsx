import Button from 'react-bootstrap/Button';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const PrimaryBlock = ({ className, children }: Props) => {
  return (
    <Button variant="primary" className={`w-100 py-3 px-5 ${className}`}>
      {children}
    </Button>
  );
};

export default PrimaryBlock;
