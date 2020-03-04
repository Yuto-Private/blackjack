export interface ScenarioObject {
  c_kind: 1 | 2 | 3;
  description: string;
  did_para: string;
  ebis_para: string;
  hde_id: string;
  id: number;
  kouhosha_seg_id: number;
  kyujin_seg_id: number;
  label_id: number;
  name: string;
  s_end_ymd: string;
  s_repeat_flg: number; // 廃止予定
  s_start_hm: string;
  s_start_ymd: string;
  s_week_fri: 0 | 1;
  s_week_mon: 0 | 1;
  s_week_sat: 0 | 1;
  s_week_sun: 0 | 1;
  s_week_thu: 0 | 1;
  s_week_tue: 0 | 1;
  s_week_wed: 0 | 1;
  status: 0 | 1 | 2 | 8 | 9;
  user_id: string;
}

export interface LabelObject {
  label_color: string;
  label_id: number;
  label_name: string;
}
