import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { cfl } from "../../../helpers/shared";

export const enum InputType {
  email,
  name,
  message,
}

export interface InputProps {
  type: InputType;
  onChanged(value: string): void;
  onValidate(value: string): string | true;
}

const idsMap = new Map<InputType, string>();
idsMap.set(InputType.email, "email");
idsMap.set(InputType.name, "name");
idsMap.set(InputType.message, "message");

const TextInput = (props: InputProps) => {
  const { type, onChanged } = props;
  const [validationError, setValidationError] = useState<string | true>();
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="relative">
        {type === InputType.message ? (
          <textarea
            name={idsMap.get(type)}
            id={idsMap.get(type)}
            onChange={(e) => {
              const value = e.target.value.trim();
              setValidationError(props.onValidate(value));
              onChanged(value);
              setCount(value.length);
            }}
            cols={20}
            rows={5}
            minLength={10}
            maxLength={1000}
            className="peer form-textarea resize-none w-full border-2 border-neutral-700 rounded-md px-2 py-1 outline-none placeholder-transparent"
            placeholder="How can we help?"
          ></textarea>
        ) : (
          <input
            type={type === InputType.email ? "email" : "text"}
            onChange={(e) => {
              setValidationError(props.onValidate(e.target.value.trim()));
              onChanged(e.target.value.trim());
            }}
            id={idsMap.get(type)}
            maxLength={50}
            minLength={5}
            className="peer form-input w-full border-2 border-neutral-700 rounded-md  outline-none  px-2 py-1 placeholder-transparent"
            placeholder={type === InputType.email ? "Your Email" : "Your Name"}
          />
        )}

        {type === InputType.message ? (
          <label
            htmlFor={idsMap.get(type)}
            className="text-neutral-700 text-sm font-bold uppercase absolute -top-3 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-6 peer-placeholder-shown:text-primary peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600
          "
          >
            How can we help?
          </label>
        ) : (
          <label
            htmlFor={idsMap.get(type)}
            className="text-neutral-700 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-primary peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600"
          >
            {type === InputType.email ? "Your Email" : "Your Name"}
          </label>
        )}
      </div>
      <AnimatePresence>
        {validationError ? (
          <motion.span
            initial={{ opacity: 0.5, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 500 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-red-500 text-xs"
          >
            <span>{validationError}</span>
          </motion.span>
        ) : (
          <span className="text-primary text-xs italic">
            Enter your {idsMap.get(type)} here*
          </span>
        )}
        {validationError === true && (
          <span
            className="text-green-600 text-xs  flex items-center space-x-1 my-1"
            key={cfl(idsMap.get(type)!)}
          >
            <span>{cfl(idsMap.get(type)!)} is valid</span>
            <span>
              <FaCheckCircle />
            </span>
            {type === InputType.message && (
              <span className="flex-1 text-end">{count}/1000</span>
            )}
          </span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TextInput;
