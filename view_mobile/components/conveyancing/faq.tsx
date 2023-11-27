import { useState, useRef } from "react";

interface IProps {
  ques: string;
  ans: JSX.Element[];
  index: number;
}

const FAQ = (props: IProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("0px");
  const answerRef: any = useRef(null);

  const showAns = (): void => {
    setShow(!show);
    setHeight(!show ? answerRef.current.scrollHeight : "0px");
  };

  return (
    <div className={"border-b"} key={props.index}>
      <div
        className="flex items-center justify-between cursor-pointer py-sm"
        onClick={() => showAns()}
      >
        <h3 className="text-base font-bold pr-2 tracking-wide">{props.ques}</h3>
        <span className="text-2xl font-medium pb-1 ">{show ? "-" : "+"}</span>
      </div>
      <div
        ref={answerRef}
        style={{ height: height }}
        className={`text-sm font-normal transition-all duration-500 overflow-hidden flex flex-col gap-3 ${
          show ? "mb-4" : "mb-0"
        }`}
      >
        {props.ans}
      </div>
    </div>
  );
};

export default FAQ;
