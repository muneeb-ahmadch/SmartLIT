import { useMemo, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, CircleAlert } from "lucide-react";
import { Link } from "react-router";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { SITE_EMAIL } from "../../lib/site";

const projectTypeOptions = [
  "Private villa",
  "Penthouse or apartment",
  "Yacht or marine project",
  "Existing residence upgrade",
  "Design team collaboration",
] as const;

const messagePrompts = [
  "Lighting, shading, climate and cinema integration for a new villa",
  "Upgrade an existing Crestron or Basalte system",
  "Whole-home smart control with discreet premium finishes",
  "Audio, security and lighting for a yacht or second residence",
  "Need a site visit and concept proposal for a high-end home",
] as const;

type FormValues = {
  name: string;
  email: string;
  projectType: string;
  location: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type SubmitState =
  | { kind: "idle" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

const initialValues: FormValues = {
  name: "",
  email: "",
  projectType: "",
  location: "",
  message: "",
  website: "",
};

const defaultEndpoint = "https://formspree.io/f/mbdpadvb";
const endpoint =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() ?? defaultEndpoint;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.email.trim()) {
    errors.email = "Please include the best email for project correspondence.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "A short project brief helps us shape the right next step.";
  } else if (values.message.trim().length < 24) {
    errors.message = "Please add a little more context so we can respond usefully.";
  }

  return errors;
}

export function InquiryForm() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({ kind: "idle" });

  const endpointConfigured = endpoint.length > 0;
  const configurationMessage = useMemo(() => {
    if (endpointConfigured) return null;

    return import.meta.env.DEV
      ? "Set VITE_CONTACT_FORM_ENDPOINT to a Formspree-style endpoint before testing submissions. Until then, please use the email link below."
      : "Online submissions are being finalized. Please email Smart Lit directly for current enquiries.";
  }, [endpointConfigured]);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;

    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name as keyof FormErrors]) return current;

      const next = { ...current };
      delete next[name as keyof FormErrors];
      return next;
    });
    setSubmitState({ kind: "idle" });
  }

  function applyPrompt(prompt: string) {
    setValues((current) => {
      const nextMessage = current.message.trim()
        ? `${current.message.trim()}\n${prompt}`
        : prompt;

      return { ...current, message: nextMessage };
    });

    setErrors((current) => {
      if (!current.message) return current;

      const next = { ...current };
      delete next.message;
      return next;
    });

    requestAnimationFrame(() => {
      textareaRef.current?.focus();
      textareaRef.current?.setSelectionRange(
        textareaRef.current.value.length,
        textareaRef.current.value.length,
      );
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (values.website.trim()) {
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState({
        kind: "error",
        message: "Please review the highlighted fields and try again.",
      });
      return;
    }

    if (!endpointConfigured) {
      setSubmitState({
        kind: "error",
        message:
          "The enquiry endpoint is not configured yet. Please email Smart Lit directly while setup is completed.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ kind: "idle" });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          projectType: values.projectType,
          location: values.location.trim(),
          message: values.message.trim(),
          _subject: "Smart Lit Website Enquiry",
          _source: "smartlit.ae/contact",
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setValues(initialValues);
      setErrors({});
      setSubmitState({
        kind: "success",
        message:
          "Thank you. Your enquiry has been received and Smart Lit will respond discreetly with the appropriate next step.",
      });
    } catch {
      setSubmitState({
        kind: "error",
        message:
          "We could not send the form just now. Please try again, or email Smart Lit directly for a prompt response.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-8 lg:p-10">
      <div className="flex flex-col gap-6 border-b border-white/10 pb-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[12px] uppercase tracking-[0.22em] text-white/52">
              Private enquiry
            </p>
            <h2 className="mt-4 text-[30px] font-medium tracking-tight text-white sm:text-[38px]">
              Outline the brief. We will shape the next conversation.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-[1.8] text-white/62">
            The form is intentionally concise. A few clear details are enough
            for an informed response.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-[22px] border border-white/8 bg-black/20 px-5 py-4">
            <p className="text-[12px] uppercase tracking-[0.18em] text-white/45">
              Region
            </p>
            <p className="mt-2 text-[18px] font-medium text-white">
              Abu Dhabi, Dubai, UAE
            </p>
          </div>
          <div className="rounded-[22px] border border-white/8 bg-black/20 px-5 py-4">
            <p className="text-[12px] uppercase tracking-[0.18em] text-white/45">
              Typical projects
            </p>
            <p className="mt-2 text-[18px] font-medium text-white">
              Villas, penthouses, yachts
            </p>
          </div>
          <div className="rounded-[22px] border border-white/8 bg-black/20 px-5 py-4">
            <p className="text-[12px] uppercase tracking-[0.18em] text-white/45">
              Coordination
            </p>
            <p className="mt-2 text-[18px] font-medium text-white">
              Owners, architects, designers
            </p>
          </div>
        </div>
      </div>

      <form className="mt-8 space-y-6" noValidate onSubmit={handleSubmit}>
        {/* Production note: this form posts to Formspree and can be overridden with
            VITE_CONTACT_FORM_ENDPOINT. Recommended launch setup sends notifications
            to a branded inbox such as sales@smartlit.me. */}
        <input
          type="text"
          name="website"
          value={values.website}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <Label htmlFor="contact-name" className="text-[14px] text-white/82">
              Name
            </Label>
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Your name"
              className="h-14 rounded-[18px] border-white/10 bg-white/[0.03] px-5 text-[16px] text-white placeholder:text-white/28 focus-visible:border-[#b28a52] focus-visible:ring-[#b28a52]/25"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="contact-email" className="text-[14px] text-white/82">
              Email
            </Label>
            <Input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              placeholder="name@company.com"
              className="h-14 rounded-[18px] border-white/10 bg-white/[0.03] px-5 text-[16px] text-white placeholder:text-white/28 focus-visible:border-[#b28a52] focus-visible:ring-[#b28a52]/25"
            />
            {errors.email ? (
              <p id="contact-email-error" className="text-[13px] leading-[1.6] text-[#f1b7b7]">
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            <Label htmlFor="contact-project-type" className="text-[14px] text-white/82">
              Project type
            </Label>
            <div className="relative">
              <select
                id="contact-project-type"
                name="projectType"
                value={values.projectType}
                onChange={handleChange}
                className="h-14 w-full appearance-none rounded-[18px] border border-white/10 bg-white/[0.03] px-5 pr-12 text-[16px] text-white outline-none transition-[border-color,box-shadow] focus:border-[#b28a52] focus:ring-4 focus:ring-[#b28a52]/20"
              >
                <option value="" className="bg-[#111] text-white/70">
                  Select if useful
                </option>
                {projectTypeOptions.map((option) => (
                  <option key={option} value={option} className="bg-[#111] text-white">
                    {option}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-white/42">
                <ArrowRight className="h-4 w-4 rotate-90" />
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="contact-location" className="text-[14px] text-white/82">
              Location
            </Label>
            <Input
              id="contact-location"
              name="location"
              autoComplete="address-level2"
              value={values.location}
              onChange={handleChange}
              placeholder="Abu Dhabi, Saadiyat, Dubai Marina, onboard vessel..."
              className="h-14 rounded-[18px] border-white/10 bg-white/[0.03] px-5 text-[16px] text-white placeholder:text-white/28 focus-visible:border-[#b28a52] focus-visible:ring-[#b28a52]/25"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="contact-message" className="text-[14px] text-white/82">
              Project brief
            </Label>
            <span className="text-[12px] uppercase tracking-[0.18em] text-white/35">
              Required
            </span>
          </div>
          <Textarea
            id="contact-message"
            ref={textareaRef}
            name="message"
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error contact-message-help" : "contact-message-help"
            }
            placeholder="Tell us about the property, stage of the project, key spaces, and the systems you want coordinated."
            className="min-h-[220px] rounded-[24px] border-white/10 bg-white/[0.03] px-5 py-4 text-[16px] leading-[1.75] text-white placeholder:text-white/28 focus-visible:border-[#b28a52] focus-visible:ring-[#b28a52]/25"
          />
          <p id="contact-message-help" className="text-[13px] leading-[1.7] text-white/46">
            Prompt ideas below can be used as a starting point and edited to suit the brief.
          </p>
          {errors.message ? (
            <p id="contact-message-error" className="text-[13px] leading-[1.6] text-[#f1b7b7]">
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-4">
          <p className="text-[12px] uppercase tracking-[0.2em] text-white/45">
            Suggested prompts
          </p>
          <div className="flex flex-wrap gap-3">
            {messagePrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => applyPrompt(prompt)}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-[13px] leading-[1.5] text-white/76 transition-all duration-300 hover:border-white/24 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b28a52]/55"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {configurationMessage ? (
          <div className="rounded-[20px] border border-[#b28a52]/30 bg-[#b28a52]/10 px-5 py-4 text-[14px] leading-[1.75] text-white/80">
            {configurationMessage}{" "}
            <a href={`mailto:${SITE_EMAIL}`} className="text-white underline underline-offset-4">
              {SITE_EMAIL}
            </a>
          </div>
        ) : null}

        <div
          className={`rounded-[20px] border px-5 py-4 text-[14px] leading-[1.7] ${
            submitState.kind === "success"
              ? "border-emerald-300/30 bg-emerald-300/10 text-white/84"
              : submitState.kind === "error"
                ? "border-[#c97f7f]/30 bg-[#c97f7f]/10 text-white/84"
                : "border-white/10 bg-black/20 text-white/58"
          }`}
          aria-live="polite"
        >
          <div className="flex items-start gap-3">
            {submitState.kind === "success" ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
            ) : submitState.kind === "error" ? (
              <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
            ) : (
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" />
            )}
            <p>
              {submitState.kind === "idle"
                ? "Smart Lit reviews enquiries directly. A concise brief is enough to start a private and well-coordinated discussion."
                : submitState.message}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-[12px] uppercase tracking-[0.18em] text-white/42">
              Prefer to review first
            </p>
            <p className="text-[14px] leading-[1.7] text-white/62">
              Explore{" "}
              <Link to="/solutions" className="text-white hover:text-white/76">
                solutions
              </Link>{" "}
              or our{" "}
              <Link
                to="/brands-technology"
                className="text-white hover:text-white/76"
              >
                technology partners
              </Link>
              .
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !endpointConfigured}
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-[15px] tracking-[0.08em] text-black transition-all duration-300 hover:bg-white/90 disabled:cursor-not-allowed disabled:bg-white/25 disabled:text-white/55"
          >
            {isSubmitting ? "Sending enquiry" : "Send private enquiry"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </form>
    </div>
  );
}
