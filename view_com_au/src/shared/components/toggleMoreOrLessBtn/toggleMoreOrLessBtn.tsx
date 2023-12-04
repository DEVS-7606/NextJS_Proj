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
  toggleClassName?: string;
  propsChildClass?: string;
  propsChildClassIfTrue?: string;
  propsChildClassIfFalse?: string;
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
        <span className={`${props.toggleClassName}`}>
          {show ? props.ShowLess : props.ShowMore}
        </span>
        <span
          className={`${props.propsChildClass} ${
            show ? props.propsChildClassIfFalse : props.propsChildClassIfTrue
          }`}
        >
          {props.children}
        </span>
      </div>
    );
  };
  const renderValue = () => {
    return (
      <div
        className={`overflow-hidden transition-all duration-500 ${props.valueClassName}`} /* ${show? props.trueValueClass:falseValueClass} */
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
