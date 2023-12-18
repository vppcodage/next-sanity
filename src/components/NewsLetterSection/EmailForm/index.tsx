
import { useState } from "react";
import {
  EmailFormFields,
  ErrorResponseArgs,
  PendingArgs,
  SuccessResponseArgs,
} from "react-mailchimp-subscribe";
import clsx from "clsx";
import locales from "@/lib/locales";

const EmailForm: React.FC<{
  status:
    | ErrorResponseArgs["status"]
    | SuccessResponseArgs["status"]
    | PendingArgs["status"];
  subscribe: (data: EmailFormFields) => void;
  message:
    | ErrorResponseArgs["message"]
    | SuccessResponseArgs["message"]
    | PendingArgs["message"];
  input_placeholder?: string;
  button_label?: string;
  sidebar?:boolean;
}> = ({ status, message, subscribe, input_placeholder, button_label, sidebar}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (email === "") {
      setError(true);
      return;
    }
    subscribe({
      EMAIL: email,
    });
    setEmail("");
  };
  return (
    <div className="mail-msg">
      {status !== "sending" && status !== "success" && (
        <form onSubmit={(e) => handleSubmit(e)} className="grid grid-cols-[3fr_1fr]">
          <input
            type="email"
            className={clsx(sidebar ? "!text-white-color !text-[0.875em] !rounded-[3em] !border-[0.0625em] !border-solid !border-white placeholder:text-white-color " : "input-row max-w-full !w-full !bg-[#fff] h-[3.5em] !border-r-[0px] !border-[1px] !rounded-l-[0.5em] py-[1em] px-[1.3125em] text-[14px] !font-semibold !text-[#111118cc] font-DM placeholder-text-[14px] placeholder-font-semibold placeholder-text-[#111118cc] border-white-color", { error: error },
            "")}
            placeholder={input_placeholder ?? "Email address"}
            value={email}
            name={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={clsx(sidebar ? "bg-white-color hover:bg-dark-blue text-[0.875em] font-medium cursor-pointer text-[#da3654] bg-[url(/send.svg)] bg-no-repeat bg-sendBtn ml-[0.5em] pl-[2.5em] pr-[1em] py-0 rounded-[3em] !border-[1px] border-white-color hover:border-dark-blue" : "bg-dark-pink uppercase text-[12px] h-[100%] rounded-r-[0.5em] text-[#fff] hover:bg-dark-blue py-[1em] px-[1.5em] em:px-[2.0625em] cursor-pointer font-semibold font-Inter")}
            type="submit"
            value={button_label ?? locales.en.SUBSCRIBE}
          />
        </form>
      )}
    </div>
  );
};
export default EmailForm;
