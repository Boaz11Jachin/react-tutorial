export default function OnePieceMember({ emoji, role, desc, name }) {
  return (
    <div className="crew-card">
      <div className="img-placeholder">{emoji}</div>
      <div className="info">
        <h2>
          {name} {role === "선장" && <small>리더</small>}
        </h2>
        <p>
          <strong>{role}</strong> – {desc}
        </p>
      </div>
    </div>
  );
}
