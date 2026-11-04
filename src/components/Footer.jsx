import { personalInfo } from '../data/personal'

export default function Footer() {
  return (
    <footer className="site-footer section"><div className="shell section-inner">
      <div className="footer-top"><a href="#top" className="wordmark">Devesh Shukla</a><nav aria-label="Social profiles">{[['GitHub', personalInfo.github], ['LinkedIn', personalInfo.linkedin], ['LeetCode', personalInfo.leetcode]].map(([label, href]) => <a key={label} className="text-link" href={href} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">↗</span></a>)}</nav></div>
      <div className="footer-bottom meta"><p>© {new Date().getFullYear()} Devesh Shukla <span aria-hidden="true">/</span> Built with React + Vite</p><a href="#top">Back to top <span aria-hidden="true">↑</span></a></div>
    </div></footer>
  )
}
