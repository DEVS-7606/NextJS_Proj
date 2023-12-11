interface Iprops {
  details: any;
}

interface PerformanceStats {
  SALES_STATS: {
    value: any;
    description: string;
  }[];
  RENT_STATS: { value: any; description: string }[];
}

const MarketPerformance = (props: Iprops) => {
  const performanceStats: PerformanceStats = {
    SALES_STATS: [
      {
        value: props.details.data.averageSoldPrice.toFixed(0),
        description: "Median sold price",
      },
      {
        value: props.details.data.averageDaysOnMarket,
        description: "Median days advertised",
      },
      {
        value: props.details.data.numberOfSoldListings,
        description: "Properties sold",
      },
      {
        value: props.details.data.numberOfBuyListings,
        description: "Properties for sale",
      },
    ],
    RENT_STATS: [
      {
        value: props.details.data.averageLeasedPrice.toFixed(0),
        description: "Median leased price",
      },
      {
        value: props.details.data.averageLeasedDaysOnMarket,
        description: "Median days advertised",
      },
      {
        value: props.details.data.numberOfLeasedListings,
        description: "Properties leased",
      },
      {
        value: props.details.data.numberOfRentListings,
        description: "Properties for rent",
      },
    ],
  };
  const renderSalesPerformance = () => {
    return (
      <div className="bg-shirtBlue mt-6 rounded-xl py-4 px-6 flex flex-col gap-2">
        <span className="text-sm font-bold">Sales Performance</span>
        <div className="md:flex md:flex-row md:gap-4">
          {performanceStats.SALES_STATS.map((stat, index) => {
            return (
              <div
                className={`flex flex-col py-4 items-start justify-center flex-1 relative md:py-0 md:border-b-0 ${
                  !(performanceStats.SALES_STATS.length - 1 === index) &&
                  "md:border-r border-b"
                }`}
                key={index}
              >
                <span className="text-xl font-bold">
                  {index == 0 && `$`}
                  {stat.value}
                </span>
                <p className="text-sm font-normal">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const renderRentPerformance = () => {
    return (
      <div className="bg-shirtBlue mt-6 rounded-xl py-4 px-6 flex flex-col gap-2">
        <span className="text-sm font-bold">Rent Performance</span>
        <div className="md:flex md:flex-row md:gap-4">
          {performanceStats.RENT_STATS.map((stat, index) => {
            return (
              <div
                className={`flex flex-col py-4 items-start justify-center flex-1 relative md:py-0 md:border-b-0 ${
                  !(performanceStats.RENT_STATS.length - 1 === index) &&
                  "md:border-r border-b"
                }`}
                key={index}
              >
                <span className="text-xl font-bold">
                  {index == 0 && "$"}
                  {stat.value}
                </span>
                <p className="text-sm font-normal">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <div className="text-almostBlack mt-8 pb-8 border-b">
      <h2 className="text-lg font-bold">Market performance</h2>
      <p className="text-sm font-normal mt-3 md:text-base">
        In the last 12 months BigginScott Richmond has sold 206 properties and
        leased 752 properties on resi.stgz.view.com.au
      </p>

      {renderSalesPerformance()}

      {renderRentPerformance()}
    </div>
  );
};

export default MarketPerformance;
