"use client";

import { useState, type FormEvent } from "react";
import { Instagram, MessageCircle } from "lucide-react";
import { SITE_CONTENT, SOCIAL_LINKS } from "../constants/content";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import DecorativeAsset from "../components/ui/DecorativeAsset";

type FormFields = { name: string; phone: string; email: string; eventType: string; eventDate: string; message: string };
const initialForm: FormFields = { name: "", phone: "", email: "", eventType: "", eventDate: "", message: "" };

export default function Contact() {
  const content = SITE_CONTENT.contact;
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<FormFields> = {};
    if (!form.name.trim()) nextErrors.name = "Ingresá tu nombre.";
    if (!form.phone.trim()) nextErrors.phone = "Ingresá un número de contacto.";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Ingresá un email válido.";
    if (!form.eventType) nextErrors.eventType = "Elegí un tipo de evento.";
    if (!form.eventDate) nextErrors.eventDate = "Elegí la fecha del evento.";
    if (form.message.trim().length < 10) nextErrors.message = "Contanos un poco más sobre tu idea.";
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
    // Preparado para integrar WhatsApp, Formspree o una API propia.
  };

  const update = (field: keyof FormFields, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  };

  return (
    <section id="contacto" className="section contact">
      <DecorativeAsset src="/assets/Vector 17.svg" className="asset-contact" delay={500} />
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
          <div className="direct-contact">
            <h3>{content.directContact.title}</h3>
            <div className="direct-links">
              <a href={SOCIAL_LINKS.whatsapp || undefined} aria-disabled={!SOCIAL_LINKS.whatsapp}><MessageCircle />{content.directContact.whatsapp}</a>
              <a href={SOCIAL_LINKS.instagram || undefined} aria-disabled={!SOCIAL_LINKS.instagram}><Instagram />{content.directContact.instagram}</a>
            </div>
            {!SOCIAL_LINKS.whatsapp && <small>Los enlaces directos se habilitarán próximamente.</small>}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
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
                  <option>Comunión o bautismo</option><option>Quince años</option><option>Cumpleaños</option><option>Evento especial</option><option>Otro</option>
                </select>
                {errors.eventType && <span className="field-error">{errors.eventType}</span>}
              </div>
              <Field label={content.form.eventDate} id="eventDate" type="date" value={form.eventDate} error={errors.eventDate} onChange={(v) => update("eventDate", v)} />
            </div>
            <div className="field">
              <label htmlFor="message">{content.form.message}</label>
              <textarea id="message" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} aria-invalid={!!errors.message} />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>
            <button className="button button--primary form-submit" type="submit">{content.form.submit}<span>→</span></button>
            {submitted && <p className="form-success" role="status">¡Gracias! Tu consulta está lista. Próximamente conectaremos este formulario para enviarla.</p>}
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
