import GetStaticImageLoader from "@/shared/components/getStaticImageLoader/getStaticImageLoader";
import Image from "next/image";

const OurPeople = ({ agents }: any) => {
  const renderListOfAgents = () => {
    return agents.map((agent: any, index: number) => {
      return (
        <div
          className="bg-white rounded-lg outline-none relative w-full shadow fill-almostBlack border p-4 box-border px-6 pb-6 border-solid flex flex-col items-center pt-6"
          key={index}
        >
          {getAgentImage(agent)}
          <div className="flex flex-col text-center overflow-hidden">
            <span className="text-sm font-bold pt-2 truncate">{`${agent.firstName} ${agent.lastName}`}</span>
            <span className="text-xs font-normal text-almostBlack pt-2">
              {agent.position}
            </span>
          </div>
        </div>
      );
    });
  };

  const getAgentImage = (agent: any) => {
    return (
      <div className="w-24 h-24 bg-slate-200 flex justify-center items-center rounded-full text-4xl font-medium text-almostBlack">
        {agent.agentPhotoFileName ? (
          <Image
            src={`https://resi.stgz.view.com.au/viewstatic/images/listing/120-w/${agent.agentPhotoFileName}`}
            alt={agent.position}
            loader={GetStaticImageLoader}
            width={100}
            height={100}
            className="rounded-full object-contain bg-white"
          />
        ) : (
          agent.firstName.charAt()
        )}
      </div>
    );
  };

  return (
    <div className="my-8">
      <h2 className="text-lg font-bold text-almostBlack">
        Our People ({agents.length})
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {renderListOfAgents()}
      </div>
    </div>
  );
};

export default OurPeople;
