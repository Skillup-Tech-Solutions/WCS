"use client";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Phone, Email, WhatsApp } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuMail } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { commonWord } from "../../Custom/CommonWord";
import emailjs from "@emailjs/browser";
import { showError, showSuccess } from "../../Custom/CustomToast";

const schema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  company: z.string().min(3, "Company is required"),
email: z
  .string()
  .email("Invalid email format")
  .optional()
  .or(z.literal("")),
  mobile: z.string().min(10, "Mobile number must be 10 digits").regex(/^\d+$/, "Only digits allowed"),
  location: z.string().min(1, "Please select location"),
  service: z.string().min(1, "Please select service"),
  findUs: z.string().min(1, "Please select an option"),  // required
  message: z.string().min(5, "Message must be at least 5 characters"),
  whatsapp: z.boolean().optional(),
});


type FormData = z.infer<typeof schema>;

const WebContactHome = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

const onSubmit = async (data: FormData) => {
  try {
    const response = await emailjs.send(
      "service_q3j1g3n",
      "template_953ce4i",
      {
        fullName: data.fullName,
        company: data.company,
        email: data.email,
        mobile: data.mobile,
        location: data.location,
        service: data.service,
        findUs: data.findUs,
        message: data.message,
      },
      "O6B4wh-hMdPZweoBS"
    );

    console.log("Success:", response.status, response.text);
    showSuccess("Message sent successfully!")
    reset()
  } catch (error) {
    console.error("Failed...", error);
    showError("Failed to send message")
  }
};


  return (
    <Box className="website-container" sx={{ py: 6,bgcolor:"white" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems:"center"
        }}
      >
        {/* LEFT SIDE - FORM */}
        <Box
          sx={{
            flex: 1,
            background: "#fafafa",
            borderRadius: "10px",
            p: 4,
            width:"100%",
            border: "1px solid #eee",
          }}
        >
          <Typography sx={{ fontSize: "28px", fontWeight: 700, mb: 3,fontFamily:"Regular_M" }}>
            Send Us a Message
          </Typography>

          <Box
  component={"form"}
  onSubmit={handleSubmit(onSubmit)}
  sx={{
    mt: 2,
    "& p": { fontSize: "14px", fontFamily: "Regular_M" },
    "& input, & textarea": { fontFamily: "Regular_M" }
  }}
>
  {/* GRID START */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
      gap: 3
    }}
  >
    {/* FULL NAME */}
    <Box>
      <Typography sx={{ mb: 1 }}>Full Name</Typography>
      <TextField
        fullWidth
        placeholder="Enter your full name"
        {...register("fullName")}
        error={!!errors.fullName}
        helperText={errors.fullName?.message}
      />
    </Box>

    {/* COMPANY */}
    <Box>
      <Typography sx={{ mb: 1 }}>Company / Organization</Typography>
      <TextField
        fullWidth
        placeholder="Enter company name"
        {...register("company")}
        error={!!errors.company}
        helperText={errors.company?.message}
      />
    </Box>

    {/* EMAIL */}
    <Box>
      <Typography sx={{ mb: 1 }}>Email</Typography>
      <TextField
        fullWidth
        placeholder="your@email.com"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
    </Box>

    {/* PHONE */}
    <Box>
      <Typography sx={{ mb: 1 }}>Phone</Typography>
      <TextField
        fullWidth
        placeholder="Your phone number"
        {...register("mobile")}
        error={!!errors.mobile}
        helperText={errors.mobile?.message}
      />
    </Box>

    {/* BUSINESS LOCATION */}
    <Box>
      <Typography sx={{ mb: 1 }}>Business Location</Typography>
      <TextField
        select
        fullWidth
        SelectProps={{ native: true }}
        {...register("location")}
                    error={!!errors.location}
    helperText={errors.location?.message}
      >
        <option value="">Select Location</option>
        <option value="qatar">Qatar</option>
        <option value="india">India</option>
      </TextField>
    </Box>

    {/* HR SERVICE TYPE */}
    <Box>
      <Typography sx={{ mb: 1 }}>HR Service Interested</Typography>
      <TextField
        select
        fullWidth
        SelectProps={{ native: true }}
        {...register("service")}
            error={!!errors.service}
    helperText={errors.service?.message}
      >
        <option value="">Select Service</option>
        <option value="hr">HR</option>
        <option value="payroll">Payroll</option>
      </TextField>
    </Box>

    {/* HOW DID YOU FIND US */}
<Box sx={{ gridColumn: { xs: "1", md: "span 2" } }}>
  <Typography sx={{ mb: 1 }}>How did you find us?</Typography>

  <TextField
    select
    fullWidth
    SelectProps={{ native: true }}
    {...register("findUs")}
    error={!!errors.findUs}
    helperText={errors.findUs?.message}
  >
    <option value="">Select an option</option>
    <option value="google">Google</option>
    <option value="social">Social Media</option>
    <option value="referral">Referral</option>
    <option value="ads">Ads</option>
    <option value="other">Other</option>
  </TextField>
</Box>

  </Box>
  {/* GRID END */}

  {/* MESSAGE - FULL WIDTH */}
  <Box sx={{ mt: 3 }}>
    <Typography sx={{ mb: 1 }}>Message</Typography>
    <TextField
      fullWidth
      multiline
      minRows={4}
      placeholder="Tell us how we can help you..."
      {...register("message")}
      error={!!errors.message}
      helperText={errors.message?.message}
    />
  </Box>

  {/* SUBMIT */}
  <Button
    type="submit"
    variant="contained"
    sx={{
      mt: 3,
      background: "var(--primary)",
      textTransform: "none",
      px: 4,
      py: 1,
      fontFamily: "Regular_M",
      fontWeight: 600
    }}
  >
    Submit
  </Button>
</Box>

        </Box>

        {/* RIGHT SIDE - CONTACT BOXES */}
        <Box sx={{ flex: 1,width:"100%","& p":{
            fontFamily:"Regular_M"
        } }}>
          {/* PHONE CARD */}
          <Box
            sx={{
              background: "#fafafa",
              p: 3,
              borderRadius: "10px",
              border: "1px solid #eee",
              mb: 3,
            }}
          >
            <Box sx={{ display: "flex", gap: 2,alignItems:{ xs: "start", md: "center" },flexDirection: { xs: "column", md: "row" }}}>
              <FiPhone style={{ fontSize: 20,color:"var(--primary)" }} />
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
                  Phone
                </Typography>

                <Typography
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => (window.location.href = `tel:${commonWord.mobileNumber}`)}
                >
                  {commonWord.mobileNumber}
                </Typography>
                <Typography
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => (window.location.href = `tel:${commonWord.mobileNumberSecond}`)}
                >
                  {commonWord.mobileNumberSecond}
                </Typography>

                <Typography sx={{ opacity: 0.7 }}>
                  Sunday-Thursday: 8 AM – 5 PM
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* EMAIL CARD */}
          <Box
            sx={{
              background: "#fafafa",
              p: 3,
              borderRadius: "10px",
              border: "1px solid #eee",
              mb: 3,
            }}
          >
            <Box sx={{ display: "flex", gap: 2,alignItems:{ xs: "start", md: "center" },flexDirection: { xs: "column", md: "row" }}}>
              <LuMail  style={{ fontSize: 20,color:"var(--primary)" }} />
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
                  Email
                </Typography>

                <Typography
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    (window.location.href = `mailto:${commonWord.email}`)
                  }
                >
                  {commonWord.email}
                </Typography>
                <Typography
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    (window.location.href = `mailto:${commonWord.emailhr}`)
                  }
                >
                  {commonWord.emailhr}
                </Typography>

                <Typography sx={{ opacity: 0.7 }}>
                  We reply within 24 hours
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* WHATSAPP CARD */}
          <Box
            sx={{
              background: "var(--primary)",
              p: 3,
              borderRadius: "10px",
              color: "white",
              mb: 3,
            }}
          >
            <Box sx={{ display: "flex", gap: 2,alignItems:{ xs: "start", md: "center" },flexDirection: { xs: "column", md: "row" }}}>
              <WhatsApp sx={{ fontSize: 26, color: "white" }} />
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "20px" }}>
                  WhatsApp
                </Typography>
                <Typography sx={{ opacity: 0.9 }}>
                  Quick responses for urgent queries
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    background: "white",
                    color: "black",
                    textTransform: "none",
                    borderRadius: "8px",
                    fontFamily:"Regular_M",
                    fontWeight:"600"
                  }}
                  onClick={() => {
                    const message = encodeURIComponent("Hello, I would like to know more about your plans.");
                    window.open(`https://wa.me/${commonWord.mobileNumbernew}?text=${message}`, "_blank");
                  }}
                >
                  Message on WhatsApp
                </Button>
              </Box>
            </Box>
          </Box>
                    {/* DELIVERY AREAS */}
          <Box
            sx={{
              background: "#fafafa",
              p: 3,
              borderRadius: "10px",
              border: "1px solid #eee",
            }}
          >
            <Box sx={{ display: "flex", gap: 2,alignItems:{ xs: "start", md: "center" },flexDirection: { xs: "column", md: "row" }}}>
              <HiOutlineLocationMarker  style={{ fontSize: 20,color:"var(--primary)" }} />
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
                  Location
                </Typography>
                <Typography sx={{ opacity: 0.7 }}>
                  <GoDotFill />
                    {commonWord.address}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WebContactHome;
