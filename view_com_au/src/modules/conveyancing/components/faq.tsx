import { useState, useRef } from "react";

interface IProps {
  question: string;
  answer: JSX.Element[];
  index: number;
}

const FAQ = (props: IProps): JSX.Element => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("0px");
  const answerRef: any = useRef(null);

  const toggleAnswer = (): void => {
    setShowAnswer(!showAnswer);
    setHeight(!showAnswer ? answerRef.current.scrollHeight : "0px");
  };

  const renderQuesAndToggleBtn = () => {
    return (
      <div
        className="flex items-center justify-between cursor-pointer py-sm"
        onClick={() => toggleAnswer()}
      >
        <h3 className="text-base font-bold pr-2 tracking-wide">
          {props.question}
        </h3>
        <span className="text-2xl font-medium pb-1 ">
          {showAnswer ? "-" : "+"}
        </span>
      </div>
    );
  };

  const renderAnswer = () => {
    return (
      <div
        ref={answerRef}
        style={{ height: height }}
        className={`text-sm font-normal transition-all duration-500 overflow-hidden flex flex-col gap-3 ${
          showAnswer ? "mb-4" : "mb-0"
        }`}
      >
        {props.answer}
      </div>
    );
  };

  return (
    <div className={"border-b"} key={props.index}>
      {renderQuesAndToggleBtn()}
      {renderAnswer()}
    </div>
  );
};

export default FAQ;
