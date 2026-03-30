import { Link, useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate('/app/dashboard');
  }

  return (
    <div className="auth-page">
      <form className="card auth-card" onSubmit={handleSubmit}>
        <h1>Create your account</h1>
        <p className="muted">Start managing KS1 and KS2 learning at home in one place.</p>

        <label>
          <span>Full name</span>
          <input type="text" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" placeholder="you@example.com" required />
        </label>
        <label>
          <span>Password</span>
          <input type="password" placeholder="••••••••" required />
        </label>

        <button className="button button--primary" type="submit">Create account</button>
        <p className="muted small">Already have an account? <Link to="/login">Sign in</Link></p>
      </form>
    </div>
  );
}
