import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  color: "black",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

export default function CustomModal() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              About the project
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2, mb: 2 }}>
              This project is made by{" "}
              <a
                href="https://www.linkedin.com/in/ubaid-lodhi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ubaid Lodhi
              </a>
              . This project was created while learning the core of React from{" "}
              <a
                href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=KEEPLEARNING"
                target="_blank"
                rel="noopener noreferrer"
              >
                Maximilian Schwarzmüller's
              </a>{" "}
              course on Udemy.
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                This project showcases a React-based investment calculator
                allowing users to estimate future savings growth with inputs for
                savings, interest, and duration.
              </Typography>
            </Typography>
            <div
              style={{ marginTop: "20px", margin: "auto", textAlign: "center" }}
            >
              <button
                style={{
                  backgroundColor: "#2b996d",
                  color: "#fff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "14px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s ease, transform 0.3s ease",
                }}
                onClick={handleClose}
              >
                View Project
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
