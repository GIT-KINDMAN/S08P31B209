interface InputProps {
  label: string;
}

const homeHeader = ({ label }: InputProps) => {
  return (
    <>
      <header>{label}</header>
    </>
  );
};

export default homeHeader;
