import ToggleButton from "@/shared/components/toggleMoreOrLessBtn/toggleMoreOrLessBtn";

interface IProps {
  question: string;
  answer: JSX.Element[];
  index: number;
}

const FAQ = (props: IProps): JSX.Element => {
  return (
    <div className={"border-b"} key={props.index}>
      <ToggleButton
        mainClassName="text-2xl font-medium pb-1 flex flex-col-reverse"
        initialHeight="0px"
        className="justify-between py-sm flex-row-reverse"
        ShowLess="-"
        ShowMore="+"
        valueClassName="text-sm font-normal flex flex-col gap-3 mb-4"
        value={props.answer}
      >
        <h3 className="text-base font-bold pr-2 tracking-wide">
          {props.question}
        </h3>
      </ToggleButton>
    </div>
  );
};

export default FAQ;
