import { useState } from "react";
import { Box, TextField, Card, CardContent, Typography, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { commonWord } from "../../Custom/CommonWord";

const jobData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechSoft Pvt Ltd",
    location: "Bangalore",
    experience: "1-3 Years",
    description:
      "Responsible for developing UI components, optimizing website performance, and working with React/MUI to build high-quality applications.",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Innova Solutions",
    location: "Chennai",
    experience: "2-5 Years",
    description:
      "Build scalable backend systems, REST APIs, and databases using Node.js, Express, and MongoDB.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Pixel Labs",
    location: "Hyderabad",
    experience: "0-2 Years",
    description:
      "Create visually appealing UI designs, wireframes, and user journeys for digital applications.",
  },
  {
    id: 4,
    title: "React Developer",
    company: "BrainSpark IT",
    location: "Mumbai",
    experience: "1-4 Years",
    description:
      "Develop and maintain web applications using React, Redux, MUI, and modern frontend tools.",
  },
  {
    id: 5,
    title: "Full Stack Developer",
    company: "NextGen Corp",
    location: "Remote",
    experience: "2-5 Years",
    description:
      "Design and build full-stack applications with React, Node.js, SQL/NoSQL, and cloud services.",
  },
  {
    id: 6,
    title: "Java Developer",
    company: "GreenTech",
    location: "Pune",
    experience: "1-3 Years",
    description:
      "Work on enterprise software solutions using Java, Spring Boot, Microservices, and Hibernate.",
  },
  {
    id: 7,
    title: "Project Manager",
    company: "GlobalSoft",
    location: "Delhi",
    experience: "5-8 Years",
    description:
      "Manage project timelines, resources, and teams to deliver software solutions on schedule.",
  },
  {
    id: 8,
    title: "QA Tester",
    company: "BrightWorks",
    location: "Kochi",
    experience: "0-2 Years",
    description:
      "Test applications, prepare bug reports, and ensure product quality using manual and automation tools.",
  },
  {
    id: 9,
    title: "DevOps Engineer",
    company: "CloudSpace",
    location: "Bangalore",
    experience: "2-4 Years",
    description:
      "Manage CI/CD pipelines, cloud deployments, and infrastructure automation tools.",
  },
  {
    id: 10,
    title: "Data Analyst",
    company: "InfoEdge",
    location: "Chennai",
    experience: "1-3 Years",
    description:
      "Analyze data, create dashboards, and support business insights using Excel, Power BI, and SQL.",
  },
];

const WebJobHome = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const jobsPerPage = 5;

  const filteredJobs = jobData.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (page - 1) * jobsPerPage;
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  return (
    <Box className="website-container" sx={{ py: 6, backgroundColor: "var(--lightbg)" }}>
      
      {/* TOP DESCRIPTION */}
      <Box sx={{ maxWidth: "900px", mx: "auto", mb: 5, textAlign: "center" }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 2, fontFamily: "Medium_M" }}>
          Work, Live and Grow Your Career Overseas
        </Typography>

        <Typography
          sx={{
            fontSize: "17px",
            opacity: 0.8,
            mb: 2,
            lineHeight: 1.7,
            mt: "10px !important",
            fontFamily: "Regular_M",
          }}
        >
          Apply now for our global job opportunities. Complete the application form and
          mention the position you're applying for to help us respond faster.
          We’re hiring across multiple industries—don’t miss your dream job!
          Stay updated via Facebook & Instagram, or email your CV to{" "}
          <strong>{commonWord.emailhr}</strong>.
        </Typography>
      </Box>

      {/* SEARCH BAR */}
      <Box sx={{ width:"100%", mb: 4,display:"flex",alignItems:"center",justifyContent:"space-between" }}>
        <TextField
          fullWidth
          label="Search Jobs"
          variant="outlined"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          sx={{
            maxWidth:"400px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
        />
              {/* PAGINATION ICONS */}
      <Box sx={{  gap: 2,alignItems: "center" , display:{ xs:"none",md:"flex"}
 }}>
        <IconButton
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          sx={{
            backgroundColor: "var(--primary)",
            color: "#fff",
            "&:disabled": { backgroundColor: "#ccc" },
          }}
        >
          <ChevronLeft size={22} />
        </IconButton>

        <Typography sx={{ fontFamily: "Medium_M", opacity: 0.7 }}>
          Page {page} of {totalPages}
        </Typography>

        <IconButton
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          sx={{
            backgroundColor: "var(--primary)",
            color: "#fff",
            "&:disabled": { backgroundColor: "#ccc" },
          }}
        >
          <ChevronRight size={22} />
        </IconButton>
      </Box>
      </Box>

      {/* JOB CARDS */}
      <Box
        sx={{
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 3,
          display: "grid",
        }}
      >
        {paginatedJobs.map((job) => (
          <Card key={job.id} sx={{ p: 1, borderRadius: "12px", boxShadow: 3,zIndex:"8 !important",mb:2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ fontFamily: "Medium_M" }}>
                {job.title}
              </Typography>

              <Typography sx={{ mt: 1, opacity: 0.8, fontFamily: "Medium_M" }}>
                {job.company}
              </Typography>

              <Typography sx={{ mt: 1, fontFamily: "Medium_M" }}>📍 {job.location}</Typography>
              <Typography sx={{ mt: 1, fontFamily: "Medium_M" }}>💼 {job.experience}</Typography>

              <Typography
                sx={{
                  mt: 2,
                  fontSize: "14px",
                  opacity: 0.9,
                  lineHeight: 1.6,
                  fontFamily: "Medium_M",
                }}
              >
                {job.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      
      {filteredJobs.length === 0 && (
   <Typography sx={{fontFamily:"Medium_M",textAlign:"center"}}>No jobs found</Typography>
)}
        <Box sx={{  gap: 2,alignItems: "center" , display:{ xs:"flex",md:"none"}
 }}>
        <IconButton
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          sx={{
            backgroundColor: "var(--primary)",
            color: "#fff",
            "&:disabled": { backgroundColor: "#ccc" },
          }}
        >
          <ChevronLeft size={22} />
        </IconButton>

        <Typography sx={{ fontFamily: "Medium_M", opacity: 0.7 }}>
          Page {page} of {totalPages}
        </Typography>

        <IconButton
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          sx={{
            backgroundColor: "var(--primary)",
            color: "#fff",
            "&:disabled": { backgroundColor: "#ccc" },
          }}
        >
          <ChevronRight size={22} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default WebJobHome;
