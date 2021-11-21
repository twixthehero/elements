"use strict";(self.webpackChunkelements_demo=self.webpackChunkelements_demo||[]).push([[95],{9095:(U,u,n)=>{n.r(u),n.d(u,{ConfigurationModule:()=>Z});var s=n(6019),a=n(8394),p=n(8827),r=n(3863),e=n(3668);let m=(()=>{class o{constructor(){this.codeExampleInline=g,this.codeExampleModule=c,this.codeExamplePreConfigured=d}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["demo-configuration"]],decls:81,vars:3,consts:[[1,"wrapper"],[1,"large"],[3,"highlight"],["routerLink","../../../examples/advanced"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2,"Configuration"),e.qZA(),e.TgZ(3,"blockquote",1),e._uU(4," The library supports additional configuration which can improve developer experience when using multiple elements (or same element multiple time). "),e.qZA(),e.TgZ(5,"h2"),e._uU(6,"Pre-configuration with module"),e.qZA(),e.TgZ(7,"p"),e._uU(8," Let's imagine situation in which we want to use multiple instances of a single element in the template of one of our feature components. "),e.qZA(),e.TgZ(9,"blockquote"),e._uU(10," Example of such an use case could be that we have a "),e.TgZ(11,"code"),e._uU(12,"<user-profile-element>"),e.qZA(),e._uU(13," and we want to display top 3 users for a given month. We would need to pass url in all of the elements... "),e.qZA(),e._UZ(14,"pre",2),e.TgZ(15,"p"),e._uU(16," This could be optimized by storing url once in the component variable but still, component needs to be aware of the element url. This can lead to further inconvenient situation when element url changes and we would have to search for the url in te whole code base... "),e.qZA(),e.TgZ(17,"p"),e._uU(18," Compare this to the following solution where we pre-configure all of the elements we will be using in our application with the help of the "),e.TgZ(19,"code"),e._uU(20,"LazyElementsModule.forRoot(options)"),e.qZA(),e._uU(21," (or "),e.TgZ(22,"code"),e._uU(23,".forFeature()"),e.qZA(),e._uU(24,") static functions! "),e.qZA(),e._UZ(25,"pre",2),e.TgZ(26,"p"),e._uU(27," We're creating options of the "),e.TgZ(28,"code"),e._uU(29,"LazyElementModuleOptions"),e.qZA(),e._uU(30," type and passing in array of "),e.TgZ(31,"code"),e._uU(32,"ElementConfig"),e.qZA(),e._uU(33," items. Every item specifies element "),e.TgZ(34,"code"),e._uU(35,"tag"),e.qZA(),e._uU(36," and "),e.TgZ(37,"code"),e._uU(38,"url"),e.qZA(),e._uU(39,"... "),e.qZA(),e.TgZ(40,"p"),e._uU(41," With this configuration in place, we can adjust original "),e.TgZ(42,"code"),e._uU(43,"FeatureComponent"),e.qZA(),e._uU(44," template to look like this... "),e.qZA(),e._UZ(45,"pre",2),e.TgZ(46,"p"),e._uU(47," As we can see, the component template got simple! There is less redundant data and the configuration was centralized in the predictable place that is easy to find and adjust when necessary! "),e.qZA(),e.TgZ(48,"p"),e._uU(49," Check out the "),e.TgZ(50,"a",3),e._uU(51,"working demo"),e.qZA(),e._uU(52," of this approach! "),e.qZA(),e.TgZ(53,"h2"),e._uU(54,"Supported features"),e.qZA(),e.TgZ(55,"ul"),e.TgZ(56,"li"),e._uU(57," \u2705 Global and granular configuration of "),e.TgZ(58,"code"),e._uU(59,"isModule"),e.qZA(),e._uU(60," flag (script type module for ECMAScript modules) "),e.qZA(),e.TgZ(61,"li"),e._uU(62," \u2705 Global and granular configuration of "),e.TgZ(63,"code"),e._uU(64,"loadingComponent"),e.qZA(),e._uU(65," (and "),e.TgZ(66,"code"),e._uU(67,"loadingTemplate"),e.qZA(),e._uU(68,") "),e.qZA(),e.TgZ(69,"li"),e._uU(70," \u2705 Global and granular configuration of "),e.TgZ(71,"code"),e._uU(72,"errorComponent"),e.qZA(),e._uU(73," (and "),e.TgZ(74,"code"),e._uU(75,"errorTemplate"),e.qZA(),e._uU(76,") "),e.qZA(),e.TgZ(77,"li"),e._uU(78," \u2705 Granular element pre-loading (config based) "),e.qZA(),e.TgZ(79,"li"),e._uU(80," \u2705 Ability to pre-load elements based on custom conditions using a service "),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(14),e.Q6J("highlight",i.codeExampleInline),e.xp6(11),e.Q6J("highlight",i.codeExampleModule),e.xp6(20),e.Q6J("highlight",i.codeExamplePreConfigured))},directives:[a.y$,r.yS],styles:["ol[_ngcontent-%COMP%]{margin:0 0 20px}h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:bold}ul[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]{text-decoration:line-through}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}"]}),o})();const g="@Component({\n  selector: 'your-org-feature',\n  template: `\n    <user-profile-element *axLazyElement=\"'https://your-org.com/elements/user-profile-element.js'\"></user-profile-element>\n    <user-profile-element *axLazyElement=\"'https://your-org.com/elements/user-profile-element.js'\"></user-profile-element>\n    <user-profile-element *axLazyElement=\"'https://your-org.com/elements/user-profile-element.js'\"></user-profile-element>\n  `\n})\nexport class FeatureComponent {}",c="// pre-configured LazyElementsModule\nconst options: LazyElementModuleOptions = {\n  elementConfigs: [\n    { tag: 'user-profile-element', url: 'https://your-org.com/elements/user-profile-element.js' }\n    { tag: 'some-other-element', url: 'https://your-org.com/elements/some-other-element.js' }\n  ]\n};\n\n@NgModule({\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n  declarations: [FeatureComponent],\n  imports: [\n    LazyElementsModule.forFeature(options),\n  ]\n})\nexport class FeatureModule { }\n",d="@Component({\n  selector: 'your-org-feature',\n  template: `\n    <user-profile-element *axLazyElement></user-profile-element>\n    <user-profile-element *axLazyElement></user-profile-element>\n    <user-profile-element *axLazyElement></user-profile-element>\n  `\n})\nexport class FeatureComponent {}",h=[{path:"",component:m}];let f=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[r.Bz.forChild(h)],r.Bz]}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[s.ez,a._l,p.m,f]]}),o})()}}]);