import { FreqAskedQues } from "@/data";
import { useState, useRef, useEffect } from "react";
type AnswerRef = React.MutableRefObject<HTMLDivElement | null>;

const FAQ = (): JSX.Element => {
  const [show, setShow] = useState<Record<string, number | boolean>[]>([
    { id: 1, value: false },
    { id: 2, value: false },
    { id: 3, value: false },
    { id: 4, value: false },
    { id: 5, value: false },
  ]);

  const Queries = () => {
    const answerRefs: AnswerRef[] = FreqAskedQues.map(() => useRef(null));

    useEffect(() => {
      // This effect runs after the component has mounted
      answerRefs.forEach((ref, index) => {
        const contentHeight = ref.current?.scrollHeight || 0;
        ref.current?.style.setProperty(
          "max-height",
          show[index].value ? `${contentHeight}px` : "0px"
        );
      });
    }, [show, answerRefs]);

    const showAns = (objId: number): void => {
      const updateShowState = show.map((obj, index) => {
        if (obj.id === objId) {
          return { ...obj, value: !obj.value };
        }
        return obj;
      });

      setShow(updateShowState);
    };

    return FreqAskedQues.map((query, index) => {
      return (
        <div className={index === 4 ? "border-none" : "border-b"} key={index}>
          <div
            className="flex items-center justify-between cursor-pointer py-sm"
            onClick={() => showAns(index + 1)}
          >
            <h3 className="text-base font-bold pr-2 tracking-wide">
              {query.ques}
            </h3>
            <span className="text-2xl font-medium pb-1 ">
              {show[index].value ? "-" : "+"}
            </span>
          </div>
          <div
            ref={answerRefs[index]}
            className={`text-sm font-normal transition-all duration-500 overflow-hidden flex flex-col gap-3 ${
              show[index].value ? "mb-4" : "collapsed"
            }`}
          >
            {query.ans}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="w-3/5 max-lg:w-full mb-4">
      <section className="flex items-center text-almostBlack mb-6 max-lg:mb-4">
        <h2 className="text-2xl font-bold bg-opacity-0 text-start  tracking-wider">
          Frequently Asked Questions
        </h2>
      </section>
      <section className="text-almostBlack">{Queries()}</section>
    </div>
  );
};

export default FAQ;
