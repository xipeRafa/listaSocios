
import { AuctionBody } from "./components/auctions/AuctionBody";

import FireStoreDataProvider from "./context/FireStoreDataContext";


export const App = () => {
  return (
    <>
        <FireStoreDataProvider>
          <AuctionBody />
        </FireStoreDataProvider>
    </>

  );
};
