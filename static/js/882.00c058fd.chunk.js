"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[882],{7882:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a="ContactFor_form__n3gBy",r="ContactFor_formLabel__hWcoP",s="ContactFor_formInput__PVK-+",c="ContactFor_formButton__F0MT5",i=n(9434),l=n(4573),o=n(5264),u=function(e){return e.contacts.items},m=function(e){return e.filter},f=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.error},_=n(184);function p(){var e=(0,i.I0)(),t=(0,i.v9)(u);return(0,_.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=n.currentTarget,r={name:n.target.elements.name.value,number:n.target.elements.number.value};t.some((function(e){return e.name.toLowerCase()===r.name.toLowerCase()}))?o.Notify.failure("".concat(r.name," already exists.")):e((0,l.uK)(r)),a.reset()},className:a,children:[(0,_.jsxs)("label",{className:r,children:["Name",(0,_.jsx)("input",{type:"text",name:"name",className:s,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)("label",{className:r,children:["Phone",(0,_.jsx)("input",{type:"tel",name:"number",className:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)("button",{type:"submit",className:c,children:"Add contact"})]})}var h="ContactList_contactList__UFVCg",x="ContactList_listItem__SptUx",b="ContactList_listName__f7TzU",v="ContactList_listButton__UqBsU";function C(){var e=(0,i.I0)(),t=(0,i.v9)(m),n=(0,i.v9)(u),a=t.toLowerCase().trim(),r=n.filter((function(e){return e.name.toLowerCase().includes(a)}));return(0,_.jsx)("ul",{className:h,children:r.map((function(t){var n=t.id,a=t.name,r=t.number;return(0,_.jsxs)("li",{className:x,children:[(0,_.jsxs)("p",{className:b,children:[a,": ",r]}),(0,_.jsx)("button",{type:"button",onClick:function(){return e((0,l.GK)(n))},className:v,children:"Delete contact"})]},n)}))})}var j=n(2791),N={filterabel:"Filter_filterabel__-QS71",filterTitle:"Filter_filterTitle__5SDqd",filterInput:"Filter_filterInput__1Cysk"},y=n(8579);function F(){var e=(0,i.I0)(),t=(0,i.v9)((function(e){return e.filter}));return(0,_.jsxs)("label",{className:N.filterLabel,children:[(0,_.jsx)("span",{className:N.filterTitle,children:"Find contacts by name"}),(0,_.jsx)("input",{type:"text",value:t,onChange:function(t){e((0,y.T)(t.target.value))},className:N.filterInput})]})}var L=n(6825);function g(){var e=(0,i.v9)(f),t=(0,i.v9)(d),n=(0,i.I0)();return(0,j.useEffect)((function(){n((0,l.yF)())}),[n]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(p,{}),(0,_.jsx)("h2",{children:"Contacts"}),(0,_.jsx)(F,{}),e&&!t&&(0,_.jsx)(L.Z,{}),(0,_.jsx)(C,{})]})}}}]);
//# sourceMappingURL=882.00c058fd.chunk.js.map