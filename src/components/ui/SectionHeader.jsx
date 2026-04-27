const SectionHeader = ({ eyebrow, title, titleClassName = 'mb-12' }) => {
  return (
    <>
      <p className="text-primary text-sm font-bold tracking-widest uppercase mb-2">{eyebrow}</p>
      <h2 className={`text-4xl md:text-5xl font-extrabold text-white ${titleClassName}`}>
        {title}
      </h2>
    </>
  );
};

export default SectionHeader;
