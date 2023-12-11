import { createContext, useContext, useEffect, useState } from "react";
import { MENU } from "@/constant/menu";
import { Cookies } from "react-cookie";
import type { MenuProps } from "antd";
import jwt_decode from "jwt-decode";

const MenuContext = createContext({});
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
export const MenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [menu, setMenu] = useState<Object>({
    listMenu: [],
    listPathName: [],
  });
  const cookies = new Cookies();
  useEffect(() => {
    if (cookies.get("token")) {
      const decode = jwt_decode(cookies.get("token"));
      const listPathName: string[] = [];
      const formattedMenu = MENU[decode.role[0].role_name].map((item) => {
        let test;
        if (Array.isArray(item.children)) {
          test = getItem(
            item.name,
            item.link,
            "",
            item.children!.map((x) => {
              listPathName.push(x.link);
              return getItem(x.name, x.link);
            })
          );
        } else {
          listPathName.push(item.link);
          return getItem(item.name, item.link);
        }
        return test;
      });
      setMenu({
        listPathName,
        listMenu: formattedMenu,
      });
    }
  }, []);
  return <MenuContext.Provider value={menu}>{children}</MenuContext.Provider>;
};

export const useMenuContext = () => useContext(MenuContext);
