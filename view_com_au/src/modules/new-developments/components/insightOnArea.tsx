import ToggleButton from "@/shared/components/toggleMoreOrLessBtn/toggleMoreOrLessBtn";
import arrow from "../../../../public/images/small_arrow.svg";
import Image from "next/image";

interface Iprops {
  suburb: string;
}

const InsightOnArea = (props: Iprops) => {
  const renderInsights = () => {
    return (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempora
        temporibus dolorum pariatur accusantium nobis autem, magnam harum
        delectus ullam dolores neque suscipit, sequi dicta quasi saepe sapiente
        in perspiciatis. Error, molestiae omnis iste, libero animi iusto
        incidunt excepturi nisi eligendi sint nihil dignissimos tempora
        perferendis. Perspiciatis exercitationem maxime odit officia, dolore
        unde, dolor ipsa molestiae cupiditate adipisci repudiandae dolorum!
        Culpa, ullam architecto ducimus optio facere eaque adipisci voluptatum
        exercitationem similique sapiente aspernatur officiis aliquid minus
        quae, nemo harum. Impedit aliquid dolorem odit est eius enim error.
        Perferendis, rem illo. Ullam reiciendis qui veritatis ad provident
        nesciunt nostrum accusantium totam placeat natus ex dolore tempore
        atque, voluptatum adipisci temporibus quae magnam error laborum eveniet
        ratione laudantium. Unde perspiciatis non repellat! Optio natus beatae
        tempora nulla reiciendis ipsum doloribus, amet sit atque molestiae
        minima quia ducimus aspernatur enim consequatur voluptate aliquid sequi
        voluptas. Commodi, at rerum aspernatur sapiente ut ipsum velit.
      </div>
    );
  };

  const renderMeetTheNeighbours = () => {
    return (
      <div className="bg-white rounded-lg p-4 border fill-almostBlack">
        <ToggleButton
          mainClassName="flex flex-col-reverse"
          initialHeight="0px"
          className="justify-between flex-row-reverse"
          toggleClassName="flex flex-row items-center"
          ShowLess={
            <Image
              src={arrow}
              alt="arrow"
              className="rotate-180"
              width={30}
              height={30}
            />
          }
          ShowMore={
            <Image
              src={arrow}
              alt="arrow"
              className="rotate-0"
              width={30}
              height={30}
            />
          }
          value={renderInsights()}
        >
          <div className="text-base font-bold text-center">
            Meet the Neighbours near
            <span className="capitalize"> {props.suburb}</span>
          </div>
        </ToggleButton>
      </div>
    );
  };
  const renderSuburbTrends = () => {
    return (
      <div className="bg-white rounded-lg p-4 border fill-almostBlack">
        <ToggleButton
          mainClassName="flex flex-col-reverse"
          initialHeight="0px"
          className="justify-between flex-row-reverse"
          toggleClassName="flex flex-row items-center"
          ShowLess={
            <Image
              src={arrow}
              alt="arrow"
              className="rotate-180"
              width={30}
              height={30}
            />
          }
          ShowMore={
            <Image
              src={arrow}
              alt="arrow"
              className="rotate-0"
              width={30}
              height={30}
            />
          }
          value={renderInsights()}
        >
          <div className="text-base font-bold text-center">
            <span className="capitalize"> {props.suburb} </span>
            Suburb Trends
          </div>
        </ToggleButton>
      </div>
    );
  };
  return (
    <div className="border-t mt-4 pt-8 lg:mt-8 flex flex-col gap-4 text-almostBlack">
      <div className="flex items-center">
        <h2 className="text-lg font-bold">
          Insights on <span className="capitalize">{props.suburb}</span>
        </h2>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        {renderMeetTheNeighbours()}
        {renderSuburbTrends()}
      </div>
    </div>
  );
};
export default InsightOnArea;
