import React, { Component } from 'react';

class Intro extends Component {
    render () {
        return ( 
            <section className="intro">
                <div className="intro-text">
                    <h2>Hi there! I'm Inessa</h2>
                    <p>
                        I’m a Product Designer based in Porto Alegre, Brazil. I'm currently working at Thoughtworks, in a very collaborative team. I believe that transparency, collaboration and diversity are the keys to build an awesome product. 
                    </p>

                    <p>
                        I have a Bachelor Degree in Computer Science, but I also took many classes of Graphic Design and Fine Arts in the University. I started my professional career as a Motion Designer followed by a Front-end Developer and now I'm an Experience Designer, working with digital products.
                    </p>

                    <p>
                        When I'm not designing, I like to ride my bike and explore new places. I'm fueled by music and art, always willing to discover new artists.
                    </p>
                </div>

                <img src="inessa.jpg" alt="Inessa smiling, using glasses and a striped shirt"></img>
            </section>
        )
    }
}

export default Intro;