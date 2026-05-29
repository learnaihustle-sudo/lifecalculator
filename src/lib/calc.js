export function money(n){return Number(n||0).toLocaleString(undefined,{style:'currency',currency:'USD',maximumFractionDigits:2})}
export function number(n){return Number(n||0).toLocaleString(undefined,{maximumFractionDigits:2})}
export function calculate(type, v){
 const a=Number(v.a||0), b=Number(v.b||0), c=Number(v.c||0), d=Number(v.d||0);
 if(type==='loan'){const principal=Math.max(a-b,0)||a; const r=(c/100)/12; const months=(d||30)*12; const p=r?principal*r*Math.pow(1+r,months)/(Math.pow(1+r,months)-1):principal/months; return money(p)+' per month'}
 if(type==='payoff'){const monthly=c||100; const apr=b/100/12; let bal=a, m=0, interest=0; while(bal>0&&m<600){const i=bal*apr; interest+=i; bal=bal+i-monthly; m++} return m>=600?'Increase payment to pay this off faster':`${m} months, about ${money(interest)} interest`}
 if(type==='compound'){let total=a; for(let i=0;i<(d||10)*12;i++){total=total*(1+(c/100)/12)+b} return money(total)}
 if(type==='budget') return `Needs: ${money(a*.5)} | Wants: ${money(a*.3)} | Savings: ${money(a*.2)}`;
 if(type==='tip'){const tip=a*(b||20)/100; return `Tip ${money(tip)} | Total ${money(a+tip)} | Each ${money((a+tip)/(c||1))}`}
 if(type==='salary') return money(a*b*52)+' per year';
 if(type==='margin') return ((a-b)/a*100).toFixed(2)+'% margin';
 if(type==='revenue') return money(a*(b||3)/1000);
 if(type==='bmi') return (703*a/(b*b)).toFixed(1)+' BMI';
 if(type==='calorie') return `${number(a*7/3500)} pounds per week estimated`;
 if(type==='water') return number(a*.5)+' ounces per day';
 if(type==='protein') return number(a*(b||.8))+' grams per day';
 if(type==='age') return new Date().getFullYear()-a+' years old';
 if(type==='datediff') return 'Enter dates on this calculator page to count days.';
 if(type==='dateadd') return 'Estimated due date is about 280 days after the first day of the last period.';
 if(type==='gas') return money((a/(b||25))*c);
 if(type==='concrete') return number((a*b*(c/12))/27)+' cubic yards';
 if(type==='paint') return number(a/(b||350))+' gallons';
 if(type==='lifetime') return number(a*365.25*(c||16)*60*(b||15))+' blinks';
 if(type==='heartbeats') return number(a*365.25*24*60*(b||75))+' heartbeats';
 if(type==='daily') return number(a*365.25*b)+' lifetime total';
 if(type==='screen') return number((a*365.25*b)/24/365.25)+' years of screen time';
 return number(a+b+c+d);
}