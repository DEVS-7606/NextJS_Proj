interface Iprops {
  details: any;
}

const MarketPerformance = (props: Iprops) => {
  const renderSalesPerformance = () => {
    return (
      <div className="bg-shirtBlue mt-6 rounded-xl py-4 px-6 flex flex-col gap-2">
        <span className="text-sm font-bold">Sales Performance</span>
        <div className="md:flex md:flex-row md:gap-4">
          <div className="flex flex-col pg-4 items-start justify-center flex-1 relative md:pb-0 border-r">
            <span className="text-xl font-bold">
              ${props.details.data.averageSoldPrice.toFixed(0)}
            </span>
            <p className="text-sm font-normal">Median sold price</p>
          </div>
          <div className="flex flex-col pg-4 items-start justify-center flex-1 relative md:pb-0 border-r">
            <span className="text-xl font-bold">
              {props.details.data.averageDaysOnMarket}
            </span>
            <p className="text-sm font-normal">Median days advertised</p>
          </div>
          <div className="flex flex-col pg-4 items-start justify-center flex-1 relative md:pb-0 border-r">
            <span className="text-xl font-bold">
              {props.details.data.numberOfSoldListings}
            </span>
            <p className="text-sm font-normal">Properties sold</p>
          </div>
          <div className="flex flex-col pg-4 items-start justify-center flex-1 relative md:pb-0">
            <span className="text-xl font-bold">
              {props.details.data.numberOfBuyListings}
            </span>
            <p className="text-sm font-normal">Properties for sale</p>
          </div>
        </div>
      </div>
    );
  };
  const renderRentPerformance = () => {
    return (
      <div className="bg-shirtBlue mt-6 rounded-xl py-4 px-6 flex flex-col gap-2">
        <span className="text-sm font-bold">Rent Performance</span>
        <div className="md:flex md:flex-row md:gap-4">
          <div className="flex flex-col pg-4 items-start justify-center flex-1 relative md:pb-0 border-r">
            <span className="text-xl font-bold">
              ${props.details.data.averageLeasedPrice.toFixed(0)}
            </span>
            <p className="text-sm font-normal">Median leased price</p>
          </div>
          <div className="flex flex-col pg-4 items-start justify-center flex-1 relative md:pb-0 border-r">
            <span className="text-xl font-bold">
              {props.details.data.averageLeasedDaysOnMarket}
            </span>
            <p className="text-sm font-normal">Median days advertised</p>
          </div>
          <div className="flex flex-col pg-4 items-start justify-center flex-1 relative md:pb-0 border-r">
            <span className="text-xl font-bold">
              {props.details.data.numberOfLeasedListings}
            </span>
            <p className="text-sm font-normal">Properties leased</p>
          </div>
          <div className="flex flex-col pg-4 items-start justify-center flex-1 relative md:pb-0">
            <span className="text-xl font-bold">
              {props.details.data.numberOfRentListings}
            </span>
            <p className="text-sm font-normal">Properties for rent</p>
          </div>
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
