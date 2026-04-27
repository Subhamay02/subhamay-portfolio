const SocialIconLink = ({ href, label, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-textMuted hover:text-primary hover:border-primary/50 transition-colors"
    >
      {children}
    </a>
  );
};

export default SocialIconLink;
