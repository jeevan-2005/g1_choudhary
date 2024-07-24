import "./_form.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert, Slide, Snackbar, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

const Form = () => {

  const form = useRef();
  const initialContactData = {
    name: "",
    email: "",
    message: "",
  };
  const [contactData, setContactData] = useState(initialContactData);
  const [snackbarDetials, setSnackbarDetails] = useState({
    message: "hello",
    open: false,
    severity: "success",
  });
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setSnackbarDetails({
      ...snackbarDetials,
      open: false,
    });
  };

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm("service_uj7eicv", "template_t0ok7su", form.current, {
        publicKey: "I9QxGLCjd8HyhA8we",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setContactData(initialContactData);
          setSnackbarDetails({
            message: "Your Message has been sent Successfully 🎉",
            open: true,
            severity: "success",
          });
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setContactData(initialContactData);
          setSnackbarDetails({
            message: `Failed - ${error.text}`,
            open: true,
            severity: "error",
          });
          setLoading(false);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <TextField
          label="Full Name"
          name="user_name"
          variant="standard"
          placeholder="Enter your Name"
          required
          value={contactData.name}
          onChange={(e) => {
            setContactData({ ...contactData, name: e.target.value });
          }}
          fullWidth
          color="secondary"
        />
        <TextField
          type="email"
          name="user_email"
          label="Email"
          variant="standard"
          placeholder="Enter email"
          required
          value={contactData.email}
          onChange={(e) => {
            setContactData({ ...contactData, email: e.target.value });
          }}
          fullWidth
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          variant="outlined"
          placeholder="Type your message here....."
          required
          value={contactData.message}
          onChange={(e) => {
            setContactData({ ...contactData, message: e.target.value });
          }}
          fullWidth
        />
        <LoadingButton
          loading={loading}
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          loadingPosition="end"
          fullWidth
        >
          Send
        </LoadingButton>
      </form>

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={snackbarDetials.open}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        key={SlideTransition.name}
        autoHideDuration={3000}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {snackbarDetials.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Form;
