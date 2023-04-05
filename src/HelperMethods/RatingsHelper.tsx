import { BasicRating } from "../components/Ratings/BasicRating";
import { DecentRating } from "../components/Ratings/DecentRating";
import { ExcellentRating } from "../components/Ratings/ExcellentRating";
import { GoodRating } from "../components/Ratings/GoodRating";
import { VeryGoodRating } from "../components/Ratings/VeryGoodRating";

export function ratingHelper(rating: string) {
  switch (rating) {
    case "nativeSpeaker":
      return <ExcellentRating nativeSpeaker />;
      break;
    case "excellent":
      return <ExcellentRating />;
      break;
    case "veryGood":
      return <VeryGoodRating />;
      break;
    case "good":
      return <GoodRating />;
      break;
    case "decent":
      return <DecentRating />;
      break;
    case "basic":
      return <BasicRating />;
      break;
  }
}
