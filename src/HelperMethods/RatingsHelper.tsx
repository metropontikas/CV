import { BasicRating } from "../components/Ratings/BasicRating";
import { DecentRating } from "../components/Ratings/DecentRating";
import { ExcellentRating } from "../components/Ratings/ExcellentRating";
import { GoodRating } from "../components/Ratings/GoodRating";
import { VeryGoodRating } from "../components/Ratings/VeryGoodRating";

export function ratingHelper(rating: string) {
  switch (rating) {
    case "nativeSpeaker":
      return <ExcellentRating nativeSpeaker />;
    case "excellent":
      return <ExcellentRating />;
    case "veryGood":
      return <VeryGoodRating />;
    case "good":
      return <GoodRating />;
    case "decent":
      return <DecentRating />;
    case "basic":
      return <BasicRating />;
  }
}
