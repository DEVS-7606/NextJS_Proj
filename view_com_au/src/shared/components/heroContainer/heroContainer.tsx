interface Iprops {
  className: string;
  mainClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
  title: string;
  subTitle: string;
  children?: JSX.Element;
  isRounded: string | number;
}

const HeroContainer = (props: Iprops) => {
  return (
    <section
      className={`bg-saltWhite rounded-${props.isRounded} text-almostBlack relative ${props.className}`}
    >
      <div className={props.mainClassName}>
        <h1
          className={`text-5xl font-bold headLine lg:text-74 lg:leading-82 break-words ${props.titleClassName}`}
        >
          {props.title}
        </h1>
        <p
          className={`text-sm font-normal md:text-base mt-4 ${props.subTitleClassName}`}
        >
          {props.subTitle}
        </p>
      </div>
      {props?.children}
    </section>
  );
};

export default HeroContainer;
