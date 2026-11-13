export default function StaticItem({ as: Tag = "span", className = "", children, ...rest }) {
  return (
    <Tag data-static="true" className={`static-item ${className}`} {...rest}>
      {children}
    </Tag>
  );
}