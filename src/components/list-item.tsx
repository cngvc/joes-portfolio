const List = ({ data, label }: { label: string; data?: string[] }) => {
  return (
    data && (
      <>
        <div className="item-desc">{label}:</div>
        <ul className="list-disc mb-2 list-outside pl-[18px]">
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

export default List;
