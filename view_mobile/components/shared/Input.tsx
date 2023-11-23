const Input = (props: {
  title: string;
  name: string;
  type: string;
  error?: Record<string, string>;
  id: number;
}): JSX.Element => {
  return (
    <>
      <label className="flex flex-col font-medium" htmlFor={props.name}>
        {props.title}
        <input
          className={`bg-white fill-almostBlack border-2 rounded-lg outline-none  leading-10 pl-4 font-medium focus:border-seaBlue ${
            props?.error && props?.error[props?.name]
              ? `focus:outline-none border-errorRed `
              : ``
          }`}
          type={props.type}
          id={props.name}
          name={props.name}
        />
      </label>
      {props?.error && (
        <p className="text-xs text-errorRed">{props?.error[props?.name]}</p>
      )}
    </>
  );
};

export default Input;
