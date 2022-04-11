import React, { useState } from "react";
import { Auth } from "./Auth";
import { Home } from "./Home";

export const ConditionLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  console.log("isLogin:", isLogin);
  return (
    <div>
      {isLogin ? (
        <Home logout={() => setIsLogin(!isLogin)} />
      ) : (
        <Auth login={() => setIsLogin(!isLogin)} />
      )}
    </div>
  );
};
