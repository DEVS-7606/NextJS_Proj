interface Iprops {
  className: string;
  title: string;
  subTitle: string;
  children?: JSX.Element;
  isRounded?: boolean;
}

const HeroContainer = ({
  isRounded = true,
  className,
  title,
  subTitle,
  children,
}: Iprops) => {
  return (
    <div
      className={`bg-saltWhite ${
        isRounded && "rounded-xl"
      } text-almostBlack relative ${className}`}
    >
      <div>
        <h1
          className={`text-5xl font-bold headLine lg:text-74 lg:leading-82 break-words`}
        >
          {title}
        </h1>
        <p className={`text-sm font-normal md:text-base mt-4`}>{subTitle}</p>
      </div>
      {children}
    </div>
  );
};

export default HeroContainer;
