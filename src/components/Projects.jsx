import Placeholder from "../assets/placeholder-image.png";

function Projects() {
  return (
    <section id="projects" className="container my-5">
      <h2 className="mb-4">Projects</h2>
      <p>Check out some of my featured projects! </p>
      <ul>
        <li className="mb-4 d-flex align-items-start">
          <img 
            src={Placeholder} 
            alt="Miles & Smiles" 
            className="me-3 rounded" 
            width="100" 
          />
          <div>
            <h5>
              <a href="https://smiles-and-miles.netlify.app/" target="_blank" rel="noopener noreferrer">
                Miles & Smiles
              </a>
            </h5>
            <p className="mb-0">A personal dashboard that tracks credit card points, expiring rewards, and travel perks in one easy place.</p>
          </div>
        </li>
        <li className="mb-4 d-flex align-items-start">
          <img 
            src={Placeholder} 
            alt="J&C Internet Works" 
            className="me-3 rounded" 
            width="100" 
          />
          <div>
            <h5>
              <a href="https://jandcinternetworks.com/" target="_blank" rel="noopener noreferrer">
                J&C Internet Works
              </a>
            </h5>
            <p className="mb-0">A clean and simple business site built to showcase services and make it easy for clients to get in touch with me.</p>
          </div>
        </li>
        <li className="mb-4 d-flex align-items-start">
          <img 
            src={Placeholder} 
            alt="Sweet Elegance Cakes by Tracie" 
            className="me-3 rounded" 
            width="100" 
          />
          <div>
            <h5>
              <a href="https://sweetsbytracie.com/" target="_blank" rel="noopener noreferrer">
                Sweet Elegance Cakes by Tracie
              </a>
            </h5>
            <p className="mb-0">Website designed for a local baker who makes all of her cakes herself, giving customers an easy way to view her work and get in touch.</p>
          </div>
        </li>
        <li className="mb-4 d-flex align-items-start">
          <img 
            src={Placeholder} 
            alt="JC Auto Repair" 
            className="me-3 rounded" 
            width="100" 
          />
          <div>
            <h5>
              <a href="https://jcautorepairstl.com/" target="_blank" rel="noopener noreferrer">
                JC Auto Repair
              </a>
            </h5>
            <p className="mb-0">Website for a small business auto body shop with a section to showcase cars for sale. It includes a private system to manage customers, vehicles, and invoices, with the ability to track balances owed. The system also generates ready-to-print invoices for customers.</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
