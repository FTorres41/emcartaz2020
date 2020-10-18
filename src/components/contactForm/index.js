import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { Button, Input } from "./styled";
import { Field, Label, Control, Textarea } from "rbx";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Em Cartaz",
      reply_to: email,
      subject,
      message_html: message,
    };
    emailjs.send(
      "service_xz3gdwc",
      "template_6l554io",
      templateParams,
      "user_GIiOsb8fSVXppCy8Dc3Bb"
    );

    setOpen(true);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", width: '100%' }}>
      <form onSubmit={handleSubmit} style={{ padding: "8px", width: "100%" }}>
        <Field>
          <Label>Nome</Label>
          <Control>
            <Input
              name="name"
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Control>
        </Field>
        <Field>
          <Label>E-mail</Label>
          <Control>
            <Input
              name="email"
              type="email"
              placeholder="email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Control>
        </Field>
        <Field>
          <Label>Assunto</Label>
          <Control>
            <Input
              name="subject"
              type="text"
              placeholder="Assunto"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </Control>
        </Field>
        <Field>
          <Label>Mensagem</Label>
          <Control>
            <Textarea
              name="message"
              placeholder="Digite sua mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: "100%" }}
            />
          </Control>
        </Field>

        <Field kind="group" style={{ display: "flex", alignItems: "center" }}>
          <Control>
            <Button type="submit" className="submit">Enviar</Button>
          </Control>
        </Field>
      </form>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Mensagem enviada com sucesso!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactForm;
