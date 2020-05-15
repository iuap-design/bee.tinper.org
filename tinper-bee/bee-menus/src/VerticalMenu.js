import React from 'react';
import RcMenu, { Item, Divider, SubMenu, ItemGroup,SideContainer,MenuToggle } from './ExportMenu.js';
import animation from './_util/openAnimation';
import warning from './_util/warning';

export interface SelectParam {
  key: string;
  keyPath: Array<string>;
  item: any;
  domEvent: any;
  selectedKeys: Array<string>;
}

export interface ClickParam {
  key: string;
  keyPath: Array<string>;
  item: any;
  domEvent: any;
}

export interface MenuProps {
  id?: string;
  /** 主题颜色*/
  theme?: 'light' | 'dark';
  /** 菜单类型  enum: `vertical` `horizontal` `inline`*/
  mode?: 'vertical' | 'horizontal' | 'inline';
  /** 当前选中的菜单项 key 数组*/
  selectedKeys?: Array<string>;
  /** 初始选中的菜单项 key 数组*/
  defaultSelectedKeys?: Array<string>;
  /** 当前展开的菜单项 key 数组*/
  openKeys?: Array<string>;
  /** 初始展开的菜单项 key 数组*/
  defaultOpenKeys?: Array<string>;
  onOpenChange?: (openKeys: string[]) => void;
  /**
   * 被选中时调用
   *
   * @type {(item: any, key: string, selectedKeys: Array<string>) => void}
   */
  onSelect?: (param: SelectParam) => void;
  /** 取消选中时调用*/
  onDeselect?: (param: SelectParam) => void;
  /** 点击 menuitem 调用此函数*/
  onClick?: (param: ClickParam) => void;
  /** 根节点样式*/
  style?: React.CSSProperties;
  openAnimation?: string | Object;
  openTransitionName?: string | Object;
  className?: string;
  prefixCls?: string;
}

class Menu extends React.Component<MenuProps, any> {
  
  static defaultProps = {
    prefixCls: 'u-menu',
    className: '',
    theme: 'light',  // or dark
  };
  switchModeFromInline: boolean;
  constructor(props) {
    super(props);

    warning(
      !('onOpen' in props || 'onClose' in props),
      '`onOpen` and `onClose` are removed, please use `onOpenChange` instead.'
    );

    this.state = {
      openKeys: [],
    };
    this.rcMenu = {};
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.mode === 'inline' &&
        nextProps.mode !== 'inline') {
      this.switchModeFromInline = true;
    }
    if ('openKeys' in nextProps) {
      this.setOpenKeys(nextProps.openKeys);
    }
  }
  handleClick = (e) => {
    this.setOpenKeys([]);

    const onClick = this.props.onClick;
    if (onClick) {
      onClick(e);
    }
  }
  handleOpenChange = (openKeys: string[]) => {
    this.setOpenKeys(openKeys);

    const onOpenChange = this.props.onOpenChange;
    if (onOpenChange) {
      onOpenChange(openKeys);
    }
  }
  setOpenKeys(openKeys) {
    if (!('openKeys' in this.props)) {
      this.setState({ openKeys });
    }
  }
  render() {
    let openAnimation = this.props.openAnimation || this.props.openTransitionName;
    if (!openAnimation) {
      switch (this.props.mode) {
        case 'horizontal':
          openAnimation = '';
          break;
        case 'vertical':
          // When mode switch from inline
          // submenu should hide without animation
          if (this.switchModeFromInline) {
            openAnimation = animation;
            this.switchModeFromInline = false;
          } else {
            openAnimation = 'zoom-big';
          }
          break;
        case 'inline':
          openAnimation = animation;
          break;
        default:
      }
    }

    let props = {};
    const className = `${this.props.className} ${this.props.prefixCls}-${this.props.theme}`;
    if (this.props.mode !== 'inline') {
      // 这组属性的目的是
      // 弹出型的菜单需要点击后立即关闭
      // 另外，弹出型的菜单的受控模式没有使用场景
      props = {
        openKeys: this.state.openKeys,
        onClick: this.handleClick,
        onOpenChange: this.handleOpenChange,
        openTransitionName: openAnimation,
        className,
      };
    } else {
      props = {
        openAnimation,
        className,
      };
    }
    return <RcMenu ref={(el) => this.rcMenu = el}  {...this.props} {...props} />;
  }
}
Menu.Divider = Divider;
Menu.Item = Item;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;
Menu.MenuToggle = MenuToggle;
Menu.SideContainer = SideContainer;
export default Menu;