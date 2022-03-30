import React from "react";
import {css, jsx} from "@emotion/core";
import omar from './pictures/team-members/omar.png'
import khalil_jbara from './pictures/team-members/khalil_jbara.png'
import khalil_salah from './pictures/team-members/khalil_salah.png'
import malek from './pictures/team-members/malek.png'
import nourhene from './pictures/team-members/nourhene.png'
import salma from './pictures/team-members/salma.png'
import sana from './pictures/team-members/sana.png'

import TeamMember from "./TeamMember";


/** @jsx jsx */
const Team = () => {
    const poste = css`
      & h5{
    color: #7cac3f!important;
    }
      `;
    return (
        <div className="team">
            <div className="team-header">
                <h3 className="text-center">Our Team</h3>
            </div>
            <div className="container" css={poste}>
                <div className="row justify-content-center text-center  ">
                    <TeamMember memberName={'Sana Jbeli'} memberPic={sana} memberPoste={'Chairwoman'} animation={"flip-left"}
                                fb={'https://www.facebook.com/sana.jebali.73'}
                                li={'https://www.linkedin.com/in/omar-maaref-9814a21b3/'}
                                text={'sana is an industrial chemistry engineering student with a great passion for management studies.\n' +
                                'The word she\'d use to describe herself is \'\' ambitious\'\' l. She likes to seek out opportunities and challenges cause she\'s never comfortable with settling.'}/>
                    <TeamMember memberName={'Khalil Ben Jebara'} memberPic={khalil_jbara} memberPoste={'Vice-chairman'} animation={"flip-left"}
                                fb={'https://www.facebook.com/khalil.benjebara.90'}
                                li={'https://www.linkedin.com/in/omar-maaref-9814a21b3/'}
                                text={'khalil is an industrial chemistry engineering student. He is very resourceful and ambitious. He finds solutions, gets creative and solves problems.\n' +
                                'He likes networking and he is always ready to help others and encourage them to reach their targets.'}/>
                    <TeamMember memberName={'Nourhen Rjab'} memberPic={nourhene} memberPoste={'General Secretary'} animation={"flip-left"}
                                fb={'https://www.facebook.com/nourhen.rjab123'}
                                li={'https://www.linkedin.com/in/omar-maaref-9814a21b3/'}
                                text={
                                
                                'She is a diplomatic person who seeks to become the greatest general secretary.\n' +
                                'She always keeps goals in mind and stays determined to reach them.'}/>

                </div>

            </div>
            <div className="container">
                <div className="row justify-content-center text-center ">
                    <TeamMember memberName={'Khalil Ben Salah'} memberPic={khalil_salah} memberPoste={'HR Manager'} animation={"flip-right"}
                                fb={'https://www.facebook.com/khalil.bensalah'}
                                li={'https://www.linkedin.com/in/omar-maaref-9814a21b3/'}
                                text={'khalil is an industrial chemistry engineering student.\n' +
                                'he is a dedicated and tenacious person.\n' +
                                'he likes to make people feel comfortable in his presence, he always makes sure people have the right informations and she is certainly a people-person.'}/>
                    <TeamMember memberName={'Salma Raboudi'} memberPic={salma} memberPoste={'Treasurer'} animation={"flip-right"}
                                fb={'https://www.facebook.com/saal.maa.798'}
                                li={'https://www.linkedin.com/in/omar-maaref-9814a21b3/'}
                                text={'salma is an industrial biology engineering student.\n' +
                                'She is passionate about challenges and she is a resourceful person.\n' +
                                'She is a great negociator who knows how to handle money and finances and she likes to collaborate with others.'}/>
                    <TeamMember memberName={'Malek Ben Hmida '} memberPic={malek} memberPoste={'Training Manager'} animation={"flip-right"}
                                fb={'https://www.facebook.com/malek.benhmida.9216'}
                                li={'https://www.linkedin.com/in/omar-maaref-9814a21b3/'}
                                text={'malek is an industrial chemistry engineering student.\n' +
                                'She is passionate about artificial intelligence and analytical softwares.\n' +
                                'She is an ambitious and enthusiastic person. She loves taking risks cause it always push her to the limits and challenge her.\n' }/>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center text-center ">

                    <TeamMember memberName={'Omar maaref'} memberPic={omar} memberPoste={'WebMaster'} animation={"flip-left"}
                                fb={'https://www.facebook.com/HardcoreGamer14/'}
                                li={'https://www.linkedin.com/in/omar-maaref-9814a21b3/'}
                                text={'Omar is a talented and reliable software engineering student.\n' +
                                'He is passionate about his studies , he enjoys working as a part of a team and always comes out with new ideas.'}/>

                </div>

            </div>
        </div>
    )
};
export default Team;