interface Iprops {
  title: string;
  src: string;
}

const FeaturesAndAmenities = (props: Iprops) => {
  const renderYoutubeVideo = (src: string) => {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${src}`}
        title="Grand Reve, Castle Hill - Meet the passionate people behind the development"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-xl"
      ></iframe>
    );
  };

  return props.src ? (
    <div className="relative border-b pb-8 mb-8">
      <h2 className="font-bold text-lg text-almostBlack mb-6 lg:mb-4">
        Features And Amenities of {props.title}
      </h2>
      <div className="relative w-full h-40 md:h-72 lg:h-96 overflow-hidden">
        {renderYoutubeVideo(props.src)}
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default FeaturesAndAmenities;
