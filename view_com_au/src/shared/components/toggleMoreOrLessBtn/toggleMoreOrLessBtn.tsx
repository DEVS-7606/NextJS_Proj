import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useRef,
  useState,
} from "react";

interface Iprops {
  mainClassName?: string;
  initialHeight: string;
  className: string;
  ShowLess:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
  ShowMore:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
  children?:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
  valueClassName?: string;
  value:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}

const ToggleButton = (props: Iprops) => {
  const [show, setShow] = useState(false);
  const heightRef = useRef<string>(props.initialHeight);
  const customRef = useRef<any>(null);

  const toggle = () => {
    setShow(!show);
    if (!show) {
      return (heightRef.current = customRef.current?.scrollHeight);
    }
    heightRef.current = props.initialHeight;
  };

  const renderToggleBtn = () => {
    return (
      <div
        className={`flex justify-start items-center cursor-pointer ${props.className}`}
        onClick={() => toggle()}
      >
        <span className={`flex flex-row items-center`}>
          {show ? props.ShowLess : props.ShowMore}
        </span>
        {props.children}
      </div>
    );
  };
  const renderValue = () => {
    return (
      <div
        className={`overflow-hidden transition-all duration-500 ${
          show &&
          (props.initialHeight === "120px" || props.initialHeight === "200px")
            ? `pl-8 before:bg-gradient-to-t before:from-transparent before:via-transparent before:to-transparent`
            : props.valueClassName
        }`}
        ref={customRef}
        style={{ height: heightRef.current }}
      >
        {props.value}
      </div>
    );
  };

  return (
    <div className={props.mainClassName}>
      {renderValue()}
      {renderToggleBtn()}
    </div>
  );
};

export default ToggleButton;
