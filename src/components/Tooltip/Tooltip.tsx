import { PropsWithChildren } from 'react';
import { ChildrenType, Tooltip as TooltipOriginal } from 'react-tooltip';
import styles from './Tooltip.module.scss';
import { Placement, Variant } from './types';

type TooltipProps = PropsWithChildren<{
  groupId?: string;
  /**
   * Position relative to the anchor element where the tooltip will be rendered (if possible)
   * @default 'top'
   */
  place?: Placement;
  /**
   * Set to `true` if you have content which is clickable.
   * This only works if you do NOT set your own isOpen/setIsOpen logic.
   *
   * **TIP**
   *
   * It is probably gonna look & feel better if you'd leave `shouldFollowMouse`
   * as _false_, when setting `isClickable` to _true_.
   * @default false
   */
  isClickable?: boolean;
  /**
   * @default 10
   */
  offset?: number;
  delayShow?: number;
  delayHide?: number;
  /**
   * @default undefined
   */
  isOpen?: boolean;
  /**
   * @default false
   */
  shouldFollowMouse?: boolean;
  /**
   * @default false
   */
  shouldOpenOnClick?: boolean;
  /**
   * @default false
   */
  hide?: boolean;
  /**
   * @default false
   */
  noArrow?: boolean;
  variant?: Variant;
  render?: (render: { content: string | null; activeAnchor: HTMLElement | null }) => ChildrenType;
  className?: string;
}>;

export default function Tooltip(props: TooltipProps) {
  const {
    groupId,
    isOpen,
    place = Placement.Top,
    isClickable,
    offset,
    delayShow,
    delayHide,
    shouldFollowMouse,
    shouldOpenOnClick,
    hide,
    noArrow,
    children,
    render,
    variant,
    className,
  } = props;

  return (
    <div className={styles.tooltip}>
      <TooltipOriginal
        id={groupId}
        isOpen={isOpen}
        place={place}
        clickable={isClickable}
        offset={offset}
        delayShow={delayShow}
        delayHide={delayHide}
        float={shouldFollowMouse}
        openOnClick={shouldOpenOnClick}
        hidden={hide}
        noArrow={noArrow}
        render={render}
        variant={variant}
        className={className}
        // anchorSelect={`.${tooltipClassName}`}
        // content='placeholder...' // <--- DO NOT USE THIS! It takes precedence over `children`.
        // setIsOpen={setIsOpen}
        // afterShow={() => {}}
        // afterHide={() => {}}
        // border='1px solid red'
        // opacity={0.9} // <--- defaults to 0.9
        // arrowColor='blue'
        // positionStrategy='fixed' // <--- defaults to 'absolute'. Set to 'fixed' if you run into issues with overflow: hidden on the tooltip parent container.
      >
        {children ?? 'Empty tooltip...'}
      </TooltipOriginal>
    </div>
  );
}
