import RootLayout from "../components/RootLayout";
import Surface from "../components/Surface";
import BackHome from "../components/BackHome";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { internal } from "../urls";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Email = () => {
  const form = useRef<HTMLFormElement>(null);
  const [open, $open] = useState(false);
  const [isLoading, $isLoading] = useState(false);
  const [alert, $alert] = useState<
    { label: string; message: string } | undefined
  >(undefined);

  let navigate = useNavigate();

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    $isLoading(true);
    try {
      await emailjs.sendForm(
        `${import.meta.env.VITE_EMAIL_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAIL_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`,
        }
      );
      $alert({
        label: "Thank You!",
        message:
          "Thank you for reaching out! I’ll get back to you as soon as possible",
      });
      $open(true);
    } catch (error: any) {
      $alert({
        label: "I am so sorry!",
        message: "Something was wrong, please try later. :(",
      });
      $open(true);
    } finally {
      $isLoading(false);
    }
  };
  return (
    <RootLayout>
      <Dialog open={open} onClose={$open} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-background px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" className="t4 font-semibold text-while">
                    {alert?.label || "Label"}
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="t4 text-while">
                      {alert?.message || "Message"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  onClick={() => {
                    $open(false);
                    navigate(internal.home);
                  }}
                  className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 t5 font-normal text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
                >
                  Go back to home
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <Surface />
      <div className="min-h-screen max-w-screen-2xl w-full flex flex-col mx-auto px-6 md:px-12 lg:px-24 py-5">
        <div className="flex flex-col items-center justify-center h-full max-w-lg m-auto hero bg-primary/5 p-8">
          <h2 className="text-center mb-5">Send me a message!</h2>
          <p className="t4 text-center mb-5">
            Got a question or proposal, or just want to say hello?
            <br />
            Go ahead.
          </p>
          <form
            ref={form}
            action="#"
            method="POST"
            className="w-full mx-auto"
            onSubmit={sendEmail}
            autoComplete="off"
          >
            <div className="relative z-0 w-full mb-8 group">
              <input
                type="text"
                name="user_name"
                id="user_name"
                className="block py-2.5 px-0 w-full t5 bg-transparent border-0 border-b-2 appearance-none text-white border-primary/40 focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
                autoComplete="off"
              />
              <label
                htmlFor="user_name"
                className="peer-focus:font-medium absolute t5 text-primary/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-8 group">
              <input
                type="email"
                name="user_email"
                id="user_email"
                className="block py-2.5 px-0 w-full t5 bg-transparent border-0 border-b-2 appearance-none text-white border-primary/40 focus:outline-none focus:ring-0 focus:border-primary peer"
                required
                placeholder=" "
                autoComplete="off"
              />
              <label
                htmlFor="user_email"
                className="peer-focus:font-medium absolute t5 text-primary/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email Address
              </label>
            </div>

            <div className="relative z-0 w-full mb-8 group">
              <textarea
                name="message"
                rows={4}
                id="message"
                className="resize-none scroll-smooth-thin block py-2.5 px-0 w-full t5 bg-transparent border-0 border-b-2 appearance-none text-white border-primary/40 focus:outline-none focus:ring-0 focus:border-primary peer"
                required
                placeholder=" "
                autoComplete="off"
              />
              <label
                htmlFor="floating_message"
                className="peer-focus:font-medium absolute t5 text-primary/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Messages
              </label>
            </div>

            <div className="mb-4">
              <button
                disabled={isLoading}
                type="submit"
                className="block gap-2 w-full rounded-md bg-primary px-3.5 py-2.5 text-center t4 font-medium text-white hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark duration-200"
              >
                <div className="flex items-center w-full h-full justify-center gap-2">
                  {isLoading && (
                    <AiOutlineLoading3Quarters className="ease-in-out animate-spin" />
                  )}
                  {isLoading ? "Sending..." : "Let's talk"}
                </div>
              </button>
            </div>

            <div className="flex flex-col justify-center">
              <BackHome />
            </div>
          </form>
        </div>
      </div>
    </RootLayout>
  );
};

export default Email;
