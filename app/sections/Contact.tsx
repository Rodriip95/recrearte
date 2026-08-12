"use client";

import { useRef, useState, type FormEvent } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Instagram, MessageCircle } from "lucide-react";
import { SITE_CONTENT, SOCIAL_LINKS } from "../constants/content";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import DecorativeAsset from "../components/ui/DecorativeAsset";

type FormFields = { name: string; phone: string; email: string; eventType: string; eventDate: string; interest: string; message: string };
const initialForm: FormFields = { name: "", phone: "", email: "", eventType: "", eventDate: "", interest: "", message: "" };
const hcaptchaSiteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

export default function Contact() {
  const content = SITE_CONTENT.contact;
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef<HCaptcha>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<FormFields> = {};
    if (!form.name.trim()) nextErrors.name = "Ingresá tu nombre.";
    if (!form.phone.trim()) nextErrors.phone = "Ingresá un número de contacto.";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Ingresá un email válido.";
    if (!form.eventType) nextErrors.eventType = "Elegí un tipo de evento.";
    if (!form.eventDate) nextErrors.eventDate = "Elegí la fecha del evento.";
    if (!form.interest) nextErrors.interest = "Elegí qué te interesa.";
    if (form.message.trim().length < 10) nextErrors.message = "Contanos un poco más sobre tu idea.";
    if (!captchaToken) setSubmitError("Confirmá que no sos un robot para enviar la consulta.");
    setErrors(nextErrors);
    setSubmitted(false);
    if (captchaToken) setSubmitError("");

    if (Object.keys(nextErrors).length > 0 || !captchaToken) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORM;
    if (!accessKey) {
      setSubmitError("El formulario no está configurado. Escribinos por WhatsApp.");
      return;
    }

    const formElement = event.currentTarget;
    const botcheck = new FormData(formElement).get("botcheck") ?? "";

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Nueva consulta para ${form.eventType} · Flora Eventos Florales`,
          from_name: "Web de Flora Eventos Florales",
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          replyto: form.email.trim(),
          "Tipo de evento": form.eventType,
          "Fecha del evento": form.eventDate,
          "Producto o servicio": form.interest,
          message: form.message.trim(),
          botcheck,
          "h-captcha-response": captchaToken,
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "No se pudo enviar la consulta.");
      }

      setSubmitted(true);
      setForm(initialForm);
      formElement.reset();
      setCaptchaToken("");
      captchaRef.current?.resetCaptcha();
    } catch {
      setSubmitError("No pudimos enviar tu consulta. Intentá nuevamente o escribinos por WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const update = (field: keyof FormFields, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
    setSubmitError("");
  };

  return (
    <section id="contacto" className="section contact">
      <DecorativeAsset src="/assets/Vector 17.svg" className="asset-contact" delay={500} />
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
          <div className="direct-contact">
            <h3>{content.directContact.title}</h3>
            <p className="direct-contact-copy">{content.directContact.channelsNote}</p>
            <div className="direct-links">
              {SOCIAL_LINKS.whatsapp && (
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="direct-channel direct-channel--whatsapp">
                  <MessageCircle />{content.directContact.whatsapp}<small>{content.directContact.whatsappPhone}</small>
                </a>
              )}
              {!SOCIAL_LINKS.instagram && (
                <span className="direct-channel" aria-disabled="true"><Instagram />{content.directContact.instagram}<small>Pronto</small></span>
              )}
            </div>
            <small className="direct-note">{content.directContact.response}</small>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <input className="form-botcheck" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className="field-row">
              <Field label={content.form.name} id="name" value={form.name} error={errors.name} onChange={(v) => update("name", v)} />
              <Field label={content.form.phone} id="phone" type="tel" value={form.phone} error={errors.phone} onChange={(v) => update("phone", v)} />
            </div>
            <Field label={content.form.email} id="email" type="email" value={form.email} error={errors.email} onChange={(v) => update("email", v)} />
            <div className="field-row">
              <div className="field">
                <label htmlFor="eventType">{content.form.eventType}</label>
                <select id="eventType" value={form.eventType} onChange={(e) => update("eventType", e.target.value)} aria-invalid={!!errors.eventType}>
                  <option value="">Seleccioná una opción</option>
                  <option>Casamiento</option><option>Comunión o bautismo</option><option>Quince años</option><option>Cumpleaños</option><option>Evento especial</option><option>Otro</option>
                </select>
                {errors.eventType && <span className="field-error">{errors.eventType}</span>}
              </div>
              <Field label={content.form.eventDate} id="eventDate" type="date" value={form.eventDate} error={errors.eventDate} onChange={(v) => update("eventDate", v)} />
            </div>
            <div className="field">
              <label htmlFor="interest">{content.form.interest}</label>
              <select id="interest" value={form.interest} onChange={(e) => update("interest", e.target.value)} aria-invalid={!!errors.interest}>
                <option value="">Seleccioná una opción</option>
                <option>Centros de mesa</option><option>Souvenirs</option><option>Velas y pergaminos</option><option>Arreglos florales y ramos</option><option>Cuadros de firmas</option><option>Decoración para eventos</option><option>Diseño personalizado</option><option>Aún no lo sé</option>
              </select>
              {errors.interest && <span className="field-error">{errors.interest}</span>}
            </div>
            <div className="field">
              <label htmlFor="message">{content.form.message}</label>
              <textarea id="message" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} aria-invalid={!!errors.message} />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>
            <div className="form-captcha">
              <HCaptcha
                ref={captchaRef}
                sitekey={hcaptchaSiteKey}
                reCaptchaCompat={false}
                onVerify={setCaptchaToken}
                onExpire={() => setCaptchaToken("")}
                onError={() => {
                  setCaptchaToken("");
                  setSubmitError("No pudimos cargar la validación antispam. Recargá la página o escribinos por WhatsApp.");
                }}
              />
            </div>
            <button className="button button--primary form-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando…" : content.form.submit}
              <span aria-hidden="true">→</span>
            </button>
            <div aria-live="polite">
              {submitted && <p className="form-success" role="status">¡Gracias! Recibimos tu consulta y te escribiremos a la brevedad para crear juntos tu propuesta.</p>}
              {submitError && <p className="form-submit-error" role="alert">{submitError}</p>}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", value, error, onChange }: { label: string; id: string; type?: string; value: string; error?: string; onChange: (value: string) => void }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={(event) => onChange(event.target.value)} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} />
      {error && <span id={`${id}-error`} className="field-error">{error}</span>}
    </div>
  );
}
