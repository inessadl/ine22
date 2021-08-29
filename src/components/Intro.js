import React, { Component } from 'react';

class Intro extends Component {
    render () {
        return ( 
            <section className="intro">
                <img src="inessa.jpg" alt="Inessa smiling, using glasses and a striped shirt"></img>

                <div className="intro-text">
                    <h2>Hi there! I'm Inessa</h2>
                    <p>
                        I’m a Product Designer based in Porto Alegre, Brazil. I'm currently working at Thoughtworks, in a very collaborative team. I believe that transparency, collaboration and diversity are the keys to build an awesome product. When I'm not designing, I like to ride my bike and explore new places. I'm fueled by music and art, always willing to discover new artists.
                    </p>
                </div>
            </section>
        )
    }
}

export default Intro;