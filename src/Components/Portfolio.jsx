/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "Developer working on a project";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Hackathon Landing Page🎉",
    description:
      "Contribution to the official hackathon website of our college. Built various components on the front end using React JS and Tailwind CSS.",
    url: "https://hackoverflowrnsit.tech/",
  },
  {
    title: "Github User Search App🔍",
    description:
      "A Project that uses GitHub users API to pull profile data of github users and display it. ",
    url: "http://github-user-search-app-teal.vercel.app/",
  },
  {
    title: "A Quote Generator App💬",
    description:
      "Simple quote generator app built using a public quote gen API using Vanilla JS. A fully functional quote generator app with a sleek UI.",
    url: "https://quote-gen-app-subramanyarao11.vercel.app/",
  },
  {
    title: "Markdown Notes App📝",
    description:
      "A short note taking app which converts Markdown Syntax to HTML output and stores Notes in Browsers's Local Storage.",
    url: "https://markdwon-notes-app.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Recent Projects!</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "2s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
