import { FreqAskedQues } from "@/data";
import { useState } from "react";

const FAQ = (): JSX.Element => {
  const [show, setShow] = useState<Record<string, number | boolean>[]>([
    { id: 1, value: false },
    { id: 2, value: false },
    { id: 3, value: false },
    { id: 4, value: false },
    { id: 5, value: false },
  ]);

  const showAns = (objId: number): void => {
    console.log(objId);

    const updateShowState = show.map((obj) => {
      if (obj.id === objId) {
        return { ...obj, value: !obj.value };
      }
      return obj;
    });

    setShow(updateShowState);
  };

  const Queries = () => {
    return FreqAskedQues.map((query, index) => {
      return (
        <div className="border-b" key={index}>
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
            className={`text-sm font-normal transition-all duration-500 overflow-hidden h-0 flex flex-col gap-3 ${
              show[index].value && `${query.className}`
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
