import { branches } from '../../data/branches';
import { BranchCard } from './BranchCard';
export const Branches = () => (<section className="branches-container" id="branches"><div className="section-title"><h2>Showroom Locations</h2></div><div className="branches-grid">{branches.map((branch) => <BranchCard key={branch.name} branch={branch} />)}</div></section>);
