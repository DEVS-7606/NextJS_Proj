import { FreqAskedQues } from "@/data";
import { useState } from "react";

const FAQ = () => {
  const [show, setShow] = useState([
    { id: 1, value: false },
    { id: 2, value: false },
    { id: 3, value: false },
    { id: 4, value: false },
    { id: 5, value: false },
  ]);

  const showAns = (objId: number): void => {
    const updateShowState = show.map((obj) => {
      if (obj.id === objId) {
        return { ...obj, value: !obj.value };
      }
      return obj;
    });

    setShow(updateShowState);
  };

  const QueryOne = (
    <div className="border-b">
      <div
        className="flex items-center justify-between cursor-pointer py-sm"
        id="1"
        onClick={(event) => {
          return showAns(parseInt(event.currentTarget.id));
        }}
      >
        <h3 className="text-base font-bold pr-2 tracking-wide">
          What is conveyancing?
        </h3>
        <span className="text-2xl font-medium pb-1 ">
          {show[0].value ? "-" : "+"}
        </span>
      </div>
      <div>
        <p
          className={`text-sm font-normal transition-all duration-500 overflow-hidden h-0 ${
            show[0].value && `pb-4 h-16`
          }`}
        >
          Conveyancing is the process of moving the legal ownership of property
          or land from one person or entity to another.
        </p>
      </div>
    </div>
  );
  const QueryTwo = (
    <div className="border-b">
      <div
        className="flex items-center justify-between cursor-pointer py-sm"
        id="2"
        onClick={(event) => {
          return showAns(parseInt(event.currentTarget.id));
        }}
      >
        <h3 className="text-base font-bold pr-2 tracking-wide">
          What is a conveyancer?
        </h3>
        <span className="text-2xl font-medium pb-1 ">
          {show[1].value ? "-" : "+"}
        </span>
      </div>
      <div>
        <p
          className={`text-sm font-normal transition-all duration-500 overflow-hidden h-0 ${
            show[1].value && `pb-4 h-16`
          }`}
        >
          A conveyancer is a property transfer specialist. They prepare the
          legal documents that form part of real estate transactions such as the
          purchase and sale of properties, settlements and title transfers.
        </p>
      </div>
    </div>
  );
  const QueryThree = (
    <div className="border-b">
      <div
        className="flex items-center justify-between cursor-pointer py-sm"
        id="3"
        onClick={(event) => {
          return showAns(parseInt(event.currentTarget.id));
        }}
      >
        <h3 className="text-base font-bold pr-2 tracking-wide">
          How much does it cost?
        </h3>
        <span className="text-2xl font-medium pb-1 ">
          {show[2].value ? "-" : "+"}
        </span>
      </div>
      <div
        className={`text-sm font-normal transition-all duration-500 overflow-hidden h-0 flex flex-col gap-3 ${
          show[2].value && `pb-4 h-52`
        }`}
      >
        <p>
          Whether you are buying or selling property, our services are set at a
          fixed price.
        </p>
        <p>The only cost variable relates to disbursements.</p>
        <p>
          We don't want you to be worried about the word 'disbursements' - it's
          just an everyday legal term used to describe out of pocket expenses
          and all property transactions in Australia will incur some of these.
        </p>
        <p>
          We'll always be upfront about your conveyancing costs, so as soon as
          you ask us to help you, we can provide you with an estimate of how
          much your disbursements are likely to be.
        </p>
        <p>
          These out of pocket costs all depend on the type of property you have
          bought or sold and where that property is located.
        </p>
      </div>
    </div>
  );
  const QueryFour = (
    <div className="border-b">
      <div
        className="flex items-center justify-between cursor-pointer py-sm"
        id="4"
        onClick={(event) => {
          return showAns(parseInt(event.currentTarget.id));
        }}
      >
        <h3 className="text-base font-bold pr-2 tracking-wide">
          What types of conveyancing does Settle Easy do?
        </h3>
        <span className="text-2xl font-medium pb-1 ">
          {show[3].value ? "-" : "+"}
        </span>
      </div>
      <div
        className={`text-sm font-normal transition-all duration-500 overflow-hidden h-0 flex flex-col gap-3 ${
          show[3].value && `pb-4 h-52`
        }`}
      >
        <p>
          Our experienced team specialise in all types of conveyancing
          including:
        </p>
        <ul className="pl-2 list-disc list-inside">
          <li>residential properties</li>
          <li>large scale off the plan property developments</li>
          <li>retirement village residences</li>
          <li>commercial properties</li>
          <li>properties within trust structures</li>
          <li>properties for self-managed superannuation funds (SMSFs).</li>
        </ul>
      </div>
    </div>
  );
  const QueryFive = (
    <div className="border-none">
      <div
        className="flex items-center justify-between cursor-pointer py-sm"
        id="5"
        onClick={(event) => {
          return showAns(parseInt(event.currentTarget.id));
        }}
      >
        <h3 className="text-base font-bold pr-2 tracking-wide">
          How will I know what's happening?
        </h3>
        <span className="text-2xl font-medium pb-1 ">
          {show[4].value ? "-" : "+"}
        </span>
      </div>
      <div
        className={`text-sm font-normal transition-all duration-500 overflow-hidden h-0 flex flex-col gap-3 ${
          show[4].value && `pb-4 h-24`
        }`}
      >
        <p>
          At Settle Easy, we are committed to keeping you updated every step of
          the way.
        </p>
        <p>
          As a registered customer, you will be able to track each stage of your
          transaction and you will have a dedicated conveyancer to guide you
          through the process and answer any questions you may have.
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-3/5 max-lg:w-full mb-4">
      <section className="flex items-center text-almostBlack mb-6 max-lg:mb-4">
        <h2 className="text-2xl font-bold bg-opacity-0 text-start  tracking-wider">
          Frequently Asked Questions
        </h2>
      </section>
      <section className="text-almostBlack">
        {/* {FAQSection()} */}
        {QueryOne}
        {QueryTwo}
        {QueryThree}
        {QueryFour}
        {QueryFive}
      </section>
    </div>
  );
};

export default FAQ;
