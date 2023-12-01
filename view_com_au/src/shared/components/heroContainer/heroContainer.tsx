interface Iprops {
  className: string;
  subTitleClassName?: string;
  title: string;
  subTitle: string;
  children?: JSX.Element;
}

const HeroContainer = (props: Iprops) => {
  return (
    <section
      className={`bg-saltWhite p-6 md:px-16 md:py-12 rounded-xl text-almostBlack relative ${props.className}`}
    >
      <div>
        <h1 className="text-5xl font-bold headLine lg:text-74 lg:leading-82 break-words">
          {props.title}
        </h1>
        <p
          className={`text-sm font-normal md:text-base mt-4${props.subTitleClassName}`}
        >
          {props.subTitle}
        </p>
      </div>
      {props?.children}
    </section>
  );
};

export default HeroContainer;
