const StaticList = ({ data, label }: { label: string; data?: string[] }) => {
  return (
    data && (
      <>
        <div className="t5">{label}:</div>
        <ul className="list-disc mb-2 list-outside pl-[18px] t5">
          {data?.map((e, index) => (
            <li key={index}>
              <span className="t5">{e}</span>
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default StaticList;
