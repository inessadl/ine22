import React, { Component } from 'react';

class Work extends Component {
    render () {
        return (
            <section className="work">
                <h2>A lit bit of my work</h2>
                <p><span>NOTE:</span> All the clients’ names, images and project details must remain private due to a non-disclosure agreement.</p>

                <div className="project">
                    <h3>United Nations Development Programme</h3>
                    <p>
                        An initiative of the National Council of Justice (CNJ) and the United Nations Development Programme (UNDP), The "Fazendo Justiça" program aims to overcome the historical challenges that characterize deprivation of liberty in Brazil.
                    </p>

                    <p>
                        As the only Designer of the project, I helped the manager with product metrics and design/product strategy. I was responsible for all visual production, including branding, prototyping and presentations.
                    </p>

                    <p>
                        I started the Design System, in which I created the component library on Figma, defined the theme and I'm currently customizing the frontend project according to the DS definitions. 
                    </p>

                </div>

                <div className="project">
                    <h3>U.S. Top 10 Fitness Companies</h3>
                    <p>
                        United States franchisor and operator of fitness centers with more than 2000 franchisees and over 14.4 million users.
                    </p>
                    <p>
                        I worked in a team with two other designers, in which we were responsible for ideation, prototyping, and strategy of some of our client's main digital products. Those include the join flow, which was the main channel for customers acquisition. We worked intentionally on collecting metrics and purposing enhancements, an initiative that led to a 1,15% increase in the total conversion.
                    </p>

                    <p>
                        I implemented a dashboard to see how the product was impacted by technical metrics as loading, interactivity, and visual stability. This dashboard was also used to monitoring A/B experiments that I helped to define and implement.
                    </p>

                    <p>
                        Along with a fellow developer, we led the definitions, architecture, and implementation of the company's design system. I also paired with other developers on the implementation of React components for the team's custom library.
                    </p>

                    <p>
                        I have also facilitated many design sessions with clients and users, and also advocate for usability and accessibility good practices, on a daily basis.
                    </p>
                </div>


                <div className="project">
                    <h3>Latin America Top 3 Airlines</h3>
                    <p>
                        Over the course of 2 years, I have worked for this client. I was part of a team that handles the main flights' search page, and the passenger information page. I have worked as a developer, focused on software quality working with TDD, clean code, continuous integration and delivery, pair programming, pull-requests, and code reviews as everyday practices.
                    </p>
                    <p>
                        I paired with the client's Experience Designer to conduct usability tests during our Design Sprint.
                    </p>

                    <p>
                        I led an accessibility initiative to turn the pages in our domain, WCAG (AA) complaint. I mapped all the necessary changes, as well as created an action plan, that was executed collaboratively between UX Designers and Developers.
                    </p>

                    <p>
                        I facilitate many sessions and made presentations about consultancy, and agile methodologies, for colleagues and clients.
                    </p>
                </div>

                <div className="project">
                    <h3>Brazil Top 3 Movie Streaming Companies</h3>
                    <p>I worked as a frontend developer and consultant working in the implementation of React component in a redesign initiative for a streaming platform.</p>
                </div>
            </section>
        )

    }
}

export default Work;