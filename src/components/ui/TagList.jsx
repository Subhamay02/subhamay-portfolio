const TagList = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs font-semibold px-3 py-1 bg-[#111827] border border-white/5 text-primary rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
