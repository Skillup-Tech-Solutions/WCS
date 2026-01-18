import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "What services does your consulting company offer?",
    answer:
      "We provide end-to-end consulting services including business strategy, digital transformation, process improvement, technology implementation, and long-term operational support tailored to your industry."
  },
  {
    question: "Which industries do you specialize in?",
    answer:
      "We work across multiple sectors such as IT, healthcare, finance, manufacturing, retail, and startups — offering customized solutions based on industry best practices."
  },
  {
    question: "How long does it take to start a consulting project?",
    answer:
      "Project kickoff can start within 3–5 business days after requirement discussion, proposal approval, and contract signing."
  },
  {
    question: "Do you offer customized consulting solutions?",
    answer:
      "Yes, every solution we provide is fully customized to your business goals, operational challenges, and growth plan. No one-size-fits-all approach."
  },
  {
    question: "What is your pricing or engagement model?",
    answer:
      "We offer flexible engagement models including fixed-scope projects, monthly retainers, hourly consulting, and dedicated team models based on your requirement."
  },
  {
    question: "Do you help with implementation or only strategy?",
    answer:
      "We handle both — from strategy creation to complete implementation, execution, monitoring, and post-deployment support."
  },
  {
    question: "Can you work with remote teams or international clients?",
    answer:
      "Absolutely. Our consultants collaborate with clients across multiple countries through virtual meetings, project management tools, and dedicated support systems."
  },
  {
    question: "How do I know which service is right for my business?",
    answer:
      "We begin with a free consultation call to understand your goals and analyze your current business challenges before recommending the most suitable service."
  }
];


const WebFaq = () => {
  return (
    <Box className="website-container" sx={{ py: 8,bgcolor:"var(--white)" }}>
      
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        sx={{ mb: "30px !important",fontFamily:"Regular_M" }}
      >
        Frequently Asked Questions
      </Typography>

      {/* FAQ LIST */}
      <Box sx={{ maxWidth: "800px", mx: "auto" }}>
        {faqData.map((item, index) => (
          <Accordion key={index} sx={{p:1,zIndex:"8 !important"}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600} sx={{fontFamily:"Regular_M",opacity:".8"}}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#555", lineHeight: 1.6, fontFamily:"Regular_M"}} >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

    </Box>
  );
};

export default WebFaq;
