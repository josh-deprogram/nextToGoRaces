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
    distance_type: any;
    distance_type_id: string;
    track_condition: any;
    track_condition_id: string;
    race_comment: string;
    additional_data: string;
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
