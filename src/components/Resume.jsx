import resume from "../assets/McMillian_Carissa_Resume_Linkedin.pdf"

function Resume() {
  return (
    <section id="resume" className="container my-5">
      <h2 className="mb-4">Resume</h2>
      <p>
        <a href={resume} download>
          Download my resume
        </a>
      </p>
      <iframe
        src={resume}
        width="100%"
        height="600px"
        title="Resume Preview"
      />
    </section>
  );
}

export default Resume;