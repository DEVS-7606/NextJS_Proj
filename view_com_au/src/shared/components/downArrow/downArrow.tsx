import Image from "next/image";
import downArrow from "../../../../public/images/downArrow.svg";

interface Iprops {
  rotateAngle: string;
}

const DownArrow = ({ rotateAngle }: Iprops) => {
  return (
    <Image
      src={downArrow}
      alt="Arrow"
      className={`transform duration-500 ${rotateAngle}
    `}
    />
  );
};

export default DownArrow;
