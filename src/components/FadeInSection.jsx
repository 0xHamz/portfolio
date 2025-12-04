export default function FadeInSection({ children }) {
  return (
    <div className="fade-item opacity-0 translate-y-10 transition-all duration-1000">
      {children}
    </div>
  );
}
