import { GraduationCap } from 'lucide-react';

export default function Logo() {
  return (
    <div className="brand">
      <div className="brand__icon">
        <GraduationCap size={22} />
      </div>
      <div>
        <div className="brand__title">EduK8 Happy Home</div>
        <div className="brand__subtitle">KS1 & KS2 Parent Dashboard</div>
      </div>
    </div>
  );
}
