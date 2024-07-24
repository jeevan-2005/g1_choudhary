import './_skills.scss';
import AllSkills from './skillsComponents/AllSkills/AllSkills';
import GithubStats from './skillsComponents/GithubStats/GithubStats';

const Skills = () => {
  return (
    <div className='skillsPage'>
      <AllSkills/>
      <GithubStats/>
    </div>
  )
}

export default Skills
