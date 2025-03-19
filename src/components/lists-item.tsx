const Lists = ({ data, label }: { label: string; data?: string[] }) => {
  return (
    data && (
      <>
        <div className="item-desc">{label}:</div>
        <ul className="list-disc mb-4 list-outside pl-[18px] item-desc">
          {data?.map((e, index) => (
            <li key={index}>
              <span className="item-desc">{e}</span>
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default Lists;
