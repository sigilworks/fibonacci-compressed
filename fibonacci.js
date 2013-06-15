// recursive (42 chars)
function f(i){return i<=1?i:f(i-1)+f(i-2)}

// recursive cached (79 chars)
function f(i,c){c=c||{};return(i in c)?c[i]:c[i]=i<=1?i:f(i-1,c)+f(i-2,c),c[i]}

// linear (71 chars)
function f(i){var a=j=0,b=1,tmp;while(j++<i)tmp=b,b=a+b,a=tmp;return a}

// fast loop (82 chars)
function f(i){var a=j=0,b=1,h=~~i-1>>1;for(;j<h;++j,b+=(a+=b)){}return i%2==0?b:a}
