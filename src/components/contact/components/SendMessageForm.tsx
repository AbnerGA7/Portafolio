import { useState } from "react";
import EmailOutLineIcon from "./EmailOutlineIcon";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import successAnimation from "@/assets/lottie/success.lottie";
import LoadingSpinnerIcon from "./LoadingSpinnerIcon";

interface Props {
  translations: Record<string, string>;
}

interface MailStatus {
  state: "success" | "error" | "empty" | "loading";
  error?: string;
}

const SendMessageForm: React.FC<Props> = ({ translations }) => {
  const [mailState, setMailState] = useState<MailStatus>({
    state: "empty",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);
      setMailState({ state: "loading" });

      const res = await fetch(
        "https://formsubmit.co/ajax/abner.gonzales.work@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!res.ok) throw new Error("Failed to send message");

      setMailState({ state: "success" });
      form.reset();
    } catch (error) {
      setMailState({
        state: "error",
        error: translations["contact.form.error"],
      });
    }
  };

  const showSuccessVideo = mailState.state === "success";
  const isLoading = mailState.state === "loading";
  const hasAnError = mailState.state === "error";

  return (
    <div className="w-full p-6 bg-white/10 rounded-2xl shadow-lg max-w-3xl xl:max-w-full">
      {!showSuccessVideo && (
        <>
          <div className="flex justify-center items-center gap-2">
            <EmailOutLineIcon className="size-8" />
            <h2 className="text-2xl text-center font-bold">
              {translations["contact.form.title"]}
            </h2>
          </div>
          <form
            id="contactForm"
            className="flex flex-col gap-4 mt-5"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="_subject"
              value={translations["contact.form.subject"]}
            />
            <input type="hidden" name="_template" value="table" />
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <FormInput
              id="name"
              label={translations["contact.form.name.label"]}
              name="name"
              placeholder={translations["contact.form.name.placeholder"]}
              disabled={isLoading}
            />

            <FormInput
              id="email"
              label={translations["contact.form.email.label"]}
              type="email"
              name="email"
              placeholder={translations["contact.form.email.placeholder"]}
              disabled={isLoading}
            />
            <FormTextArea
              id="message"
              label={translations["contact.form.message.label"]}
              placeholder={translations["contact.form.message.placeholder"]}
              name="message"
              rows={5}
              disabled={isLoading}
            />

            <button
              type="submit"
              className={`bg-accent/70 text-on-container font-semibold py-2 rounded-lg hover:bg-accent/50 transition flex justify-center gap-2 ${isLoading ? "opacity-70 cursor-wait" : "hover:bg-accent/50"
                }`}
            >
              {isLoading
                ? translations["contact.form.sending"]
                : translations["contact.form.submit"]}
              {isLoading && <LoadingSpinnerIcon className="size-5" />}
            </button>
            {hasAnError && (
              <p className="mt-3 text-red-500 text-sm font-bold animate-pulse text-center">
                {mailState.error}
              </p>
            )}
          </form>
        </>
      )}
      {showSuccessVideo && (
        <div className="relative">
          <DotLottieReact
            src={successAnimation}
            className="-translate-y-8"
            autoplay
          />
          <p
            className="absolute w-full bottom-4 sm:bottom-8 left-[50%] -translate-x-[50%] text-base xs:text-lg sm:text-xl font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {translations["contact.form.success"]}
          </p>
        </div>
      )}
    </div>
  );
};

export default SendMessageForm;
