(this["webpackJsonpgenesys-dice-roller"]=this["webpackJsonpgenesys-dice-roller"]||[]).push([[0],{14:function(t,e,s){},15:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var a=s(0),l=s(1),i=s.n(l),o=s(4),c=s.n(o),r=(s(14),s(5)),n=s(6),d=s(2),h=s(8),u=s(7),b=(s.p,s(15),[{id:"Ability",diceCode:1,sides:8},{id:"Proficiency",diceCode:2,sides:12},{id:"Boost",diceCode:3,sides:6},{id:"Difficulty",diceCode:4,sides:8},{id:"Challenge",diceCode:5,sides:12},{id:"Setback",diceCode:6,sides:6}]),T=function(t){t.roll;return null},j=function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(t){var a;return Object(r.a)(this,s),(a=e.call(this,t)).increment=a.increment.bind(Object(d.a)(a)),a.decrement=a.decrement.bind(Object(d.a)(a)),a}return Object(n.a)(s,[{key:"increment",value:function(){this.props.rollMore(this.props.diceCode)}},{key:"decrement",value:function(){this.props.rollLess(this.props.diceCode)}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{children:[Object(a.jsx)("span",{className:this.props.id,children:this.props.id}),": ",this.props.rollAmount]}),Object(a.jsx)("button",{onClick:this.decrement,children:"-"}),Object(a.jsx)("button",{onClick:this.increment,children:"+"})]})}}]),s}(i.a.Component),f=function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(t){var a;return Object(r.a)(this,s),(a=e.call(this,t)).diceRoll=function(t){for(var e=[],s=0,l=0,i=0,o=0,c=0,r=0,n=0,d=0;d<a.state.abilityTotal;d++)e[d]=Math.floor(8*Math.random())+1,s+=e[d],console.log(e[d]),2===e[d]||3===e[d]?l+=1:4===e[d]?l+=2:5===e[d]||6===e[d]?i+=1:7===e[d]?(l+=1,i+=1):8===e[d]&&(i+=2);for(var h=0;h<a.state.proficiencyTotal;h++)e[h]=Math.floor(12*Math.random())+1,s+=e[h],console.log(e[h]),2===e[h]||3===e[h]?l+=1:4===e[h]||5===e[h]?l+=2:6===e[h]?i+=1:7===e[h]||8===e[h]||9===e[h]?(l+=1,i+=1):10===e[h]||11===e[h]?i+=2:12===e[h]&&(o+=1);for(var u=0;u<a.state.boostTotal;u++)e[u]=Math.floor(6*Math.random())+1,s+=e[u],console.log(e[u]),3===e[u]?l+=1:4===e[u]?(l+=1,i+=1):5===e[u]?i+=2:6===e[u]&&(i+=1);for(var b=0;b<a.state.difficultyTotal;b++)e[b]=Math.floor(8*Math.random())+1,s+=e[b],console.log(e[b]),2===e[b]?c+=1:3===e[b]?c+=2:4===e[b]||5===e[b]||6===e[b]?r+=1:7===e[b]?r+=2:8===e[b]&&(c+=1,r+=1);for(var T=0;T<a.state.challengeTotal;T++)e[T]=Math.floor(12*Math.random())+1,s+=e[T],console.log(e[T]),2===e[T]||3===e[T]?c+=1:4===e[T]||5===e[T]?c+=2:6===e[T]||7===e[T]?r+=1:8===e[T]||9===e[T]?(c+=1,r+=1):10===e[T]||11===e[T]?r+=2:12===e[T]&&(n+=1);for(var j=0;j<a.state.setbackTotal;j++)e[j]=Math.floor(6*Math.random())+1,s+=e[j],console.log(e[j]),3===e[j]||4===e[j]?c+=1:5!==e[j]&&6!==e[j]||(r+=1);a.setState({numberOfDice:1,rolls:e,rollSum:s,successTotal:l,advantageTotal:i,triumphTotal:o,failureTotal:c,threatTotal:r,despairTotal:n})},a.state={numberOfDice:0,rolls:[],rollSum:null,abilityTotal:0,proficiencyTotal:0,boostTotal:0,difficultyTotal:0,challengeTotal:0,setbackTotal:0,successTotal:0,advantageTotal:0,triumphTotal:0,failureTotal:0,threatTotal:0,despairTotal:0,rollAmount:0},a.rollMore=a.rollMore.bind(Object(d.a)(a)),a.rollLess=a.rollLess.bind(Object(d.a)(a)),a}return Object(n.a)(s,[{key:"rollMore",value:function(t){var e;1===t?e=this.state.abilityTotal:2===t?e=this.state.proficiencyTotal:3===t?e=this.state.boostTotal:4===t?e=this.state.difficultyTotal:5===t?e=this.state.challengeTotal:6===t&&(e=this.state.setbackTotal),e<5&&(e+=1,1===t?this.setState({abilityTotal:e}):2===t?this.setState({proficiencyTotal:e}):3===t?this.setState({boostTotal:e}):4===t?this.setState({difficultyTotal:e}):5===t?this.setState({challengeTotal:e}):6===t&&this.setState({setbackTotal:e}))}},{key:"rollLess",value:function(t){var e;1===t?e=this.state.abilityTotal:2===t?e=this.state.proficiencyTotal:3===t?e=this.state.boostTotal:4===t?e=this.state.difficultyTotal:5===t?e=this.state.challengeTotal:6===t&&(e=this.state.setbackTotal),e>0&&(e-=1,1===t?this.setState({abilityTotal:e}):2===t?this.setState({proficiencyTotal:e}):3===t?this.setState({boostTotal:e}):4===t?this.setState({difficultyTotal:e}):5===t?this.setState({challengeTotal:e}):6===t&&this.setState({setbackTotal:e}))}},{key:"calculateOutcome",value:function(){var t,e,s,l,i=this.state.successTotal-this.state.failureTotal,o=this.state.advantageTotal-this.state.threatTotal;return i<0?t=(i*=-1)>1?i+" Failures":i+" Failure":0===i?i=null:i>0&&(t=i>1?i+" Successes":i+" Success"),o<0?e=(o*=-1)>1?o+" Threats":o+" Threat":0===o?o=null:o>0&&(e=o>1?o+" Advantages":o+" Advantage"),this.state.triumphTotal>0&&(s=this.state.triumphTotal+" Triumphs"),this.state.despairTotal>0&&(l=this.state.despairTotal+" Despairs"),Object(a.jsxs)("p",{children:[t," ",e," ",s," ",l]})}},{key:"render",value:function(){var t,e=this;return t=b.map((function(t,s,l){l[s].id;var i,o=l[s].diceCode;return 1===o?i=e.state.abilityTotal:2===o?i=e.state.proficiencyTotal:3===o?i=e.state.boostTotal:4===o?i=e.state.difficultyTotal:5===o?i=e.state.challengeTotal:6===o&&(i=e.state.setbackTotal),Object(a.jsx)(j,{id:l[s].id,diceCode:l[s].diceCode,sides:l[s].sides,amount:e.state.numberOfDice,rollMore:e.rollMore,rollLess:e.rollLess,rollAmount:i})})),Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)("div",{className:"buttons",children:t}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"rollButton",onClick:function(){return e.diceRoll()},children:"Roll Dice"})}),Object(a.jsxs)("div",{className:"results",children:[this.state.rolls.map((function(t,e){return Object(a.jsx)(T,{roll:t},e)})),this.state.numberOfDice?Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Overall Results:"}),Object(a.jsxs)("div",{className:"rollTotal",children:[Object(a.jsxs)("div",{children:["Successes: ",Object(a.jsxs)("span",{className:"successes",children:[this.state.successTotal," "]}),"Advantages: ",Object(a.jsxs)("span",{className:"advantages",children:[this.state.advantageTotal," "]}),"Triumphs: ",Object(a.jsx)("span",{className:"triumphs",children:this.state.triumphTotal})]}),Object(a.jsxs)("div",{children:["Failures: ",Object(a.jsxs)("span",{className:"failures",children:[this.state.failureTotal," "]}),"Threat: ",Object(a.jsxs)("span",{className:"threats",children:[this.state.threatTotal," "]}),"Despairs: ",Object(a.jsx)("span",{className:"despairs",children:this.state.despairTotal})]})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Outcome:"}),Object(a.jsx)("div",{children:this.calculateOutcome()})]})]}):null]})]})}}]),s}(i.a.Component),p=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(e){var s=e.getCLS,a=e.getFID,l=e.getFCP,i=e.getLCP,o=e.getTTFB;s(t),a(t),l(t),i(t),o(t)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.49b142fe.chunk.js.map