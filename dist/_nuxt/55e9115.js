(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{506:function(t,o,e){var content=e(593);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(42).default)("2f785f1d",content,!0,{sourceMap:!1})},590:function(t,o,e){"use strict";var n=e(2),r=e(591),d=e(193);n({target:"Array",proto:!0},{fill:r}),d("fill")},591:function(t,o,e){"use strict";var n=e(27),r=e(136),d=e(43);t.exports=function(t){for(var o=n(this),e=d(o),l=arguments.length,h=r(l>1?arguments[1]:void 0,e),c=l>2?arguments[2]:void 0,f=void 0===c?e:r(c,e);f>h;)o[h++]=t;return o}},592:function(t,o,e){"use strict";e(506)},593:function(t,o,e){var n=e(41)((function(i){return i[1]}));n.push([t.i,".s-canvas[data-v-41f5e5e9]{height:31px}.s-canvas canvas[data-v-41f5e5e9]{border:1px solid #bababa;box-sizing:border-box;cursor:pointer;margin-top:1px}",""]),n.locals={},t.exports=n},626:function(t,o,e){"use strict";e.r(o);e(590),e(194);var n={name:"SIdentify",props:{identifyCode:{type:String,default:"1234"},fontSizeMin:{type:Number,default:28},fontSizeMax:{type:Number,default:34},backgroundColorMin:{type:Number,default:255},backgroundColorMax:{type:Number,default:255},colorMin:{type:Number,default:0},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:100},lineColorMax:{type:Number,default:255},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:180},contentWidth:{type:Number,default:95},contentHeight:{type:Number,default:36}},methods:{randomNum:function(t,o){return Math.floor(Math.random()*(o-t)+t)},randomColor:function(t,o){return"rgb("+this.randomNum(t,o)+","+this.randomNum(t,o)+","+this.randomNum(t,o)+")"},drawPic:function(){var t=document.getElementById("s-canvas").getContext("2d");t.textBaseline="bottom",t.fillStyle=this.randomColor(this.backgroundColorMin,this.backgroundColorMax),t.fillRect(0,0,this.contentWidth,this.contentHeight);for(var i=0;i<this.identifyCode.length;i++)this.drawText(t,this.identifyCode[i],i);this.drawLine(t),this.drawDot(t)},drawText:function(t,o,i){t.fillStyle=this.randomColor(this.colorMin,this.colorMax),t.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";var e=(i+1)*(this.contentWidth/(this.identifyCode.length+1)),n=this.randomNum(this.fontSizeMax,this.contentHeight-5),r=this.randomNum(-20,20);t.translate(e,n),t.rotate(r*Math.PI/180),t.fillText(o,0,0),t.rotate(-r*Math.PI/180),t.translate(-e,-n)},drawLine:function(t){for(var i=0;i<3;i++)t.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),t.beginPath(),t.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.stroke()},drawDot:function(t){for(var i=0;i<50;i++)t.fillStyle=this.randomColor(0,255),t.beginPath(),t.arc(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight),1,0,2*Math.PI),t.fill()}},watch:{identifyCode:function(){this.drawPic()}},mounted:function(){this.drawPic()}},r=(e(592),e(21)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"s-canvas"},[o("canvas",{staticClass:"ref-code",attrs:{id:"s-canvas",width:t.contentWidth,height:t.contentHeight}})])}),[],!1,null,"41f5e5e9",null);o.default=component.exports}}]);