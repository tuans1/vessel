import { Input, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { data } from "autoprefixer";
interface ModalProps {
  modalOpen: boolean;
  handleSubmitModal: Function;
  handleCancelModal: Function;
  data: {
    listRole: [];
    userDetail: {};
  };
}

export default function ModalComponent(props: ModalProps) {
  const [form, setForm] = useState({
    fullName: "",
    roleId: "",
    userId: "",
  });
  const [defaultRole, setDefaultRole] = useState("");
  useEffect(() => {
    if (props.data.userDetail?.roles?.length > 0) {
      setForm({
        fullName: props.data.userDetail.full_name,
        roleId: props.data.userDetail.roles[0].role_id,
        userId: props.data.userDetail.user_id,
      });
    } else {
      setForm({
        fullName: props.data.userDetail.full_name,
        roleId: undefined,
        userId: props.data.userDetail.user_id,
      });
    }
  }, [props.data.userDetail]);
  const handleChangeRole = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
  };
  console.log(defaultRole);

  return (
    <>
      <Modal
        title="Edit user"
        open={props.modalOpen}
        onOk={() => props.handleSubmitModal(form)}
        onCancel={() => props.handleCancelModal()}
        width={300}
      >
        <p>Full name</p>
        <Input
          placeholder="Enter full name"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />
        <p className="mt-2">Role</p>
        <Select
          className="w-full"
          value={form.roleId}
          placeholder="Select Role"
          onChange={(e) => setForm({ ...form, roleId: e })}
          options={props.data.listRole}
        />
      </Modal>
    </>
  );
}
