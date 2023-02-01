"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[158],{32342:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var r=a(67294),n=a(34334),o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},87303:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(83117),n=a(67294),o=a(34334),i=a(5730),s=a(20636),l=a(76602),c=a(63735),u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,a,i=e.lazy,m=e.block,p=e.defaultValue,f=e.values,h=e.groupId,b=e.className,v=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===p?p:null!=(t=null!=p?p:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:v[0].props.value;if(null!==x&&!y.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),T=w.tabGroupChoices,N=w.setTabGroupChoices,S=(0,n.useState)(x),k=S[0],C=S[1],O=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var R=T[h];null!=R&&R!==k&&y.some((function(e){return e.value===R}))&&C(R)}var F=function(e){var t=e.currentTarget,a=O.indexOf(t),r=y[a].value;r!==k&&(I(t),C(r),null!=h&&N(h,String(r)))},D=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r,n=O.indexOf(e.currentTarget)+1;a=null!=(r=O[n])?r:O[0];break;case"ArrowLeft":var o,i=O.indexOf(e.currentTarget)-1;a=null!=(o=O[i])?o:O[O.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},y.map((function(e){var t=e.value,a=e.label,i=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:F,onClick:F},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":k===t})}),null!=a?a:t)}))),i?(0,n.cloneElement)(v.filter((function(e){return e.props.value===k}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}function p(e){var t=(0,i.default)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},85367:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),i=a(87303),s=a(32342),l=["components"],c={sidebar_position:3,title:"File Structure"},u=void 0,d={unversionedId:"FileStructure",id:"FileStructure",title:"File Structure",description:"File Tags",source:"@site/docs/FileStructure.md",sourceDirName:".",slug:"/FileStructure",permalink:"/vrs/docs/FileStructure",draft:!1,editUrl:"https://github.com/facebookresearch/vrs/edit/main/website/docs/FileStructure.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"File Structure"},sidebar:"tutorialSidebar",previous:{title:"Organization",permalink:"/vrs/docs/Organization"},next:{title:"File Creation",permalink:"/vrs/docs/FileCreation"}},m={},p=[{value:"File Tags",id:"file-tags",level:2},{value:"Streams",id:"streams",level:2},{value:"Stream Tags",id:"stream-tags",level:2},{value:"Records",id:"records",level:2}],f={toc:p};function h(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.mdx)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"file-tags"},"File Tags"),(0,o.mdx)("p",null,"VRS files contain file tags. File tags are a set of name/value pairs, both of which are text strings. File tags may be set to any text string, but VRS provides some ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/vrs/blob/main/vrs/TagConventions.h"},"tag conventions")," to represent a few common concepts in VRS."),(0,o.mdx)("h2",{id:"streams"},"Streams"),(0,o.mdx)("p",null,"VRS files contain multiple streams, each associated with a ",(0,o.mdx)("em",{parentName:"p"},"device type"),", defined by a ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/vrs/blob/main/vrs/StreamId.h"},(0,o.mdx)("inlineCode",{parentName:"a"},"RecordableTypeId"))," enum value."),(0,o.mdx)("p",null,"A subset of ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecordableTypeId")," values represent generic devices, which we called \xabRecordable Class\xbb IDs. \xabRecordable Class\xbb IDs must be paired with \xabRecordable Flavor\xbb values to identify a user-specific type of device or data contained in that stream."),(0,o.mdx)("p",null,"A device type can also represent a virtual device, such as the output of a vision algorithm, or an event, such as a keyboard, mouse, or orientation event, that can be used to exercise code."),(0,o.mdx)("h2",{id:"stream-tags"},"Stream Tags"),(0,o.mdx)("p",null,"Streams also have tags, which are also a set of name/value pairs, both of which are text strings. Stream tags may be set to any string value, but VRS provides some ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/vrs/blob/main/vrs/TagConventions.h"},"tag conventions")," for streams to represent a few common concepts."),(0,o.mdx)("h2",{id:"records"},"Records"),(0,o.mdx)("p",null,"Streams contain a time-sorted sequence of records. Records have the following metadata:"),(0,o.mdx)(i.default,{mdxType:"Tabs"},(0,o.mdx)(s.default,{value:"timestamp",label:"Timestamp",default:!0,mdxType:"TabItem"},(0,o.mdx)("p",null,"Timestamps are ",(0,o.mdx)("inlineCode",{parentName:"p"},"double")," type values that count the number of seconds from a point in time, such as EPOCH, boot time, or any other fixed point."),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"All records in a VRS file must use timestamps in the same time domain. VRS sorts the records in the file and in playback in that order. If your data has device-specific timestamps you need to keep, you must save those timestamps inside the records. Images and IMU samples may have their own device-specific timestamps.")),(0,o.mdx)("p",null,"Timestamps are ",(0,o.mdx)("inlineCode",{parentName:"p"},"double")," type values, to be compatible with how time is represented in the Oculus world. Frequently, devices such as cameras and IMUs use their own internal clocks or counters, which are not synchronized. Using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"double")," type can now help distinguish VRS timestamps from device specific timestamps."),(0,o.mdx)("admonition",{type:"caution"},(0,o.mdx)("p",{parentName:"admonition"},"When recording audio, be aware that audio devices are de facto clocks; they produce data at a specific sample rate. If you use a system clock for your VRS records, that clock and your audio clock will drift. This will make it difficult to accurately synchronize audio data with your other data, especially images."),(0,o.mdx)("p",{parentName:"admonition"},"It\u2019s reasonably easy to establish a correspondence between your system clock and the first audio sample when you start recording. After that, the count of the audio samples produced, divided by the sample rate, determines the actual duration of time as seen by the audio device, and that duration will not match the duration of time measured by your system clock. Ten minutes after that, your system clock and the audio clock will no longer be in sync and the gap will be visually noticeable."),(0,o.mdx)("p",{parentName:"admonition"},"Therefore, be extremely careful when trying to find which audio sample corresponds to a particular image. This is very challenging to accomplish and is seldom very accurate."))),(0,o.mdx)(s.default,{value:"streamid",label:"StreamId",mdxType:"TabItem"},(0,o.mdx)("p",null,"A ",(0,o.mdx)("inlineCode",{parentName:"p"},"StreamId")," is composed of a device type ID (",(0,o.mdx)("inlineCode",{parentName:"p"},"RecordableTypeId")," enum value) and an instance ID, which is unique in the file for that device type ID. Instance IDs are generated by VRS.")),(0,o.mdx)(s.default,{value:"recordtype",label:"Record Type",mdxType:"TabItem"},(0,o.mdx)("p",null,"Records can be ",(0,o.mdx)("strong",{parentName:"p"},"Configuration"),", ",(0,o.mdx)("strong",{parentName:"p"},"State")," or ",(0,o.mdx)("strong",{parentName:"p"},"Data")," records."),(0,o.mdx)(i.default,{mdxType:"Tabs"},(0,o.mdx)(s.default,{value:"configuration",label:"Configuration Records",default:!0,mdxType:"TabItem"},(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Configuration records")," contain the settings to configure a device. For example, the resolution and exposure settings of a camera are stored in configuration records. Configuration records can also describe how an algorithm is configured."),(0,o.mdx)("p",null,"The configuration of a device is expected to be somewhat stable (does not change at every moment). However, configuration records are not meant to store parameters that never change, such as serial numbers. For parameters that cannot change (such as serial numbers), use stream tags, which can be queried directly as soon as the VRS file is open for reading.")),(0,o.mdx)(s.default,{value:"state",label:"State Records",mdxType:"TabItem"},(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"State records")," store the state of a device. They may store the internal state of an algorithm at different instants that may be the results of previous calculations that affect behaviors. For a vision algorithm, they may be tracking where features are in space at a given instant."),(0,o.mdx)("p",null,"The state of a device might be changing at any time, in particular when data is being processed. For performance reasons, we do not record each individual state. However, recording the state of a device can be important to allow it to jump back in time without having to replay the entire session."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Note:")," Typically, state records are empty, because the internal state of a device is not commonly tracked.")),(0,o.mdx)(s.default,{value:"data",label:"Data Records",mdxType:"TabItem"},(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Data records")," contain data that flows from a device or algorithm. For cameras, it is usually images. For an IMU device, it is usually a set of sensor samples. For a vision algorithm, it might be a pose."),(0,o.mdx)("p",null,"The implementer of the device is responsible for the data format. Data records typically include metadata, such as internal counters, timestamps, and other measurements, often along a captured image or an audio sample block."),(0,o.mdx)("p",null,"Use ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecordFormat")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"DataLayout")," to make your record format interoperable.")))),(0,o.mdx)(s.default,{value:"recordformatversion",label:"Record Format Version",mdxType:"TabItem"},(0,o.mdx)("p",null,"Use a record format version number (int32), to tie the record to a record format."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"RecordFormatStreamPlayer")," objects will be able to find the record's ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecordFormat")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"DataLayout")," definitions in the stream's metadata using that version number."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"StreamPlayer")," objects can also be used to read any records, but then, interpreting the record's data correctly will have to be entirely managed by the ",(0,o.mdx)("inlineCode",{parentName:"p"},"StreamPlayer"),' object. This later option can be useful when copying records "as is", without interpreting their data.'))))}h.isMDXComponent=!0},3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return c},MDXProvider:function(){return m},mdx:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){return function(t){var a=d(t.components);return r.createElement(e,o({},t,{components:a}))}},d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);