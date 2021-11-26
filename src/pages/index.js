import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <section>
        <div>
          <h1>
            16th International Workshop on Value Modelling and Business
            Ontologies
          </h1>
          <p className="subtitle">
            Co-located with the{" "}
            <a href="https://caise22.ugent.be/">
              34th International Conference on Advanced Information Systems
              Engineering (CAiSE 2022)
            </a>
            , Leuven, Belgium, 06-10 June, 2022.
          </p>
          <h2>Call for papers</h2>
          <h3>About</h3>
          <p>
            The importance of modeling the essence of enterprises on a level
            that abstracts from operational details is increasingly recognized.
            Two established enterprise modeling approaches are value modeling
            and business ontology. Business ontology provides abstract
            descriptions of enterprises in their business context, focusing on
            what is needed to create and transfer value. Value modeling is a
            business modeling approach that focuses on the value objects
            exchanged in business networks. Business ontology and value modeling
            research are conducted using instruments like UFO (Unified
            Foundational Ontology), REA (Resources, Events, Agents), the
            Business Model Canvas, the e3value toolset, VDML (Value Delivery
            Modeling Language), and the Enterprise Engineering framework
          </p>
          <p>The goal of the VMBO workshop series is two-fold:</p>
          <ul>
            <li>
              to bring together researchers with an interest in value modeling
              and business ontology to present and discuss the current state of
              enterprise or business modeling
            </li>
            <li>to identify key areas for further research</li>
          </ul>
          <h3>Topics</h3>
          <p>Topics of interest include, but are not limited to:</p>
          <ul>
            <li>Service ontology for business</li>
            <li>Service-oriented view of business ontology</li>
            <li>Enterprise Engineering</li>
            <li>Business modeling of service exchanges</li>
            <li>Value modeling fundamentals</li>
            <li>Value modeling applications and experiences</li>
            <li>Business ontology fundamentals</li>
            <li>Business ontology applications and experiences</li>
            <li>Role of value modeling in enterprise architecture</li>
            <li>Ontology-driven enterprise system development</li>
            <li>Ontology-aware enterprise systems</li>
            <li>Pragmatic Web – theory and applications</li>
            <li>Ontological representations of aggregated data</li>
            <li>Business ontology / value models for auditing</li>
            <li>
              Business ontology / value models for managerial decision making
            </li>
            <li>Business ontology / value models for strategy exploration</li>
            <li>
              Business ontology / value models for business process management
            </li>
          </ul>
          <h3>Important dates</h3>
          <ul>
            <li>Paper submission: 8 March 2022</li>
            <li>Author notification: 8 April 2022</li>
            <li>Camera-ready: 18 April 2022</li>
            <li>Workshop: 6-7 June 2022</li>
          </ul>
          <h3>Instructions for submissions</h3>
          <p>
            Submissions should describe original research ideas or
            contributions, present problems or challenges encountered in
            practice, or report on industrial cases and practices.
          </p>
          <p>
            We encourage authors to submit papers for which they would like
            feedback from other participants of the workshop.
          </p>
          <p>Submissions must:</p>
          <ul>
            <li>Respect the 8-page limit (excluding references)</li>
            <li>Be submitted in the PDF format</li>
            <li>
              Follow the proceedings style of{" "}
              <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">
                Springer’s Lecture Notes in Computer Science (LNCS)
              </a>
              .
            </li>
          </ul>
          <p>
            Submission your paper via{" "}
            <a href="https://easychair.org/conferences/?conf=caise22">
              https://easychair.org/conferences/?conf=caise22
            </a>{" "}
            by selecting the track "Value Modeling and Business Ontologies".
          </p>

          <p>
            Accepted papers will be published with CEUR-WS.org online
            proceedings (if desired by the authors).
          </p>

          <p>
            We support the submission of VMBO papers afterward to a special
            issue of a journal, e.g., Journal of Applied Ontology (JAO) or
            Journal of Emerging Technologies in Accounting (JETA), if possible.
          </p>

          <p>
            Note that submitted papers will be reviewed only marginally. The
            program committee will use the papers to put together a final
            program; the aim is to accommodate all relevant papers with
            sufficient quality.
          </p>
        </div>
      </section>
    </Layout>
  )
}
