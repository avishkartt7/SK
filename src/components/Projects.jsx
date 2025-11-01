import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "SINGLE-SPAN STEEL BEAM BRIDGE DESIGN",
      company: "M GROUP LTD. (OXFORD HIGHWAYS)",
      image: "project1.jpg",
      overview: [
        "Proposed the analysis and design of a single-span bridge featuring four longitudinal non-composite steel beams, a reinforced concrete main slab, and two steel edge beams.",
        "A grillage analysis and Tekla Tedds calculations were developed as part of the Approval in Principle (AIP) submission to Oxford Highways, accompanied by detailed drawings."
      ],
      approach: [
        "Used Autodesk Structural Bridge Design to analyse the bridge deck for both SLS and ULS conditions",
        "Generated influence lines to determine maximum resultant forces for all design elements.",
        "Carried out design action calculations for LM1 and LM2 (SV80) load models.",
        "Performed bending and shear checks for the slab, main beams, and edge beams.",
        "Used Tekla Tedds to select and verify appropriate steel beam sections."
      ]
    },
    {
      id: 2,
      title: "ELASTIC AND PLASTIC ANALYSIS OF PITCHED ROOF FRAME",
      company: "HERIOT WATT UNIVERSITY (MSc)",
      image: "project2.jpg",
      overview: [
        "Coursework involved performing Elastic and Plastic Analysis of a pitched roof frame structure using both software tools and hand calculations.",
        "The objective was to achieve less than 10% difference in collapse load results between hand-calculated and Abaqus outputs for the plastic analysis."
      ],
      approach: [
        "Elastic analysis was carried out in STAAD Pro, using HEA 300 and IPE 450 sections for columns and beams respectively.",
        "Results for bending moments and utilisation ratios were obtained from the software.",
        "Hand calculations based on sway and gable mechanisms were used to determine the lowest load factors and bending moments.",
        "Abaqus was used for the plastic analysis to determine plastic bending moments and collapse multipliers.",
        "The difference between the hand-calculated and Abaqus collapse loads was 8.6%, meeting the target of less than 10%."
      ]
    },
    {
      id: 3,
      title: "CONCRETE REPAIR DESIGN FOR RC BRIDGE SUBSTRUCTURE",
      company: "M GROUP LTD. (OXFORD HIGHWAYS)",
      image: "project3.jpg",
      overview: [
        "Designed concrete repairs for the abutments and piers of a three-span reinforced concrete beam bridge.",
        "The maintenance scheme, prepared for Oxford Highways, addressed areas of low cover, exposed reinforcement, general deterioration, and incorporated concrete cathodic protection to mitigate corrosion.",
        "All work information was developed in accordance with the Manual of Contract Documents for Highway Works (MCHW) standards."
      ],
      approach: [
        "Conducted site inspections, concrete testing, and reviewed as-built drawings to assess the existing condition.",
        "Identified major concrete defects and proposed repair solutions, detailed through AutoCAD drawings.",
        "Prepared complete project documentation from preliminary to detailed design, including Repair Schedules, Specifications, BoQ, CDM Risk Assessments, Pre-Construction Information (PCI), Cost Estimate, and environmental assessments."
      ]
    },
    {
      id: 4,
      title: "METAL ADDITIVE MANUFACTURING (3D PRINTING) IN CONSTRUCTION",
      company: "HERIOT WATT UNIVERSITY (MSc DISSERTATION)",
      image: "project4.jpg",
      overview: [
        "Analysed the performance of Wire Arc Additive Manufactured (WAAM) square hollow sections (SHS) using Finite Element Method (FEM) software.",
        "The study explored how simulation can provide deeper insight into deformation and failure behaviour of 3D-printed structures under varying printing parameters.",
        "An experiment using Direct Energy Deposition (DED) technology examined how changes in orientation affect stress–strain response, material interaction, and mesh performance."
      ],
      approach: [
        "Converted reference study data using Plot Digitizer to extract stress–strain plots, then generated graphs for three print orientations.",
        "Developed Abaqus models of SHS specimens at orientations θ = 0°, 45°, and 90°, assigning material properties, mesh sizes, and elastic–plastic parameters.",
        "Performed simulations to obtain resultant reactions and displacements, comparing tensile behaviour across orientations.",
        "Results showed minor variation in tensile characteristics with the deposition techniques, confirming consistency in structural performance."
      ]
    },
    {
      id: 5,
      title: "STRUCTURAL HEALTH MONITORING OF A RAILWAY BRIDGE",
      company: "M GROUP LTD. (OXFORD HIGHWAYS)",
      image: "project5.jpg",
      overview: [
        "Monitored an immediate-risk railway bridge using angle, temperature, displacement, and bridge gap movement sensors.",
        "Bearing corrosion was identified as a key issue restricting load transfer to the substructure."
      ],
      approach: [
        "Prepared quarterly reports by reviewing extensive monitoring data to assess the bridge and bearing condition, ensuring continued serviceability.",
        "Implemented relevant maintenance measures, including design of temporary steel propping systems, bearing surveys, concrete repairs, and site inspections."
      ]
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;