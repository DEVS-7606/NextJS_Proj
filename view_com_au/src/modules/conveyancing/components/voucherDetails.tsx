import Form from "./form";

const VoucherDetails = (): JSX.Element => {
  const displayYoutubeVideo = (): JSX.Element => {
    return (
      <div className="h-56 lg:h-437 md:h-full rounded-xl bg-almostBlack fill-almostBlack border-2 overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/SklG0T_W0ao"
          title="Your conveyancing experts"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="rounded-xl relative"
          allowFullScreen
        />
      </div>
    );
  };

  const renderConveyancingDetails = (): JSX.Element => {
    return (
      <>
        <p>
          In partnership with view.com.au,{" "}
          <a href="#" className="underline">
            Settle Easy
          </a>{" "}
          is currently offering new customers a $220 conveyancing voucher on
          their trusted{" "}
          <a href="#" className="underline">
            online conveyancing services
          </a>{" "}
          and a free contract review. You&apos;ll only pay $880 incl. GST plus
          disbursements on a standard conveyancing transaction. Redeem today and
          use within 12 months.
        </p>
        <p>
          Settle Easy provides reliable, secure, fast and hassle-free
          conveyancing services to help you buy or sell property.
        </p>
        <p>
          Think of Settle Easy as a legal expert in your corner. Someone to
          guide you through the process and to provide you with a seamless
          experience in the lead up to settlement.
        </p>
        <p>
          Alongside the $220 conveyancing voucher, you will also be eligible for
          a free contract review during your conveyancing transaction, knowing
          no surprises are waiting.
        </p>
        <p>
          Simply fill out the form and a member from the Settle Easy Success
          Specialist team will get in touch within 24 hours.
        </p>
        <p>
          This offer is eligible for customers transacting in Victoria, New
          South Wales and Queensland.
        </p>
      </>
    );
  };

  return (
    <section className="flex gap-6 items-start w-full flex-col lg:flex-row">
      <div className="w-3/5 flex flex-col gap-6 max-lg:w-full">
        {displayYoutubeVideo()}
        <div className="lg:flex hidden flex-col gap-4 text-base text-almostBlack">
          {renderConveyancingDetails()}
        </div>
      </div>
      <Form />
      <div className="lg:hidden flex flex-col gap-4 text-base text-almostBlack">
        {renderConveyancingDetails()}
      </div>
    </section>
  );
};

export default VoucherDetails;
