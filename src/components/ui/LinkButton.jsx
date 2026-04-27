const variants = {
  primary: 'bg-primary hover:bg-primaryDark text-white shadow-lg shadow-primary/30',
  secondary: 'bg-surface border border-white/10 hover:bg-white/5 text-white',
  resumeDownload: 'bg-primary text-black hover:bg-primaryDark',
  resumeView: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10',
};

const LinkButton = ({ href, children, variant = 'primary', className = '', ...props }) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center text-center px-8 py-3 font-semibold rounded-lg transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default LinkButton;
