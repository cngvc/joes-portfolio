const Lists = ({ data, label }: { label: string; data?: string[] }) => {
  return (
    data && (
      <ul className="list-disc mb-4 list-inside t5 text-white/60 lg:group-hover:text-white duration-200">
        <div className="text-white/60 lg:group-hover:text-white duration-200">
          {label}:
        </div>
        {data?.map((e, index) => (
          <li key={index}>
            <span className="text-white/60 lg:group-hover:text-white duration-200">
              {e}
            </span>
          </li>
        ))}
      </ul>
    )
  );
};

export default Lists;
