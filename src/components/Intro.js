import React, { Component } from 'react';

class Intro extends Component {
    render () {
        return ( 
            <section className="intro">
                <div className="intro-text">
                    <p><span>Hey there!</span></p>

                    <h2>I'm Inessa</h2>
                    
                    <p className="intro-text-paragraph">
                        I'm a Product Designer based in Porto Alegre, Brazil. I'm currently working for the United Nations Development Programme (UNDP). I believe that transparency, collaboration and diversity are the keys to build an awesome product. 
                    </p>

                    <p className="intro-text-paragraph">
                        I have a Bachelor Degree in Computer Science, but I also took many classes of Graphic Design and Fine Arts in the University. I started my professional career as a Motion Designer followed by a Front-end Developer and now I'm an Experience Designer, working with digital products.
                    </p>

                    <p className="intro-text-paragraph">
                        When I'm not designing, I like to ride my bike and explore new places. I'm fueled by music and art, always willing to discover new artists.
                    </p>
                </div>

                <img src="inessa.jpg" alt="Inessa smiling, wearing a green scarf and a black coat"></img>
            </section>
        )
    }
}

export default Intro;