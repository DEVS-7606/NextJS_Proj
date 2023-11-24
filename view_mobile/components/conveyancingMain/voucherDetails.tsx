import { InputFields } from "@/data";
import { FormEvent, useEffect, useState } from "react";
import Input from "../shared/Input";
import Link from "next/link";

export interface individualUser {
  firstName: string;
  lastName: string;
  emailId: string;
  phone: number;
  state: string;
  comments?: string;
}

const VoucherDetails = (): JSX.Element => {
  const [userInput, setUserInput] = useState<Record<string, string>>({});
  const [error, setError] = useState<Record<string, string>>({});

  let emailValidationPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
  let phoneNumberValidationPattern = /^[6-9]{1}[0-9]{9}$/;

  const youtubeLink = (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/SklG0T_W0ao"
      title="Your conveyancing experts"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      className="rounded-xl relative"
      allowFullScreen
    ></iframe>
  );

  const voucherDesc = (
    <div className="flex flex-col gap-4 text-base text-almostBlack ">
      <p>
        In partnership with view.com.au,{" "}
        <Link href="#" className="underline">
          Settle Easy
        </Link>{" "}
        is currently offering new customers a $220 conveyancing voucher on their
        trusted{" "}
        <Link href="#" className="underline">
          online conveyancing services
        </Link>{" "}
        and a free contract review. You'll only pay $880 incl. GST plus
        disbursements on a standard conveyancing transaction. Redeem today and
        use within 12 months.
      </p>
      <p>
        Settle Easy provides reliable, secure, fast and hassle-free conveyancing
        services to help you buy or sell property.
      </p>
      <p>
        Think of Settle Easy as a legal expert in your corner. Someone to guide
        you through the process and to provide you with a seamless experience in
        the lead up to settlement.
      </p>
      <p>
        Alongside the $220 conveyancing voucher, you will also be eligible for a
        free contract review during your conveyancing transaction, knowing no
        surprises are waiting.
      </p>
      <p>
        Simply fill out the form and a member from the Settle Easy Success
        Specialist team will get in touch within 24 hours.
      </p>
      <p>
        This offer is eligible for customers transacting in Victoria, New South
        Wales and Queensland.
      </p>
    </div>
  );

  const formFields = () => {
    return InputFields.map((attributes, index) => {
      return (
        <Input
          title={attributes.title}
          name={attributes.id}
          type={attributes.type}
          error={error}
          id={index}
          key={index}
        />
      );
    });
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    let errors: Record<string, string> = {};
    let userDetails: Record<string, string> = {};
    const formData = new FormData(event.currentTarget);
    event.preventDefault();

    for (let [key, value] of formData.entries()) {
      userDetails = { ...userDetails, [key]: value.toString() };

      if (key !== "comments" && value.toString().trim().length === 0) {
        errors[`${key}`] = `${key} is required`;
      } else if (
        key === "emailId" &&
        !emailValidationPattern.test(value.toString())
      ) {
        errors.emailId = `* Email should be in the correct format`;
      } else if (
        key === "phone" &&
        !phoneNumberValidationPattern.test(value.toString())
      ) {
        errors.phone = `* Phone number should be 10-digits`;
      }
    }

    const state: HTMLInputElement | null = document.getElementById(
      "state"
    ) as HTMLInputElement;

    if (state.value === "select your state") {
      errors.state = `* state is required`;
    }

    if (Object.keys(errors).length !== 0) {
      return setError(errors);
    }

    setError({});
    return setUserInput(userDetails);
  };

  const output = () => {
    const dataOutput = Object.entries(userInput);

    return (
      <div className="border-2 rounded-xl fill-almostBlack bg-white">
        {dataOutput.map(([key, value]) => (
          <p key={key}>
            {key}:{value}
          </p>
        ))}
      </div>
    );
  };

  const select = (
    <>
      {" "}
      <label className="flex flex-col font-medium" htmlFor="state">
        State *
        <select
          id="state"
          name="state"
          className={`bg-white fill-almostBlack border-2 rounded-lg outline-none focus-within:border-seaBlue py-3 text-base font-normal text-almostBlack ${
            error && error.state ? `focus:outline-none border-errorRed ` : ``
          }`}
          defaultValue={"select your state"}
        >
          <option value="select your state" disabled>
            Select your state
          </option>
          <option value="VIC">VIC</option>
          <option value="NSW">NSW</option>
          <option value="QLD">QLD</option>
        </select>
      </label>
      {error && <p className="text-xs text-errorRed">{error.state}</p>}
    </>
  );

  const commentSection = (
    <label className="flex flex-col font-medium" htmlFor="comments">
      Comments or message
      <textarea
        className="bg-white fill-almostBlack border-2 rounded-lg outline-none focus-within:border-seaBlue pl-4 font-medium"
        cols={20}
        rows={4}
        id="comments"
        name="comments"
      ></textarea>
    </label>
  );

  const submitButton = (
    <button
      type="submit"
      value=""
      className="bg-seaBlue hover:bg-darkerSeaBlue fill-almostBlack border-2 rounded-lg leading-10 pl-4 text-white text-base flex text-center items-center justify-center gap-1 font-bold"
    >
      <i className="fa-solid fa-envelope"></i>
      {"  "}
      Redeem Offer
    </button>
  );

  return (
    <section className="flex gap-6 items-start w-full max-lg:flex-col">
      <div className="w-3/5 flex flex-col gap-6 max-lg:w-full">
        <div className="h-437 max-lg:h-full max-md:h-52 rounded-xl bg-almostBlack fill-almostBlack border-2 overflow-hidden">
          {youtubeLink}
        </div>
        <div className="max-lg:hidden">{voucherDesc}</div>
      </div>
      <div className="w-2/5 flex flex-col gap-4 max-lg:w-full">
        <div className=" bg-white fill-almostBlack border-2 rounded-xl flex flex-col gap-6 p-6 text-sm text-start">
          <p className="font-bold">
            Enter your details for your $220 conveyancing voucher and a free
            contract review
          </p>
          <form
            className="flex flex-col text-start w-full gap-2 "
            onSubmit={submit}
          >
            {formFields()}
            {select}
            {commentSection}
            {submitButton}
          </form>
          <p className="text-center">
            By submitting your details, you acknowledge that you accept our{" "}
            <Link href="#" className="text-seaBlue">
              Privacy Policy.
            </Link>
          </p>
        </div>
        {output()}
      </div>
      <div className="lg:hidden">{voucherDesc}</div>
    </section>
  );
};

export default VoucherDetails;
