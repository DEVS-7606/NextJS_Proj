import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Container = ({ children }: IProps) => {
  return <div className="max-w-1200 mx-auto px-4">{children}</div>;
};

export default Container;
