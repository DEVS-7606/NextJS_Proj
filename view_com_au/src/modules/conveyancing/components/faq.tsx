import ToggleButton from "@/shared/components/toggleMoreOrLessBtn/toggleMoreOrLessBtn";
import { useState, useRef } from "react";

interface IProps {
  question: string;
  answer: JSX.Element[];
  index: number;
}

const FAQ = (props: IProps): JSX.Element => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const heightRef = useRef<string>("0px");
  const answerRef = useRef<any>(null);

  const toggleAnswer = (): void => {
    setShowAnswer(!showAnswer);
    if (!showAnswer) {
      return (heightRef.current = answerRef.current?.scrollHeight);
    }
    heightRef.current = "0px";
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
        style={{ height: heightRef.current }}
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
      {/* {renderQuesAndToggleBtn()}
      {renderAnswer()} */}
      <ToggleButton
        mainClassName="flex flex-col-reverse"
        initialHeight="0px"
        className="justify-between py-sm flex-row-reverse"
        ShowLess="-"
        ShowMore="+"
        valueClassName="text-sm font-normal flex flex-col gap-3 mb-4"
        value={props.answer}
        toggleClassName="text-2xl font-medium pb-1"
      >
        <h3 className="text-base font-bold pr-2 tracking-wide">
          {props.question}
        </h3>
      </ToggleButton>
    </div>
  );
};

export default FAQ;
