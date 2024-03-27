export interface IRaceDataDTO {
  [key: string]: IRaceData;
}

export interface IRaceData {
  advertised_start: {seconds: number};
  category_id: string;
  meeting_id: string;
  meeting_name: string;
  race_form: {
    distance: number;
    distance_type: any; // Replace `any` with a more specific type if possible
    distance_type_id: string;
    track_condition: any; // Replace `any` with a more specific type if possible
    track_condition_id: string;
    race_comment: string;
    additional_data: string; // This seems to be a JSON string, consider parsing it into an object
    generated: number;
    silk_base_url: string;
    race_comment_alternative: string;
  };
  race_id: string;
  race_name: string;
  race_number: number;
  venue_country: string;
  venue_id: string;
  venue_name: string;
  venue_state: string;
}

export interface ITimeToStart {
  minutes: number;
  seconds: number;
}
