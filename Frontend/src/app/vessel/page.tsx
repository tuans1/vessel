"use client";
import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import ModalVessel from "./ModalVessel";
import axiosInstance from "@/config/axios";
import createNotification from "@/utils/notify";

const vesselColumn = [
  // {
  //   title: "#",
  //   dataIndex: "#",
  //   key: "#",
  //   render: (text, _, index) => <a>{index + 1}</a>,
  // },
  {
    title: "VESSEL CODE",
    dataIndex: "vsl_cd",
    key: "vsl_cd",
    fixed: "left",
    width: 200,
  },
  {
    title: "LEGACY COMPANY CODE",
    dataIndex: "lgcy_co_cd",
    key: "lgcy_co_cd",
  },
  {
    title: "REGISTRATION PORT CODE",
    dataIndex: "rgst_port_cd",
    key: "rgst_port_cd",
    width: 500,
  },
  {
    title: "VESSEL REGISTRATION COUNTRY CODE",
    dataIndex: "vsl_rgst_cnt_cd",
    key: "vsl_rgst_cnt_cd",
  },
  {
    title: "VESSEL OWNED INDICATOR CODE",
    dataIndex: "vsl_own_ind_cd",
    key: "vsl_own_ind_cd",
  },
  {
    title: "VESSEL CLASSIFICATION FLAG",
    dataIndex: "vsl_clss_flg",
    key: "vsl_clss_flg",
  },
  {
    title: "VESSEL ENGLISH NAME",
    dataIndex: "vsL_eng_nm",
    key: "vsL_eng_nm",
  },
  {
    title: "VESSEL EMAIL",
    dataIndex: "vsl_eml",
    key: "vsl_eml",
  },
  {
    title: "PHONE NUMBER",
    dataIndex: "phn_no",
    key: "phn_no",
  },
  {
    title: "MODIFIED OWNER NAME",
    dataIndex: "modi_ownr_nm",
    key: "modi_ownr_nm",
  },
  {
    title: "VESSEL CLASS NUMBER",
    dataIndex: "vsl_clss_no",
    key: "vsl_clss_no",
  },
  {
    title: "CONTAINER VESSEL CLASS CAPACITY",
    dataIndex: "cntr_vsl_clss_capa",
    key: "cntr_vsl_clss_capa",
  },
  {
    title: "LOA LENGTH",
    dataIndex: "loa_len",
    key: "loa_len",
  },
  {
    title: "LBP LENGTH",
    dataIndex: "lbp_len",
    key: "lbp_len",
  },
  {
    title: "VESSEL WIDTH",
    dataIndex: "vsl_wdt",
    key: "vsl_wdt",
  },
  {
    title: "VESSEL DEPTH",
    dataIndex: "vsL_dpth",
    key: "vsL_dpth",
  },
  {
    title: "SUMMER DRAFT HEIGHT",
    dataIndex: "smr_drft_hgt",
    key: "smr_drft_hgt",
  },
  {
    title: "LIGHT SHIP TONNAGE WEIGHT",
    dataIndex: "lgt_shp_tong_wgt",
    key: "lgt_shp_tong_wgt",
  },
  {
    title: "MAX_SPD",
    dataIndex: "max_spd",
    key: "max_spd",
  },
  {
    title: "CONTAINER VESSEL CLASS CAPACITY",
    dataIndex: "cntr_vsl_clss_capa",
    key: "cntr_vsl_clss_capa",
  },
  {
    title: "MAIN ENGINE RPM POWER",
    dataIndex: "mn_eng_rpm_pwr",
    key: "mn_eng_rpm_pwr",
  },
  {
    title: "VESSEL LAUNCH DATE",
    dataIndex: "vsl_lnch_dt",
    key: "vsl_lnch_dt",
  },
  {
    title: "VESSEL DELIVERY DATE",
    dataIndex: "vsl_de_dt",
    key: "vsl_de_dt",
  },
  {
    title: "VESSEL SAFETY CONSTRUCTION CERTIFICATE EXPIRE DATE",
    dataIndex: "vsl_sft_cstru_certi_exp_dt",
    key: "vsl_sft_cstru_certi_exp_dt",
  },
  {
    title: "VESSEL SAFETY EQUIPMENT CERTIFICATE EXPIRE DATE",
    dataIndex: "vsl_sft_eq_certi_exp_dt",
    key: "vsl_sft_eq_certi_exp_dt",
  },
  {
    title: "VESSEL LOAD LINE CERTIFICATE EXPIRE DATE",
    dataIndex: "vsl_lod_line_certi_exp_dt",
    key: "vsl_lod_line_certi_exp_dt",
  },
  {
    title: "VESSEL DERAT CERTIFICATE EXPIRE DATE",
    dataIndex: "vsl_derat_certi_exp_dt",
    key: "vsl_derat_certi_exp_dt",
  },
  {
    title: "FUEL OIL CONSUMPTION",
    dataIndex: "foil_csm",
    key: "foil_csm",
  },
  {
    title: "DIESEL OIL CONSUMPTION",
    dataIndex: "doil_csm",
    key: "doil_csm",
  },
  {
    title: "VESSEL REMARK",
    dataIndex: "vsl_rmk",
    key: "vsl_rmk",
  },
  {
    title: "Action",
    dataIndex: "Action",
    key: "action",
    fixed: "right",
    width: 80,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];
// const data: DataType[] = [
//   {
//     key: "1",
//     RGST_PORT_CD: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     RGST_PORT_CD: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//     tags: ["loser"],
//   },
//   {
//     key: "3",
//     RGST_PORT_CD: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
// ];
export default function Pages() {
  const [openModalVessel, setOpenModalVessel] = useState(false);
  const [listVessel, setListVessel] = useState([]);
  const [detailVessel, setDetailVessel] = useState({});
  useEffect(() => {
    fetchListVessel();
  }, []);
  function fetchListVessel() {
    axiosInstance.get("/vessel").then((res) => {
      console.log(res);
      const { list, total }: { list: []; total: number } = res.data;
      setListVessel(list);
    });
  }
  function handleSubmitFormVessel(data: any) {
    if (detailVessel.id) {
      console.log("Edit");
    } else {
      axiosInstance
        .post("/vessel/create", data)
        .then((res) => {
          fetchListVessel();
          setOpenModalVessel(false);
          createNotification("success", "Create Success");
          setDetailVessel({});
        })
        .catch((err) => console.log(err));
    }
  }
  function handleClickRow(item: any, event: any) {
    setDetailVessel(item);
    setOpenModalVessel(true);
  }
  return (
    <>
      <Button
        key="3"
        type="primary"
        onClick={() => {
          setOpenModalVessel(true);
          setDetailVessel({});
        }}
      >
        Create Vessel
      </Button>
      <Table
        dataSource={listVessel}
        columns={vesselColumn}
        scroll={{ x: 10000, y: 500 }}
        rowKey={({ id }) => id}
        onRow={(item) => {
          return {
            onClick: (event) => handleClickRow(item, event), // click row
          };
        }}
      />
      <ModalVessel
        openModalVessel={openModalVessel}
        detailVessel={detailVessel}
        onCloseModalVessel={() => setOpenModalVessel(false)}
        onSubmitFormVessel={handleSubmitFormVessel}
      />
    </>
  );
}
