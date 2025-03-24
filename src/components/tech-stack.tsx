const TechStack = ({
  data,
  label,
}: {
  label: string;
  data: { label: string; stack: string[] }[];
}) => {
  return (
    <>
      <div className="t5">{label}:</div>
      <ul className="list-disc mb-4 list-outside pl-[18px] t5">
        {data?.map(({ label, stack }, index) => (
          <li key={index}>
            <div className="flex items-center">
              <span className="t5">{label}: </span>
              <div className="flex items-center">
                {stack.map((tech, index) => (
                  <>
                    <span
                      key={index}
                      className="t5 mx-1 text-primary font-medium"
                    >
                      {`${tech}`}
                    </span>
                    {index !== stack.length - 1 && <span> • </span>}
                  </>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TechStack;
