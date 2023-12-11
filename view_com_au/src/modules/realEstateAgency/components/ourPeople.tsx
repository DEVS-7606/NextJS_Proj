import Image from "next/image";

const OurPeople = ({ agents }: any) => {
  const renderListOfAgents = () => {
    return agents.map((agent: any, index: number) => {
      return (
        <div
          className="bg-white rounded-lg outline-none relative w-full shadow fill-almostBlack border p-4 box-border px-6 pb-6 border-solid"
          key={index}
        >
          <a href="#">
            <div className="flex flex-col items-center w-full px-6 pt-6">
              {getAgentImage(agent)}
              <div className="flex flex-col text-center overflow-hidden">
                <span className="text-sm font-bold pt-2 truncate">{`${agent.firstName} ${agent.lastName}`}</span>
                <span className="text-xs font-normal text-almostBlack pt-2">
                  {agent.position}
                </span>
              </div>
            </div>
          </a>
        </div>
      );
    });
  };

  const getAgentImage = (agent: any) => {
    let src = `https://resi.stgz.view.com.au/viewstatic/images/listing/120-w/${agent.agentPhotoFileName}`;

    return (
      <span className="w-24 h-24">
        <div className="w-full h-full object-contain bg-slate-200 flex justify-center items-center rounded-full">
          {agent.agentPhotoFileName ? (
            <Image
              src={src}
              alt={agent.position}
              loader={() => src}
              width={100}
              height={100}
              className="rounded-full"
            />
          ) : (
            <div className="text-4xl font-medium text-almostBlack">
              {agent.firstName.charAt()}
            </div>
          )}
        </div>
      </span>
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
