import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate('/app/dashboard');
  }

  return (
    <div className="auth-page">
      <form className="card auth-card" onSubmit={handleSubmit}>
        <h1>Welcome back</h1>
        <p className="muted">Sign in to manage home learning for your children.</p>

        <label>
          <span>Email</span>
          <input type="email" placeholder="you@example.com" required />
        </label>
        <label>
          <span>Password</span>
          <input type="password" placeholder="••••••••" required />
        </label>

        <button className="button button--primary" type="submit">Sign in</button>
        <p className="muted small">No account yet? <Link to="/signup">Create one</Link></p>
      </form>
    </div>
  );
}
