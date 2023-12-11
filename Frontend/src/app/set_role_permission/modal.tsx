import { Col, Input, Modal, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { data } from "autoprefixer";
import axiosInstance from "@/config/axios";
interface ModalProps {
  modalOpen: boolean;
  handleSubmitModal: Function;
  handleCancelModal: Function;
  data: {
    listPermission: [];
    permissionDetail: {};
  };
}

export default function ModalComponent(props: ModalProps) {
  const [checkedPermission, setCheckedPermission] = useState([]);
  useEffect(() => {
    if (props.data.permissionDetail.role_id) {
      axiosInstance
        .get("/role/find?id=" + props.data.permissionDetail.role_id)
        .then((res) => {
          const checkedPermissions = res.data.permissions.map(
            (x) => x.permission_id
          );
          setCheckedPermission(checkedPermissions);
        });
    }
  }, [props.data.permissionDetail]);
  const handleCheckPermission = (checkedValues: CheckboxValueType[]) => {
    setCheckedPermission(checkedValues);
  };

  return (
    <>
      <Modal
        title={`${props.data.permissionDetail.role_name} Permission`}
        open={props.modalOpen}
        onOk={() => props.handleSubmitModal(checkedPermission)}
        onCancel={() => {
          props.handleCancelModal();
          setCheckedPermission([]);
        }}
        width={300}
      >
        <Checkbox.Group
          onChange={handleCheckPermission}
          className="w-full mt-4"
          value={checkedPermission}
        >
          <Row>
            {props.data.listPermission.map((x) => {
              return (
                <Col span={8}>
                  <Checkbox value={x.value}>{x.label}</Checkbox>
                </Col>
              );
            })}
          </Row>
        </Checkbox.Group>
      </Modal>
    </>
  );
}
// options={props.data.listPermission}
