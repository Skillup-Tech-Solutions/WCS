import { Box } from "@mui/material";

const WebMap = () => {
  return (
    <>
      <Box sx={{height:"450px"}}>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1846427.026364442!2d49.213017994987865!3d25.327618788644077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf812b4032!2sQatar!5e0!3m2!1sen!2sin!4v1764776944820!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        // allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      </Box>
    </>
  );
};

export default WebMap;
