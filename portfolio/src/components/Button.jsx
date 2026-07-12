import './Button.css';

function ButtonPrimary({ className = "", children, onClick, ...props }) {
  return (
    <button className={`btn btn-primary ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

function ButtonSecondary({ className = "", children, onClick, ...props }) {
  return (
    <button className={`btn btn-secondary ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export { ButtonPrimary, ButtonSecondary };