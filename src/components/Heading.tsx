interface HeadingProps {
  text: string;
  fontClass: string;
}

const Heading = ({ text, fontClass }: HeadingProps) => {
  return <h1 className={fontClass}>{text}</h1>;
};

export default Heading;
