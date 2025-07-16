import BackHome from "@/components/back-home";
import Layout from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import emailjs from "@emailjs/browser";
import { FormEvent, useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";
import { internal } from "../urls";

const Email = () => {
  const form = useRef<HTMLFormElement>(null);
  const [open, $open] = useState(false);
  const [isLoading, $isLoading] = useState(false);
  const [alert, $alert] = useState<
    { label: string; message: string } | undefined
  >(undefined);

  useEffect(() => {
    return () => {
      $open(false);
      $isLoading(false);
    };
  }, []);

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
        },
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
    <Layout hideProgress>
      <Dialog open={open} onOpenChange={$open}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="t4">{alert?.label || "Label"}</DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground t5">
            {alert?.message || "Message"}
          </p>
          <Button asChild size="lg">
            <Link to={internal.home} className="py-5">
              Back to Home
            </Link>
          </Button>
        </DialogContent>
      </Dialog>

      <div className="max-w-(--breakpoint-2xl) w-full flex flex-col mx-auto my-auto px-6 md:px-12 lg:px-24 py-5">
        <div className="flex flex-col items-center justify-center h-full max-w-lg m-auto hero !bg-background relative">
          <div className="flex flex-col flex-1 bg-primary/5 p-8 gap-4">
            <h2 className="text-center">
              Send me a <span className="text-primary">message</span>!
            </h2>
            <p className="t4 text-center">
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
                  className="block py-2.5 px-0 w-full t5 bg-transparent border-0 border-b-2 appearance-none text-foreground border-primary/40 focus:outline-hidden focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                  onFocus={(event) => {
                    event.target.setAttribute("autocomplete", "whatever");
                  }}
                  onBlur={(event) => {
                    event.target.setAttribute("autocomplete", "off");
                  }}
                  autoComplete="off"
                />
                <label
                  htmlFor="user_name"
                  className="peer-focus:font-medium absolute t5 text-primary/60 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:rtl:translate-x-1/4 peer-focus:rtl:left-auto peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your Name
                </label>
              </div>

              <div className="relative z-0 w-full mb-8 group">
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  className="block py-2.5 px-0 w-full t5 bg-transparent border-0 border-b-2 appearance-none text-foreground border-primary/40 focus:outline-hidden focus:ring-0 focus:border-primary peer"
                  required
                  placeholder=" "
                  onFocus={(event) => {
                    event.target.setAttribute("autocomplete", "whatever");
                  }}
                  onBlur={(event) => {
                    event.target.setAttribute("autocomplete", "off");
                  }}
                  autoComplete="off"
                />
                <label
                  htmlFor="user_email"
                  className="peer-focus:font-medium absolute t5 text-primary/60 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:rtl:translate-x-1/4 peer-focus:rtl:left-auto peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email Address
                </label>
              </div>

              <div className="relative z-0 w-full mb-8 group">
                <textarea
                  name="message"
                  rows={4}
                  id="message"
                  className="resize-none scroll-smooth-thin block py-2.5 px-0 w-full t5 bg-transparent border-0 border-b-2 appearance-none text-foreground border-primary/40 focus:outline-hidden focus:ring-0 focus:border-primary peer"
                  required
                  placeholder=" "
                  onFocus={(event) => {
                    event.target.setAttribute("autocomplete", "whatever");
                  }}
                  onBlur={(event) => {
                    event.target.setAttribute("autocomplete", "off");
                  }}
                  autoComplete="off"
                />
                <label
                  htmlFor="floating_message"
                  className="peer-focus:font-medium absolute t5 text-primary/60 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:rtl:translate-x-1/4 peer-focus:rtl:left-auto peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your Messages
                </label>
              </div>

              <div className="mb-4 relative">
                <Button
                  disabled={isLoading}
                  type="submit"
                  size="lg"
                  className="flex w-full items-center justify-center gap-2 cursor-pointer"
                >
                  {isLoading && (
                    <AiOutlineLoading3Quarters className="ease-in-out animate-spin" />
                  )}
                  {isLoading ? "Sending..." : "Let's talk"}
                </Button>
              </div>

              <BackHome />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Email;
