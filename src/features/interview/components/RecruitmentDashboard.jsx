import React from "react";

const candidateData = [
  {
    image: "https://i.pravatar.cc/60?img=1",
    name: "Alex Rivera",
    role: "Frontend Engineer",
    status: "passed",
    label: "PASSED",
    score: 92,
    color: "green",
    date: "Oct 12, 2025",
  },
  {
    image: "https://i.pravatar.cc/60?img=2",
    name: "Jordan Smith",
    role: "Product Designer",
    status: "review",
    label: "NOT ATTEMPTED",
    score: 0,
    date: "Oct 14, 2025",
  },
  {
    image: "https://i.pravatar.cc/60?img=3",
    name: "Mila Kunis",
    role: "Backend Dev",
    status: "failed",
    label: "FAILED",
    score: 45,
    color: "orange",
    date: "Oct 10, 2025",
  },
  {
    image: "https://i.pravatar.cc/60?img=4",
    name: "Sam Wilson",
    role: "UI Engineer",
    status: "passed",
    label: "PASSED",
    score: 88,
    color: "green",
    date: "Oct 15, 2025",
  },
  {
    image: "https://i.pravatar.cc/60?img=5",
    name: "Chris Evans",
    role: "DevOps",
    status: "passed",
    label: "PASSED",
    score: 95,
    color: "green",
    date: "Oct 16, 2025",
  },
];
const RecruitmentDashboard = () => {
  return (
    <main className="recruitment-dashboard">
      <section className="dashboard-header">
        <div>
          <h1>Recruitment Dashboard</h1>
          <p>Monitor candidate progress and assessment outcomes.</p>
        </div>

        <div className="header-actions">
          <button className="create-btn">+ CREATE OPENING</button>

          <button className="export-btn">EXPORT REPORT</button>
        </div>
      </section>

      <section className="stats-grid">
        <div className="opening-card">
          <div className="icon">⚡</div>

          <h2>Create New Openings</h2>

          <p>Draft and publish new roles to your recruitment feed instantly.</p>
        </div>

        <div className="stat-card">
          <h4>PASSED ASSESSMENT</h4>

          <div className="stat-content">
            <h2>3</h2>

            <span className="green">↑ 12%</span>
          </div>
        </div>

        <div className="stat-card">
          <h4>FAILED CANDIDATES</h4>

          <div className="stat-content">
            <h2>1</h2>

            <span>Stable</span>
          </div>
        </div>

        <div className="stat-card">
          <h4>NOT ATTEMPTED</h4>

          <div className="stat-content">
            <h2>1</h2>

            <span className="orange">Review</span>
          </div>
        </div>
      </section>

      <section className="activity-card">
        <div className="activity-header">
          <h2>Recent Candidate Activity</h2>

          <input type="text" placeholder="Search candidates..." />
        </div>

        <div className="activity-table">
          <div className="activity-head">
            <span>Candidate</span>
            <span>Target Role</span>
            <span>Status</span>
            <span>Score</span>
            <span>Activity Date</span>
          </div>

          {candidateData.map((item) => (
            <div key={item.name} className="activity-row">
              <div className="candidate">
                <img src={item.image} alt={item.name} />

                <h4>{item.name}</h4>
              </div>

              <p>{item.role}</p>

              <div>
                <span className={`badge ${item.status}`}>{item.label}</span>
              </div>

              <div className="score">
                {item.score ? (
                  <>
                    <div className="progress">
                      <div
                        className={`fill ${item.color}`}
                        style={{
                          width: `${item.score}%`,
                        }}
                      />
                    </div>

                    <span>{item.score}%</span>
                  </>
                ) : (
                  <span>—</span>
                )}
              </div>

              <p>{item.date}</p>
            </div>
          ))}

          <button className="view-applicants">VIEW ALL APPLICANTS</button>
        </div>
      </section>
    </main>
  );
};

export default RecruitmentDashboard;
