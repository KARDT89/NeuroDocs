import { auth } from "@clerk/nextjs/server";
import React from "react";
import IntroPage from "./IntroPage";

const Dashboard = () => {
    const {userId} = auth()

    if(!userId){
        return <IntroPage/>
    }
    else{
        
    }
  return (
    <div>
      {/* new document */}

      {/* recent document */}
    </div>
  );
};

export default Dashboard;
