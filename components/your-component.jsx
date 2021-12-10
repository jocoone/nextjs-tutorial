import Image from 'next/image';

const YourComponent = () => {
  return (
    <Image
      src="/images/superhero.png"
      height={144}
      width={144}
      alt="superhero"
    />
  );
};

export default YourComponent;
