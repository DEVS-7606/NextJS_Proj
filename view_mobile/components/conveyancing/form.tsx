import { INPUTFIELDS } from "@/data";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Input from "../shared/Input";

interface userData {
  firstName: string;
  lastName: string;
  emailId: string;
  phone: number;
  state: string;
  comment?: string;
}

const Form = () => {
  const [userInput, setUserInput] = useState<userData>({
    firstName: "",
    lastName: "",
    emailId: "",
    phone: 0,
    state: "",
    comment: "",
  });
  const [error, setError] = useState<Record<string, string>>({});

  let emailValidationPattern: RegExp =
    /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
  let phoneNumberValidationPattern: RegExp = /^[6-9]{1}[0-9]{9}$/;

  const formFields = (): JSX.Element[] => {
    return INPUTFIELDS.map((attributes, index) => {
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

  const submit = (event: FormEvent<HTMLFormElement>): void => {
    let errors: Record<string, string> = {};
    let userDetails: userData = {
      firstName: "",
      lastName: "",
      emailId: "",
      phone: 0,
      state: "",
      comment: "",
    };
    const formData = new FormData(event.currentTarget);
    console.log(event.currentTarget["state"].value);
    event.preventDefault();

    for (let [key, value] of formData.entries()) {
      console.log(key, value);

      userDetails = { ...userDetails, [key]: value.toString() };

      if (key !== "comment" && value.toString().trim().length === 0) {
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
      if (event.currentTarget["state"].value === "select your state") {
        errors.state = `* state is required`;
      }
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

  const select: JSX.Element = (
    <>
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

  const commentSection: JSX.Element = (
    <label className="flex flex-col font-medium" htmlFor="comment">
      Comments or message
      <textarea
        className="bg-white fill-almostBlack border-2 rounded-lg outline-none focus-within:border-seaBlue pl-4 font-medium"
        cols={20}
        rows={4}
        id="comment"
        name="comment"
      ></textarea>
    </label>
  );

  const submitButton: JSX.Element = (
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
  );
};

export default Form;
