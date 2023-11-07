import React from 'react';
import Divider from "../components/Divider";
import portrait from '/pfp.jpeg';

const AboutMe = () => {
    return (
        <>
            <h1 className='text-center text-5xl font-bold py-6'>About Me</h1>
            <div className='px-24 mt-4 text-lg'>
                <div className="float-right ml-4 mr-20 my-4">
                    <img className='w-56 rounded-full' src={portrait} alt="Portrait of myself" />
                </div>
                <p className="mb-4">
                    Hi! I'm Quincy and I'm currently a junior at UC Berkeley studying Computer Science with hopes of being a software engineer in the future.
                </p>
                <p className='mb-4'>Prior to Berkeley, I was studying at <a href="https://www.chabotcollege.edu/">Chabot College</a>, and was an active member of MESA, a program that helped first-generation, low-income students succeed in transfering to a 4 year university. I believe that community college has been a fundamental part of making me who I am today; I love advocating for the success of transfers, and hope I can support you. </p>
                <p className="mb-4">
                    I love learning about new frameworks and technologies, working on projects, and finding inspiration online to use to create apps.
                </p>
                <p className="mb-4">
                    I am a member of the <a href="https://www.ocf.berkeley.edu/">Open Computing Facility</a>, a student organization dedicated to free computing for all UC Berkeley students, and am currently on the web dev team. I am also a member of <a href="https://www.instagram.com/barbellberkeley/">Barbell at Berkeley</a>, and have been weightlifting and powerlifting for 2 years.
                </p>
                <p className='mb-4'>
                    Asides from academics, I enjoy playing badminton, working out, hanging out with friends, playing video games, and enjoying the simple things in life.
                </p>
                <p className='mb-4'>
                    Reach out if you wanted anything! I'd be happy to hangout, workout, or study together.
                </p>
            </div>
            <div className="clear-both"></div>
        </>
    );
}

export default AboutMe;
