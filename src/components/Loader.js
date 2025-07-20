export default function Loader({ className = '' }) {
  return (
    <div className={`loader ${className}`}>
      <span className="shadow"></span>
      <span className="shadow"></span>
      <span className="shadow"></span>
      <span className="dot"></span>
    </div>
  );
}
