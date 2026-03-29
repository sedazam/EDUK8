import { ArrowRight, BookOpen, ChartColumnBig, House, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarketingNav from '../components/MarketingNav';

export default function HomePage() {
  return (
    <div className="marketing-page">
      <MarketingNav />

      <section className="hero container">
        <div className="hero__content">
          <span className="pill">Built for KS1 & KS2 families</span>
          <h1>Support learning at home with one simple parent dashboard</h1>
          <p>
            EduK8 Happy Home helps parents manage homework, reading, spelling,
            maths practice, and weekly progress with a clean, family-friendly workflow.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" to="/signup">
              Start free demo <ArrowRight size={16} />
            </Link>
            <Link className="button button--secondary" to="/app/dashboard">
              View app preview
            </Link>
          </div>
        </div>

        <div className="hero-card card">
          <h3>This week at a glance</h3>
          <div className="hero-card__stats">
            <div>
              <strong>72%</strong>
              <span>Completion</span>
            </div>
            <div>
              <strong>4 days</strong>
              <span>Reading streak</span>
            </div>
            <div>
              <strong>135</strong>
              <span>Reward points</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container section" id="features">
        <div className="section-heading section-heading--centered">
          <div>
            <h2>Why parents would use this</h2>
            <p>Clear structure, less stress, and better home learning routines.</p>
          </div>
        </div>
        <div className="feature-grid">
          <div className="card feature-card"><House size={20} /><h3>Home-first dashboard</h3><p>Keep tasks, subjects, and routines visible in one place.</p></div>
          <div className="card feature-card"><BookOpen size={20} /><h3>Subject tracking</h3><p>Monitor reading, maths, spelling, writing, science, and homework.</p></div>
          <div className="card feature-card"><ChartColumnBig size={20} /><h3>Progress insights</h3><p>See completion, streaks, and weekly consistency at a glance.</p></div>
          <div className="card feature-card"><Sparkles size={20} /><h3>Motivation tools</h3><p>Use simple reward points and positive habits to keep children engaged.</p></div>
        </div>
      </section>

      <section className="container section" id="how-it-works">
        <div className="section-heading section-heading--centered">
          <div>
            <h2>How it works</h2>
            <p>A simple parent flow that feels realistic and portfolio-ready.</p>
          </div>
        </div>
        <div className="steps-grid">
          <div className="card"><span className="step-number">01</span><h3>Add your child</h3><p>Create KS1 or KS2 child profiles with year group and focus subjects.</p></div>
          <div className="card"><span className="step-number">02</span><h3>Assign learning tasks</h3><p>Add reading, maths, spelling, and homework tasks with due dates.</p></div>
          <div className="card"><span className="step-number">03</span><h3>Track progress</h3><p>Use dashboard summaries and charts to keep routines consistent.</p></div>
        </div>
      </section>
    </div>
  );
}
