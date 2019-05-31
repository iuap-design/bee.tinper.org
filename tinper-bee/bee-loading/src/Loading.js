import React, { Component } from "react";
import { findDOMNode } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Portal from "bee-overlay/build/Portal"; 
const loadImg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDJweCIgaGVpZ2h0PSI0MXB4IiB2aWV3Qm94PSIwIDAgNDIgNDEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUzLjIgKDcyNjQzKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT53aW5kb3U8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjQ5Ljc3NzAwMDElIiB5MT0iOTkuOTg4NjY2NyUiIHgyPSI0OS43NzcwMDAxJSIgeTI9IjIyLjc5MTY5ODQlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM4MkQ5MDAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMC4wNzY1JSIgeTE9IjQ5LjgwNDUlIiB4Mj0iODQuMDAyMTY0NCUiIHkyPSI0OS44MDQ1JSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZCRTBFIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwLjIyOTUwMDElIiB5MT0iLTAuMDgwOTk5OTQyOSUiIHgyPSI1MC4yMjk1MDAxJSIgeTI9IjgwLjA2MTg4MjglIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjQ3NDciIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iOTkuOTI1NjY2NyUiIHkxPSI0OS45MTglIiB4Mj0iMjQuMjY5MjQwMyUiIHkyPSI0OS45MTglIiBpZD0ibGluZWFyR3JhZGllbnQtNCI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDhDREMiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLop4blm74vbG9hZGluZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMuMDAwMDAwLCAtMy4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IndpbmRvdSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4wMDAwMDAsIDMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5YiG57uELTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBvcGFjaXR5PSIwLjQ5OTM3MjIxIiB4PSIwLjQwOTA5MDkwOSIgeT0iMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjM0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzAwQzg2NCIgY3g9IjYuNDA5MDkwOTEiIGN5PSIzNC4yNjY3MDkxIiByPSI2Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIGlkPSLliIbnu4QtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC40NTE3MjksIDI4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiIG9wYWNpdHk9IjAuNTA5MDIxNTc3IiB4PSI2LjI2MjM1NTk1IiB5PSIzLjU1MjcxMzY4ZS0xNSIgd2lkdGg9IjM0IiBoZWlnaHQ9IjEyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iI0ZGQkUwRSIgY3g9IjYuNTAyODE2OSIgY3k9IjYiIHI9IjYiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9IuWIhue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0zKSIgb3BhY2l0eT0iMC41MDEyMzIzMjkiIHg9Ii0yLjY1NTY1MzQ3ZS0xMyIgeT0iNS43ODgyMTI4MSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjM0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iI0ZGNDc0NyIgY3g9IjYiIGN5PSI2IiByPSI2Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC45NTQ1NDUsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC00KSIgb3BhY2l0eT0iMC41MDQxODUyNjgiIHg9IjAiIHk9IjAiIHdpZHRoPSIzNiIgaGVpZ2h0PSIxMS45NDI2NTY5Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzAwOENEQyIgY3g9IjM1IiBjeT0iNiIgcj0iNiI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';

const propTypes = {
  /**
   * @title 默认的公共类׺
   */
  clsPrefix: PropTypes.string,
  clsLoadBack: PropTypes.string,
  /**
   * @title 不同loading样式
   */
  loadingType: PropTypes.oneOf(["rotate", "line", "custom"]),

  /**
   * @title 不同尺寸
   */
  size: PropTypes.oneOf(["sm", "lg"]),
  /**
   * @title 不同颜色
   */
  color: PropTypes.oneOf(["primary", "success", "warning", ""]),
  /**
   * @title 是否全屏loading
   */
  fullScreen: PropTypes.bool,
  wrapperClassName: PropTypes.string
};

const defaultProps = {
  clsPrefix: "u-loading",
  clsLoadBack: "u-loading-back",
  loadingType: "rotate",
  color: "",
  showBackDrop: true,
  fullScreen: false,
  wrapperClassName: ""
};

const sizeMap = {
    sm: "sm",
    lg: "lg"
  },
  colorsMap = {
    primary: "primary",
    success: "success",
    warning: "warning"
  };

class Loading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      clsPrefix,
      loadingType,
      size,
      color,
      show,
      showBackDrop,
      container,
      children,
      fullScreen,
      wrapperClassName,
      indicator,
      ...others
    } = this.props;

    let clsObj = {};

    if (!show) return null;

    clsObj[`${clsPrefix}-${loadingType}`] = true;

    if (sizeMap[size]) {
      clsObj[`${clsPrefix}-${loadingType}-${sizeMap[size]}`] = true;
    }

    if (colorsMap[color]) {
      clsObj[`${clsPrefix}-${loadingType}-${colorsMap[color]}`] = true;
    }

    let classes = classnames(clsPrefix, clsObj);

    let dom = "";

    if (wrapperClassName) {
      classes += " " + wrapperClassName;
    }
    if (loadingType === "custom" && !!indicator) {
      dom = (
        <div>
          <div className={classes}>
            <div>{indicator}</div>
          </div>
          {children && <div className={`${clsPrefix}-desc`}>{children}</div>}
        </div>
      );
    } else if (loadingType === "rotate") {
      dom = (
        <div>
          <div className={classes}>
            <div><img src={loadImg}/></div>
            {/* <div className={`${clsPrefix}-image`}></div> */}
          </div>
          {children && <div className={`${clsPrefix}-desc`}>{children}</div>}
        </div>
      );
    } else if (loadingType === "line") {
      dom = (
        <div>
          <div className={classes}>
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          {children && <div className={`${clsPrefix}-desc`}>{children}</div>}
        </div>
      );
    }

    let backClassObj = {
      [`${clsPrefix}-backdrop`]: true,
      ["full-screen"]: fullScreen
    };

    if (showBackDrop) {
      dom = <div className={classnames(backClassObj)}>{dom}</div>;
    }
    //console.log(container);

    return <Portal container={container}>{dom}</Portal>;
  }
}
Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;
