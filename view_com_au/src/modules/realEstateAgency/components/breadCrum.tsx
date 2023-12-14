interface breadCrums {
  displayName: string;
  urlPath?: string;
}

interface Iprops {
  breadCrums: breadCrums[];
}

const BreadCrum = (props: Iprops) => {
  const renderBreadCrum = (breadCrums: breadCrums[]) => {
    return breadCrums.map((path, index) => {
      return (
        <span className="flex gap-2" key={index}>
          <a
            href="#"
            className={
              path.urlPath ? "hover:underline hover:text-seaBlue" : "text-black"
            }
          >
            {path.displayName}
          </a>
          {path.urlPath && ">"}
        </span>
      );
    });
  };

  return (
    <div className="flex gap-4 hover:shadow-none md:px-0 lightScrollBar text-gray-500 my-8 text-sm lg:gap-2">
      {renderBreadCrum(props.breadCrums)}
    </div>
  );
};

export default BreadCrum;
