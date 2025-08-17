import{j as c}from"./jsx-runtime-D_zvdyIk.js";const i="_container_ufj6j_1",d={container:i},t=({children:r,onClick:s,disabled:n=!1,type:o="button"})=>c.jsx("button",{className:d.container,type:o,onClick:s,disabled:n,children:r});t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"button" | "submit" | "reset"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'},{name:"literal",value:'"reset"'}]},description:"",defaultValue:{value:'"button"',computed:!1}}}};const{fn:u}=__STORYBOOK_MODULE_TEST__,m={title:"Example/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onClick:u()}},e={args:{children:"asdf"}},a={args:{children:"asdf"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "asdf"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "asdf"
  }
}`,...a.parameters?.docs?.source}}};const p=["Primary","Secondary"];export{e as Primary,a as Secondary,p as __namedExportsOrder,m as default};
