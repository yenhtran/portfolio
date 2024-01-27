import { FaJs, FaAngular, FaReact, FaHtml5, FaCss3, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiExpress } from "react-icons/si";

const Skills = () => {
  const skillsArr = [
    { 'name': 'Javascript', 'icon': FaJs },
    { 'name': 'Typescript', 'icon': SiTypescript },
    { 'name': 'Angular', 'icon': FaAngular },
    { 'name': 'React', 'icon': FaReact },
    { 'name': 'NodeJs', 'icon': FaNodeJs },
    { 'name': 'Express', 'icon': SiExpress },
    { 'name': 'HTML', 'icon': FaHtml5 },
    { 'name': 'CSS', 'icon': FaCss3 },
    { 'name': 'Git', 'icon': FaGithub }
  ]

  return (
    <div id='skills' className='skills'>
      <h2 className='title'>Skills</h2>
      <div className='skill-holder'>
        {
          skillsArr.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <i key={index} className='skill-cards'>
                <Icon className='skill-icon'/>
                <p className='skill'>{skill.name}</p>
              </i>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills;