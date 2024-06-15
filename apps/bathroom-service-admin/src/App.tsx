import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { SocialPostList } from "./socialPost/SocialPostList";
import { SocialPostCreate } from "./socialPost/SocialPostCreate";
import { SocialPostEdit } from "./socialPost/SocialPostEdit";
import { SocialPostShow } from "./socialPost/SocialPostShow";
import { FeedList } from "./feed/FeedList";
import { FeedCreate } from "./feed/FeedCreate";
import { FeedEdit } from "./feed/FeedEdit";
import { FeedShow } from "./feed/FeedShow";
import { BathroomList } from "./bathroom/BathroomList";
import { BathroomCreate } from "./bathroom/BathroomCreate";
import { BathroomEdit } from "./bathroom/BathroomEdit";
import { BathroomShow } from "./bathroom/BathroomShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BathroomService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
        <Resource
          name="SocialPost"
          list={SocialPostList}
          edit={SocialPostEdit}
          create={SocialPostCreate}
          show={SocialPostShow}
        />
        <Resource
          name="Feed"
          list={FeedList}
          edit={FeedEdit}
          create={FeedCreate}
          show={FeedShow}
        />
        <Resource
          name="Bathroom"
          list={BathroomList}
          edit={BathroomEdit}
          create={BathroomCreate}
          show={BathroomShow}
        />
      </Admin>
    </div>
  );
};

export default App;
