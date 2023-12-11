import { Button, DatePicker, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import {
  VESSEL_CODE,
  VESSEL_NAME,
  VESSEL_STATE,
  VESSEL_LENGTH,
  VESSEL_CAPACITY,
  VESSEL_COUNT,
  VESSEL_DATE,
  VESSEL_EMAIL,
  VESSEL_REMARK,
  VESSEL_DESCRIPTION,
  VESSEL_FLAG,
  VESSEL_HEIGHT,
  VESSEL_NUMBER,
  VESSEL_POWER,
  VESSEL_SPEED,
  VESSEL_WEIGHT,
  VESSEL_WIDTH,
} from "@/constant/vessel";
import dayjs from "dayjs";
export default function ModalVessel({
  openModalVessel,
  onSubmitFormVessel,
  onCloseModalVessel,
  detailVessel,
}) {
  const [vesselForm, setVesselForm] = useState(VESSEL_STATE);
  const [xx, xxx] = useState("");
  useEffect(() => {
    setVesselForm(detailVessel);
  }, [openModalVessel]);
  function handleSubmit() {
    onSubmitFormVessel(vesselForm);
  }
  function handleClearForm() {
    setVesselForm(VESSEL_STATE);
  }
  function renderVesselInput(type: { label: string; key: string }[]) {
    return type.map((code) => {
      if (code.key.includes("_dt")) {
        return (
          <div key={code.label}>
            <p>{code.label}</p>
            <DatePicker
              value={vesselForm[code.key] ? dayjs(vesselForm[code.key]) : null}
              className="w-full"
              onChange={(date, dateString) =>
                setVesselForm({
                  ...vesselForm,
                  [code.key]: dateString,
                })
              }
            />
          </div>
        );
      } else {
        return (
          <div key={code.label}>
            <p>{code.label}</p>
            <Input
              placeholder="Basic usage"
              value={vesselForm[code.key]}
              onChange={(e) => {
                setVesselForm({
                  ...vesselForm,
                  [code.key]: e.target.value,
                });
              }}
            />
          </div>
        );
      }
    });
  }
  return (
    <>
      <Modal
        title={detailVessel.id ? "Update Vessel" : "Create Vessel"}
        style={{ top: 20 }}
        width={"100%"}
        open={openModalVessel}
        onOk={handleSubmit}
        bodyStyle={{ height: "calc(100vh - 164px)" }}
        onCancel={onCloseModalVessel}
        footer={[
          <Button key="2" onClick={onCloseModalVessel}>
            Close
          </Button>,
          <Button key="1" danger onClick={handleClearForm}>
            Clear
          </Button>,
          <Button key="3" type="primary" onClick={handleSubmit}>
            Submit
          </Button>,
        ]}
      >
        <div className="bg-gray-200 h-full overflow-auto">
          <h2>CODE</h2>
          <div className="vessel-form">{renderVesselInput(VESSEL_CODE)}</div>
          <h2>NAME</h2>
          <div className="vessel-form">{renderVesselInput(VESSEL_NAME)}</div>
          <h2>DATE</h2>
          <div className="vessel-form">{renderVesselInput(VESSEL_DATE)}</div>
          <h2>NUMBER</h2>
          <div className="vessel-form">{renderVesselInput(VESSEL_NUMBER)}</div>
          <div className="vessel-form-1">
            <div>
              <h2>EMAIL</h2>
              <div>{renderVesselInput(VESSEL_EMAIL)}</div>
            </div>
            <div>
              <h2>WIDTH</h2>
              <div>{renderVesselInput(VESSEL_WIDTH)}</div>
            </div>
            <div>
              <h2>HEIGHT</h2>
              <div className="column-2">{renderVesselInput(VESSEL_HEIGHT)}</div>
            </div>
            <div>
              <h2>LENGTH</h2>
              <div className="column-2">{renderVesselInput(VESSEL_LENGTH)}</div>
            </div>
          </div>
          <div className="grid-cols-12 grid gap-[5px]">
            <div className="col-span-4">
              <h2>FLAG</h2>
              <div className="column-2">{renderVesselInput(VESSEL_FLAG)}</div>
            </div>
            <div className="col-span-8">
              <h2>DESCRIPTION</h2>
              <div className="column-4">
                {renderVesselInput(VESSEL_DESCRIPTION)}
              </div>
            </div>
          </div>
          <h2>COUNT</h2>
          <div className="vessel-form">{renderVesselInput(VESSEL_COUNT)}</div>
          <h2>CAPACITY</h2>
          <div className="vessel-form">
            {renderVesselInput(VESSEL_CAPACITY)}
          </div>
          <h2>WEIGHT</h2>
          <div className="vessel-form">{renderVesselInput(VESSEL_WEIGHT)}</div>
          <h2>POWER</h2>
          <div className="vessel-form">{renderVesselInput(VESSEL_POWER)}</div>
          <h2>SPEED</h2>
          <div className="vessel-form">{renderVesselInput(VESSEL_SPEED)}</div>
          <h2>REMARK</h2>
          <div className="vessel-form">{renderVesselInput(VESSEL_REMARK)}</div>
        </div>
      </Modal>
    </>
  );
}
