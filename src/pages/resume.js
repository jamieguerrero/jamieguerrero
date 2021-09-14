import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import {
  Body,
  H2,
  H3,
  Italic,
  LI,
  Marquee,
  MarqueeHolder,
  Strong,
  StrongItalic,
  UL,
} from "../styles/index.styled";

import {
  Role,
  BookJane,
  Freelancing,
  CanadianTire,
  PianoTeacher,
  CompanyAndTechnology,
  JobDescriptions,
  EducationSection,
  InterestsSection,
  BuzzwordsSection,
  Interests,
  Buzzwords,
} from "../styles/resume.styled";

function ResumePage() {
  return (
    <PageWrapper>
      <p>Jamie Guerrero</p>
      <p>jamie.n.guerrero@gmail.com</p>
      <p>647-628-8626</p>
      <Body>
        I'm a driven self starter who works well with others. My main strengths
        include quick learning, problem solving and communication. I believe in
        leaving things better than you found them.
      </Body>

      <BookJane>
        <CompanyAndTechnology>
          <H2>BookJane - Toronto, ON</H2>
          <Italic>October 2019 – Present</Italic>
          <H3>Technologies:</H3>
          <UL>
            <LI>React, Redux, Javascript, Typescript, Styled Components</LI>
            <LI>Git, Node, npm, Webpack, CircleCI, AWS</LI>
            <LI>Storybook, Chromatic</LI>
            <LI>Jest, Cypress</LI>
            <LI>Jira, Confluence</LI>
          </UL>
          <MarqueeHolder>
            <Marquee>
              (Transferrable/Equivalent to: Angular, Vue, Git Actions, Jenkins,
              Google Cloud, Azure)
            </Marquee>
          </MarqueeHolder>
        </CompanyAndTechnology>
        <JobDescriptions>
          <Role>
            <H3>Web Team Lead</H3>
            <Italic>October 2020 – Present</Italic>
          </Role>
          <LI>
            Grew web team from one person to now managing and leading 3 in-house
            Developers, 2 Contractors and 1 Co-op student; oversaw new hire
            training and development.
          </LI>
          <LI>
            Facilitating the complete rebuild and transition from a prototype
            application to production ready Typescript React application.
          </LI>
          <LI>
            Producing *another design library* of high quality *Typescript*
            components to ensure reusability and consistent code.
          </LI>
          <LI>
            Working cross-team to create stories and tasks on Jira necessary for
            managing resources, planning smooth sprints, and executing timely
            delivery.
          </LI>
          <LI>
            Organizing daily touchpoints with web team to stay synced and
            identify and resolve blockers.
          </LI>
          <LI>
            Running biweekly discovery meetings with Project Manager, Product,
            API, and QA team to proactively understand upcoming features on
            Product Roadmap.
          </LI>
          <LI>
            Volunteering for Social Committee to organize creative virtual
            events, eg. coding a Halloween-themed BookJane Bingo game.
          </LI>
          <Role>
            <H3>Software Engineer</H3>
            <Italic>October 2019 – October 2020</Italic>
          </Role>
          <LI>
            Delivered several features on a tight 2 week deadline to secure key
            Clients who were instrumental to the Company's success.
          </LI>
          <LI>
            Set up CICD (Continuous Integration/Delivery) using CircleCI for
            fast, testable, organized builds and deployments.
          </LI>
          <LI>
            Set up design library (Storybook) to standardize components and
            develop a more cohesive visual language that translated into better
            UI and UX for our older User base.
          </LI>
          <LI>
            Increased Mozilla Observatory score from F to A+ by following
            standard web security practices.
          </LI>
        </JobDescriptions>
      </BookJane>
      <Freelancing>
        <CompanyAndTechnology>
          <H2>Freelancing — Toronto, ON</H2>
          <H3>Technologies:</H3>
          <UL>
            <LI>React, Gatsby, Javascript, Styled Components</LI>
            <LI>Shopify, Koken, Grav, Ghost</LI>
            <LI>Git, npm</LI>
            <LI>Sketch, Illustrator, Photoshop, After Effects</LI>
          </UL>
        </CompanyAndTechnology>
        <JobDescriptions>
          <Role>
            <H3>Designer/Developer</H3>
            <Italic>January 2016 - October 2019</Italic>
          </Role>
          <UL>
            <LI>
              Managed the creation of marketing materials from concept to
              completion to establish strong memorable branding for newcomer
              clients.
            </LI>
            <LI>
              Successfully guided clients through myriad of design stages
              including wireframing, low/high fidelity mockups, prototypes and
              user testing of websites to establish an online presence.
            </LI>
            <LI>
              Managed all financial and client acquisition aspects of
              freelancing and doubled client base in 2018 through word-of-mouth.
            </LI>
          </UL>
        </JobDescriptions>
      </Freelancing>
      <CanadianTire>
        <CompanyAndTechnology>
          <H2>Canadian Tire — Toronto, ON</H2>
          <H3>Technologies:</H3>
          <UL>
            <LI>React, AngularJS, Javascript, Styled Components, </LI>
            <LI>Python, Flask, Datastage, Messageway, Message Broker</LI>
            <LI>Git, npm, Jenkins, bash shell </LI>
          </UL>
        </CompanyAndTechnology>
        <JobDescriptions>
          <Role>
            <H3>Full Stack Developer</H3>
            <Italic>September 2017 - October 2019</Italic>
          </Role>
          <UL>
            <LI>
              Designed and developed React app front end and Nodejs/Python API’s
              necessary for Big Data projects and metadata management.
            </LI>
            <LI>
              Managed close relationship with app stakeholders to gather
              requirements and break epics down into stories/tasks.
            </LI>
            <LI>
              Built and maintained CICD pipelines to help automate deployments
              of newly committed features and rollback of errors.
            </LI>
            <LI>
              Tested and demoed application with peers, delivery managers, and
              executives to gather valuable user feedback and iteratively
              improve application functionality.
            </LI>
            <LI>
              Acted as a catalyst for adopting language agnostic
              microservice/API strategy and ‘engineer first’ culture across
              team.
            </LI>
          </UL>
          <Role>
            <H3>Front End Developer</H3>
            <Italic>March 2017 - September 2017</Italic>
          </Role>
          <UL>
            <LI>
              Used exceptional time management and autodidactic specialities to
              learn AngularJS over the course of 3 days and to successfully hit
              critical Agile sprint deadlines.
            </LI>
            <LI>
              Showed initiative by taking HackerYou UX Design course to gain
              skills and add value to developer role in projects.
            </LI>
            <LI>
              Went above and beyond role expectations by taking on additional
              development support responsibilities after team reduced to half.
            </LI>
          </UL>
          <Role>
            <H3>Integration Specialist</H3>
            <Italic>June 2016 - March 2017</Italic>
          </Role>
          <UL>
            <LI>
              Developed performant and scalable integration solutions using
              Canadian Tire best practices such as Datastage 8.1/9.1,
              Messageway, Message Broker, and korn shell scripting to facilitate
              communication between external vendor data and Canadian Tire
              environment using secure channels.
            </LI>
            <LI>
              Contributed to team knowledge management by building and expanding
              accessibility to base of existing information on Sharepoint
              leading to richer documentation and efficiency of development.
            </LI>
            <LI>
              Expored new integration design patterns such as ingesting vendor
              JSON data feeds and to Hadoop Distributed File System.
            </LI>
          </UL>
          <Role>
            <H3>Systems Analyst</H3>
            <Italic>July 2015 - June 2016</Italic>
          </Role>
          <UL>
            <LI>
              Streamlined and improved processes by independently configuring a
              portable wiki application to effectively display the Retail
              Systems Service Desk’s resources and known issues/priority calls.
              Previously knowledge was passed by word of mouth only.
            </LI>
            <LI>
              Resolved a wide array of store systems issues and routinely
              brought up downed stores using effective communication, teamwork,
              time management and problem solving skills saving millions of
              dollars in lost sales.
            </LI>
            <LI>
              Often given glowing reviews from stores while working in a team of
              30 analysts to support over 490 Canadian Tire stores Canada-wide.
            </LI>
          </UL>
          <Role>
            <H3>Enterprise Architecture Co-op</H3>
            <Italic>September 2013 - April 2014</Italic>
          </Role>
          <UL>
            <LI>
              Acted as scrum master and facilitated scrum sessions for various
              projects.
            </LI>
            <LI>
              Evaluated software for use in Canadian Tire enterprise environment
              - several of which are now being used to facilitate Agile
              practices.
            </LI>
            <LI>
              Created documentation for Java application which is currently
              being used Canada wide at over 490 Canadian Tire stores to
              estimate truck locations and arrival times.
            </LI>
            <LI>
              Created application support documentation and assisted in creating
              infrastructure topology diagram to highlight inefficiencies in
              integration architecture. This effort helped cut down on technical
              debt and saved thousands of dollars in maintaining Italicd
              integrations.
            </LI>
          </UL>
        </JobDescriptions>
      </CanadianTire>
      <PianoTeacher>
        <Role>
          <H3>Private Music Teacher — Toronto, ON</H3>
          <Italic>2011 - 2019</Italic>
        </Role>
        <UL>
          <LI>
            Customized lesson plans to fit learning style of students aged 4+.
            Gave students strong classical background from Royal Conservatory of
            Music and Alfred books to be able to learn pop music by ear.
          </LI>
          <LI>
            Managed all entrepreneurial and logistical aspects of teaching piano
            across Toronto and at peak operation had tripled students in one
            year by word-of-mouth!
          </LI>
        </UL>
      </PianoTeacher>

      <BuzzwordsSection>
        <H2>All The Tech Buzzwords</H2>
        <Buzzwords>
          <UL>
            <LI>HTML</LI>
            <LI>CSS</LI>
            <LI>Javascript</LI>
            <LI>Typescript</LI>
          </UL>
          <UL>
            <LI>React</LI>
            <LI>Redux</LI>
            <LI>Node</LI>
            <LI>Webpack</LI>
            <LI>Gatsby</LI>
            <LI>Lottie.js</LI>
          </UL>
          <UL>
            <LI>NPM</LI>
            <LI>Git</LI>
            <LI>CircleCI</LI>
            <LI>Jenkins</LI>
            <LI>AWS</LI>
            <LI>Google Cloud</LI>
            <LI>Docker</LI>
          </UL>
          <UL>
            <LI>Python</LI>
            <LI>Flask</LI>
          </UL>
          <UL>
            <LI>MySQL</LI>
            <LI>MongoDB</LI>
          </UL>
          <UL>
            <LI>Visual Studio</LI>
            <LI>Sketch</LI>
            <LI>Illustrator</LI>
            <LI>Photoshop</LI>
            <LI>After Effects</LI>
            <LI>Premiere Pro</LI>
          </UL>
        </Buzzwords>
      </BuzzwordsSection>

      <EducationSection>
        <H2>Education</H2>
        <Role>
          <H3>University of Toronto</H3>
          <Italic>2015</Italic>
        </Role>
        <Italic>
          Bachelor of Business Administration, Management & Information
          Technology
        </Italic>
        <Strong>Relevant Courses:</Strong>
        <p>
          Discrete Mathematics, Software Design, Software Tools and Systems
          Software, Databases and Web Applications, Theory of Computation,
          Software Engineering, Linear Algebra
        </p>
        <Strong>University Initiatives:</Strong>
        <StrongItalic>
          LIVE Competition IT Solutions Manager - 2013
        </StrongItalic>
        <Italic>
          First year to successfully execute competition using online web portal
        </Italic>
        <i>MVP Mentor - 2012</i>
        <Italic>2012 Mentor of the Year</Italic>
      </EducationSection>
      <InterestsSection>
        <H2>Interests/Hobbies</H2>
        <Interests>
          <UL>
            <LI>UX/UI Design</LI>
            <LI>Branding </LI>
            <LI>Augmented/Virtual Reality</LI>
            <LI>Static Site Generators</LI>
          </UL>
          <UL>
            <LI>Illustration</LI>
            <LI>Animation</LI>
          </UL>
          <UL>
            <LI>Piano</LI>
            <LI>Guitar</LI>
            <LI>Music Production</LI>
            <LI>DJing</LI>
          </UL>
          <UL>
            <LI>Muay Thai</LI>
            <LI>Hiking/Camping</LI>
            <LI>Longboarding</LI>
            <LI>Bouldering</LI>
          </UL>
          <UL>
            <LI>Knitting</LI>
            <LI>Reading</LI>
          </UL>
        </Interests>
      </InterestsSection>
    </PageWrapper>
  );
}

export default ResumePage;
