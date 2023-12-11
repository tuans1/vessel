export const VESSEL_STATE = {
  cac: "2023-11-11",
  vsl_cd: "",
  vsl_clss_flg: "",
  vsl_eng_nm: "",
  vsl_locl_nm: "",
  foil_capa: "",
  doil_capa: "",
  frsh_wtr_capa: "",
  call_sgn_no: "",
  rgst_no: "",
  phn_no: "",
  fax_no: "",
  tlx_no: "",
  vsl_eml: "",
  piclb_desc: "",
  rgst_port_cd: "",
  clss_no_rgst_area_nm: "",
  vsl_clss_no: "",
  vsl_bldr_nm: "",
  loa_len: "",
  lbp_len: "",
  vsl_wdt: "",
  vsl_dpth: "",
  smr_drft_hgt: "",
  dwt_wgt: "",
  lgt_shp_tong_wgt: "",
  grs_rgst_tong_wgt: "",
  net_rgst_tong_wgt: "",
  pnm_gt_wgt: "",
  pnm_net_tong_wgt: "",
  suz_gt_wgt: "",
  suz_net_tong_wgt: "",
  mn_eng_mkr_nm: "",
  mn_eng_tp_desc: "",
  mn_eng_bhp_pwr: "",
  vsl_own_ind_cd: "",
  vsl_rgst_cnt_cd: "",
  vsl_bld_cd: "",
  crr_cd: "",
  fdr_div_cd: "",
  vsl_svc_spd: "",
  max_spd: "",
  ecn_spd: "",
  crw_knt: "",
  cntr_dzn_capa: "",
  cntr_op_capa: "",
  cntr_pnm_capa: "",
  cntr_vsl_clss_capa: "",
  rf_rcpt_knt: "",
  rf_rcpt_max_knt: "",
  fbd_capa: "",
  dpl_capa: "",
  blst_tnk_capa: "",
  foil_csm: "",
  doil_csm: "",
  frsh_wtr_csm: "",
  mn_eng_rpm_pwr: "",
  gnr_rpm_pwr: "",
  vsl_hgt: "",
  rgst_dt: "",
  vsl_edi_nm: "",
  co_cd: "",
  vsl_clz_dt: "",
  vsl_cre_ofc_cd: "",
  vsl_delt_ofc_cd: "",
  vsl_bld_area_nm: "",
  gnr_mkr_nm: "",
  gnr_tp_desc: "",
  gnr_bhp_pwr: "",
  bwthst_mkr_nm: "",
  bwthst_tp_desc: "",
  bwthst_bhp_pwr: "",
  bwthst_rpm_pwr: "",
  lloyd_no: "",
  vsl_lnch_dt: "",
  vsl_de_dt: "",
  vsl_kel_ly_dt: "",
  vsl_hl_no: "",
  ttl_teu_knt: "",
  vsl_htch_knt: "",
  vsl_hld_knt: "",
  vsl_rmk: "",
  intl_tong_certi_flg: "",
  madn_voy_suz_net_tong_wgt: "",
  vsl_sft_cstru_certi_exp_dt: "",
  vsl_sft_rdo_certi_exp_dt: "",
  vsl_sft_eq_certi_exp_dt: "",
  vsl_lod_line_certi_exp_dt: "",
  delt_flg: "",
  eai_evnt_dt: "",
  eai_if_id: "",
  modi_vsl_cd: "",
  edw_upd_dt: "",
  modi_vsl_opr_tp_cd: "",
  modi_ownr_nm: "",
  modi_alln_vsl_cd: "",
  nyk_lgcy_vsl_cd_ctnt: "",
  mol_lgcy_vsl_cd_ctnt: "",
  kline_lgcy_vsl_cd_ctnt: "",
};
export const VESSEL_CODE = [
  {
    label: "VESSEL CODE",
    key: "vsl_cd",
  },
  {
    label: "VESSEL OWNED INDICATOR CODE",
    key: "vsl_own_ind_cd",
  },
  {
    label: "VESSEL BUILT CODE",
    key: "vsl_bld_CD",
  },
  {
    label: "VESSEL CREATE OFFICE CODE",
    key: "vsl_cre_ofc_cd",
  },
  {
    label: "VESSEL DELETE OFFICE CODE",
    key: "vsl_delt_ofc_cd",
  },
  {
    label: "VESSEL REGISTRATION COUNTRY CODE",
    key: "vsl_rgst_cnt_cd",
  },
  {
    label: "REGISTRATION PORT CODE",
    key: "rgst_port_cd",
  },
  {
    label: "CARRIER CODE",
    key: "crr_cd",
  },
  {
    label: "FEEDER DIVISION CODE",
    key: "fdr_div_cd",
  },
  {
    label: "COMPANY CODE",
    key: "co_cd",
  },
  {
    label: "MODIFIED VESSEL CODE",
    key: "modi_vsl_cd",
  },
  {
    label: "MODIFIED ALLIANCE VESSEL CODE",
    key: "modi_ALLN_vsl_cd",
  },
];

export const VESSEL_DATE = [
  {
    label: "REGISTRATION DATE",
    key: "rgst_dt",
  },
  {
    label: "VESSEL LAUNCH DATE",
    key: "vsl_clz_dt",
  },
  {
    label: "VESSEL DELIVERY DATE",
    key: "vsl_de_dt",
  },
  {
    label: "VESSEL KEEL LAID DATE",
    key: "vsl_kel_ly_dt",
  },
  {
    label: "VESSEL SAFETY CONSTRUCTION CERTIFICATE EXPIRE DATE",
    key: "vsl_sft_cstru_certi_exp_dt",
  },
  {
    label: "VESSEL SAFETY RADIO CERTIFICATE EXPIRE DATE",
    key: "vsl_sft_rdo_certi_exp_dt",
  },
  {
    label: "VESSEL SAFETY EQUIPMENT CERTIFICATE EXPIRE DATE",
    key: "vsl_sft_eq_certi_exp_dt",
  },
  {
    label: "VESSEL LOAD LINE CERTIFICATE EXPIRE DATE",
    key: "vsl_lod_line_certi_exp_dt",
  },
  {
    label: "VESSEL DERAT CERTIFICATE EXPIRE DATE",
    key: "vsl_derat_certi_exp_dt",
  },
  {
    label: "VESSEL CLOSE DATE",
    key: "vsl_clz_dt",
  },
];

export const VESSEL_NAME = [
  {
    label: "VESSEL LOCAL NAME",
    key: "vsl_locl_nm",
  },
  {
    label: "VESSEL ENGLISH NAME",
    key: "vsl_eng_nm",
  },
  {
    label: "CLASS NUMBER REGISTER AREA NAME",
    key: "clss_no_rgst_area_nm",
  },
  {
    label: "VESSEL BUILDER NAME",
    key: "vsl_bldr_nm",
  },
  {
    label: "MAIN ENGINE MAKER NAME",
    key: "mn_eng_mkr_nm",
  },
  {
    label: "VESSEL EDI NAME",
    key: "vsl_edi_nm",
  },
  {
    label: "VESSEL BUILD AREA NAME",
    key: "vsl_bld_area_nm",
  },
  {
    label: "GENERATOR MAKER NAME",
    key: "gnr_mkr_nm",
  },
  {
    label: "BOW THRUSTER MAKER NAME",
    key: "bwthst_mkr_nm",
  },
  {
    label: "MODIFIED OWNER NAME",
    key: "modi_ownr_nm",
  },
];

export const VESSEL_EMAIL = [
  {
    label: "VESSEL EMAIL",
    key: "vsl_eml",
  },
];

export const VESSEL_NUMBER = [
  {
    label: "CALL SIGN NUMBER",
    key: "call_sgn_no",
  },
  {
    label: "REGISTRATION NUMBER",
    key: "rgst_no",
  },
  {
    label: "PHONE NUMBER",
    key: "phn_no",
  },
  {
    label: "FAX NUMBER",
    key: "vsl_eml",
  },
  {
    label: "TELEX NUMBER",
    key: "vsl_eml",
  },
  {
    label: "VESSEL CLASS NUMBER",
    key: "vsl_eml",
  },
  {
    label: "LLOYD NUMBER",
    key: "vsl_eml",
  },
  {
    label: "VESSEL HULL NUMBER",
    key: "vsl_hl_no",
  },
];

export const VESSEL_FLAG = [
  {
    label: "VESSEL CLASSIFICATION FLAG",
    key: "vsl_clss_flg",
  },
  {
    label: "DELETE FLAG",
    key: "vsl_delt_flg",
  },
];

export const VESSEL_DESCRIPTION = [
  {
    label: "P&I CLUB DESCRIPTION",
    key: "piclb_desc",
  },
  {
    label: "MAIN ENGINE TYPE DESCRIPTION",
    key: "mn_eng_tp_desc",
  },
  {
    label: "GENERATOR TYPE DESCRIPTION",
    key: "gnr_tp_desc",
  },
  {
    label: "BOW THRUSTER TYPE DESCRIPTION",
    key: "bwthst_tp_desc",
  },
];

export const VESSEL_COUNT = [
  {
    label: "CREW COUNT",
    key: "crw_knt",
  },
  {
    label: "REEFER RECEPT COUNT",
    key: "rf_rcpt_knt",
  },
  {
    label: "REEFER RECEPT MAX COUNT",
    key: "rf_rcpt_max_knt",
  },
  {
    label: "TOTAL TEU COUNT",
    key: "ttl_teu_knt",
  },
  {
    label: "VESSEL HATCH COUNT",
    key: "vsl_htch_knt",
  },
  {
    label: "VESSEL HOLD COUNT",
    key: "vsl_hld_knt",
  },
];

export const VESSEL_CAPACITY = [
  {
    label: "FUEL OIL CAPACITY",
    key: "foil_capa",
  },
  {
    label: "DIESEL OIL CAPACITY",
    key: "doil_capa",
  },
  {
    label: "FRESH WATER CAPACITY",
    key: "frsh_wtr_capa",
  },
  {
    label: "CONTAINER DESIGN CAPACITY",
    key: "vsl_delt_flg",
  },
  {
    label: "CONTAINER OPERATION CAPACITY",
    key: "frsh_wtr_capa",
  },
  {
    label: "CONTAINER PANAMA CAPACITY",
    key: "cntr_pnm_capa",
  },
  {
    label: "CONTAINER VESSEL CLASS CAPACITY",
    key: "cntr_vsl_clss_capa",
  },
  {
    label: "FREEBOARD CAPACITY",
    key: "fbd_capa",
  },
  {
    label: "DISPLACEMENT CAPACITY",
    key: "dpl_capa",
  },
  {
    label: "BALLAST TANK CAPACITY",
    key: "blst_tnk_capa",
  },
];

export const VESSEL_HEIGHT = [
  {
    label: "SUMMER DRAFT HEIGHT",
    key: "smr_drft_hgt",
  },
  {
    label: "VESSEL HEIGHT",
    key: "vsl_hgt",
  },
];
export const VESSEL_LENGTH = [
  {
    label: "LOA LENGTH",
    key: "loa_len",
  },
  {
    label: "LBP LENGTH",
    key: "lbp_len",
  },
];
export const VESSEL_POWER = [
  {
    label: "MAIN ENGINE BHP POWER",
    key: "vsl_clss_flg",
  },
  {
    label: "MAIN ENGINE RPM POWER",
    key: "vsl_delt_flg",
  },
  {
    label: "GENERATOR RPM POWER",
    key: "vsl_clss_flg",
  },
  {
    label: "GENERATOR BHP POWER",
    key: "vsl_delt_flg",
  },
  {
    label: "BOW THRUSTER BHP POWER",
    key: "vsl_clss_flg",
  },
  {
    label: "BOW THRUSTER RPM POWER",
    key: "vsl_delt_flg",
  },
];
export const VESSEL_REMARK = [
  {
    label: "VESSEL REMARK",
    key: "vsl_rmk",
  },
];
export const VESSEL_WIDTH = [
  {
    label: "VESSEL WIDTH",
    key: "vsl_wdt",
  },
];
export const VESSEL_SPEED = [
  {
    label: "VESSEL SERVICE SPEED",
    key: "max_spd",
  },
  {
    label: "MAX SPEED",
    key: "max_spd",
  },
  {
    label: "ECONOMY SPEED",
    key: "ecn_spd",
  },
];
export const VESSEL_WEIGHT = [
  {
    label: "DWT WEIGHT",
    key: "dwt_wgt",
  },
  {
    label: "LIGHT SHIP TONNAGE WEIGHT",
    key: "lgt_shp_tong_wgt",
  },
  {
    label: "GROSS REGISTER TONNAGE WEIGHT",
    key: "grs_rgst_tong_wgt",
  },
  {
    label: "NET REGISTER TONNAGE WEIGHT",
    key: "net_rgst_tong_wgt",
  },
  {
    label: "PANAMA GT WEIGHT",
    key: "pnm_gt_wgt",
  },
  {
    label: "PANAMA NET TONNAGE WEIGHT",
    key: "pnm_net_tong_wgt",
  },
  {
    label: "SUEZ GT WEIGHT",
    key: "suz_gt_wgt",
  },
  {
    label: "SUEZ NET TONNAGE WEIGHT",
    key: "suz_net_tong_wgt",
  },
  {
    label: "MAIDEN VOYAGE SUEZ NET TONNAGE WEIGHT",
    key: "madn_voy_suz_net_tong_wgt",
  },
];
export const VESSEL_ = [
  {
    label: "VESSEL",
    key: "vsl_clss_flg",
  },
  {
    label: "DELETE",
    key: "vsl_delt_flg",
  },
  {
    label: "VESSEL",
    key: "vsl_clss_flg",
  },
  {
    label: "DELETE",
    key: "vsl_delt_flg",
  },
];
