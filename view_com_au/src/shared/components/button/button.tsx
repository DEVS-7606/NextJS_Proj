interface IProps {
  className: string;
  title: string;
  Icons?: JSX.Element;
}
const Button = (props: IProps) => {
  return (
    <button
      className={`bg-seaBlue hover:bg-darkerSeaBlue rounded-lg border-sky-700 flex justify-center items-center ${props.className}`}
    >
      <span>{props.Icons}</span>
      <span className="font-bold text-base text-white">{props.title}</span>
    </button>
  );
};

export default Button;
//  --title
// px-3 py-2.5
