import moment from "moment";
import { useState } from "react";
import photo from "../../../assets/images/aime.png";
import { cfl } from "../../../helpers/shared";
import { Validate } from "../../../helpers/validations";
import { CREATE_CONTACT } from "../../../redux/thunks/gql/contactQry";
import { client } from "../../../utils/dbConfig";
import TextInput, { InputType } from "./TextInput";

const Contacts = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [formState, setFormState] = useState<{
    pending: "idle" | "loading" | "failed" | "success" | "invalidated";
    message: string;
  }>();

  //Handle form inputs
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ pending: "idle", message: "" });

    if (
      new Validate(email).email() !== true ||
      new Validate(fullName).fullName() !== true ||
      new Validate(message).message() !== true
    ) {
      setFormState({
        pending: "invalidated",
        message: "All fields are required *",
      });

      return;
    }
    setFormState({
      pending: "loading",
      message: "",
    });
    try {
      const response = await client.mutate({
        mutation: CREATE_CONTACT,
        variables: { fullName, email, message },
      });
      if (response.data) {
        setFormState({
          pending: "success",
          message: `${cfl(
            response.data.addContact.fullName
          )}, Message sent successfully ${moment(
            Number(response.data.addContact.createdAt)
          ).calendar()}`,
        });
        setFullName("");
        setEmail("");
        setMessage("");
        const form = document.getElementById("contact-form") as HTMLFormElement;
        form.reset();
        return;
      }
      if (response.errors) {
        setFormState({
          pending: "failed",
          message: response.errors.map((error) => error.message).join(", "),
        });
      }
    } catch (error: any) {
      setFormState({
        pending: "failed",
        message: `${error.message}, try again later`,
      });
    }
  };
  return (
    <section>
      <h1 className="text-center text-2xl font-semibold">
        Have an idea? Tell me about!
      </h1>
      <section
        aria-labelledby="contact"
        className="container mx-auto px-8 overflow-hidden"
      >
        <div className="flex flex-wrap justify-center gap-12 md:gap-6 lg:gap-20">
          <div className="md:flex-1 md:max-w-sm relative">
            <img
              src={
                "https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_1280.jpg"
              }
              alt="Lamp"
              className="mx-auto"
            />
            <a
              href="https://drive.google.com/u/0/uc?id=1txa8il3V7DFI-TzN7KGUvfhm-EFOo_7w&export=download"
              className="
    py-2
    px-6
    bg-primary
              w-max
              mx-auto
              mt-12
              md:mb-12
              flex
              gap-2
              shadow-xl
              hover:shadow-none
              transition-shadow
              focus:outline-none
              focus-visible:ring-4
              ring-primary
              rounded-md
              ring-offset-4
              ring-offset-white
             text-white
            "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download my CV</span>
            </a>
            <img
              src={photo}
              alt="app"
              width="240"
              className="hidden md:block drop-shadow-xl absolute left-1/2 -translate-x-1/2 max-w-16 xl:max-w-xs"
            />
            <div
              className=" absolute -bottom-18 left-1/2 -translate-x-1/2 -z-10 aspect-square md:border-8 border-lightPrimary rounded-full md:w-72 lg:w-96
            "
            ></div>
          </div>
          <form
            className="relative border-8 border-primary p-6 rounded-lg grid gap-8 md:flex-1 md:max-w-lg my-4 md:my-12 lg:my-16 bg-white w-full"
            onSubmit={handleSend}
            id="contact-form"
          >
            <h2 id="contact" className="text-3xl font-bold">
              Let’s Connect
            </h2>
            {!formState ||
              (formState.message !== "" && (
                <div
                  className={`${
                    formState.pending === "success"
                      ? "bg-green-100 text-green-800 border-green-800"
                      : "bg-red-100 text-red-800 border-red-800"
                  } text-sm text-center rounded-md p-1.5 border border-opacity-10`}
                >
                  {formState.message}
                </div>
              ))}
            <TextInput
              type={InputType.name}
              onChanged={(value) => {
                setFullName(value);
              }}
              onValidate={(value) => new Validate(value).fullName()}
            />
            <TextInput
              type={InputType.email}
              onChanged={(value) => {
                setEmail(value);
              }}
              onValidate={(value) => new Validate(value).email()}
            />
            <TextInput
              type={InputType.message}
              onChanged={(value) => {
                setMessage(value);
              }}
              onValidate={(value) => new Validate(value).message()}
            />
            <button
              className="py-2 px-6 bg-primary text-white w-max shadow-xl hover:shadow-none transition-shadow focus:outline-none focus-visible:ring-4 ring-primary rounded-md ring-offset-4 ring-offset-white         "
              type="submit"
            >
              {formState?.pending === "loading"
                ? "Sending..."
                : formState?.pending === "success"
                ? "Message Sent"
                : "Contact Me"}
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Contacts;
