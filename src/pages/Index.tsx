import { Link } from "react-router-dom";

export default function Index() {
  return (
    <main>
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          padding: "48px 16px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#2d6cdf",
            marginBottom: 8,
          }}
        >
          KS1 &amp; KS2 Parent Learning Dashboard
        </h1>
        <h2 style={{ fontSize: 22, fontWeight: 500, marginBottom: 16 }}>
          Support learning at home with one simple dashboard
        </h2>
        <p style={{ color: "#444", marginBottom: 32 }}>
          EduK8 Happy Home helps parents organise homework, reading, spelling,
          maths practice, and home learning routines for KS1 and KS2 children.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <Link to="/signup">
            <button
              style={{
                background: "#2d6cdf",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "12px 28px",
                fontWeight: 600,
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              Get started
            </button>
          </Link>
          <Link to="/app/dashboard">
            <button
              style={{
                background: "#fff",
                color: "#2d6cdf",
                border: "2px solid #2d6cdf",
                borderRadius: 8,
                padding: "12px 28px",
                fontWeight: 600,
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              View dashboard
            </button>
          </Link>
        </div>
        <section
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "1fr",
            marginTop: 32,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 8px #0001",
              padding: 24,
            }}
          >
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
              Track progress
            </h3>
            <p style={{ color: "#555" }}>
              View reading streaks, completion rates, and subject confidence in
              one clear place.
            </p>
          </div>
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 8px #0001",
              padding: 24,
            }}
          >
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
              Stay organised
            </h3>
            <p style={{ color: "#555" }}>
              Keep homework, spelling, maths, and routines structured and
              visible for the week.
            </p>
          </div>
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 8px #0001",
              padding: 24,
            }}
          >
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
              Support consistency
            </h3>
            <p style={{ color: "#555" }}>
              Build stronger habits at home with a calm, parent-friendly
              learning dashboard.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
