export default function StaticButton({ variant = "outline-ink", className = "", children, ...rest }) {
  return (
    <span data-static="true" className={`btn btn-${variant} static-item ${className}`} {...rest}>
      {children}
    </span>
  );
}