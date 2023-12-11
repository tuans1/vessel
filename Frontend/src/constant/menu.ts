export const MENU = {
  admin: [
    { name: "User", link: "/users" },
    {
      name: "Role & Permission",
      link: "/role_permission",
      children: [
        { name: "Create Role & Permission", link: "/create_role_permission" },
        { name: "Set Role & Permission", link: "/set_role_permission" },
      ],
    },
    { name: "Vessel Management", link: "/vessel" },
  ],
  "sub-admin": [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Category", link: "/category" },
  ],
};
