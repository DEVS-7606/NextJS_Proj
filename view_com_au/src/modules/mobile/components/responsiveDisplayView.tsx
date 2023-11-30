import { IMAGES, responsiveDisplay } from "../../../../data";
import Image from "next/image";

const ResponsiveDisplayView = (props: responsiveDisplay) => {
  const renderAppsImage = (): JSX.Element => {
    return (
      <div
        className={`flex gap-4 my-4 justify-center lg:justify-normal mt-0 lg:px-0 items-center xxs:px-8 px-4 ${props.renderAppsImageClassName}`}
      >
        {IMAGES.slice(props.AppIndexStart, props.AppIndexEnd).map(
          (image, index) => {
            return (
              <a href="#" key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className={image.className}
                />
              </a>
            );
          }
        )}
      </div>
    );
  };

  const getImage = (): JSX.Element => {
    return (
      <div
        className={`w-full lg:w-1/2 flex justify-center lg:px-0 ${props.getImageClassName}`}
      >
        {IMAGES.slice(
          props.DisplayImageStartIndex,
          props.DisplayImageEndIndex
        ).map((image, index) => {
          return (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={image.className}
            />
          );
        })}
      </div>
    );
  };

  const renderFeaturesDescAndAppsImg = () => {
    return (
      <div
        className={`w-full lg:w-1/2 flex flex-col gap-4 ${props.renderSpecsAndAppsImgClassName}`}
      >
        <h2 className="font-bold text-2xl ">{props.heading}</h2>
        <p className="font-normal text-base text-lightGray">
          {props.description}
        </p>
        {renderAppsImage()}
      </div>
    );
  };

  return (
    <section
      className={`text-almostBlack text-center lg:text-start flex flex-col px-0 lg:px-16 items-center ${props.mainClassName}`}
    >
      {renderFeaturesDescAndAppsImg()}
      {getImage()}
    </section>
  );
};

export default ResponsiveDisplayView;
