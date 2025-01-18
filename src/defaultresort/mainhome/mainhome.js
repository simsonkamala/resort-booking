
import React, { Suspense, lazy } from "react";
// import Navigation from "../../navigationpage";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BlurHome from "./blurHome";
import FoodCardsBlur from "../foodcardsblur";
// const LazyNavigation = lazy(() => import("../../navigationpage"));
const LazyHome = lazy(() => import("../home"));
const LazyRoomCarts = lazy(() => import("../roomcarts"));
const LazyFoodCards = lazy(() => import("../foodcards"));




const MainHome = () => {
  return (
    <div>
      <Suspense fallback={
            <div>
                <Skeleton height={460} width={`100%`} duration={0.8} baseColor="#c0c0c0" highlightColor="#f0f0f0" />
            </div>
        }>
        {/* <LazyNavigation /> */}
        <LazyHome />
      </Suspense>
      
      <Suspense fallback={<BlurHome />}>
        <LazyRoomCarts />
      </Suspense>

      <Suspense fallback={<FoodCardsBlur />}>
        <LazyFoodCards />
      </Suspense>
    </div>
  );
};

export default MainHome;
