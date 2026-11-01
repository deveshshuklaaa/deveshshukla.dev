import { skillCategories } from '../data/skills'
import { personalInfo } from '../data/personal'

const titles = ['Languages', 'Backend & web', 'Machine learning & vision', 'Embedded control', 'Data & infrastructure', 'Foundations']
export default function Skills() {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="shell section-inner">
        <p className="eyebrow">03 / Toolkit</p><h2 id="skills-title">Tools follow the problem.</h2>
        <dl className="skills-ledger">{skillCategories.map((category, index) => <div key={category.category}><dt>{titles[index]}</dt><dd>{category.skills.map(skill => skill.name).join(', ')}</dd></div>)}</dl>
        <a className="text-link accent small" href={personalInfo.leetcode} target="_blank" rel="noreferrer">Practice, consistently. <span aria-hidden="true">/</span> Explore my LeetCode profile <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}
